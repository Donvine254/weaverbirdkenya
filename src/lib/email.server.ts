import nodemailer from "nodemailer";

// Reuse the transporter between email requests
let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;
let transporterCredentials: { user: string; password: string } | null = null;

function getTransporter() {
  const user = process.env.GOOGLE_APP_EMAIL?.trim();
  const password = process.env.GOOGLE_APP_PASSWORD?.replace(/\s/g, "");

  if (!user || !password) {
    throw new Error("GOOGLE_APP_EMAIL and GOOGLE_APP_PASSWORD must be configured.");
  }

  if (password.length !== 16) {
    throw new Error("GOOGLE_APP_PASSWORD must be a 16-character Gmail App Password.");
  }

  if (
    !transporter ||
    transporterCredentials?.user !== user ||
    transporterCredentials?.password !== password
  ) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass: password,
      },
    });
    transporterCredentials = { user, password };
  }

  return { transporter, user };
}

type EmailMessage = {
  to: string;
  subject: string;
  html?: string;
  text?: string;
  replyTo?:
    | string
    | {
        name?: string;
        address: string;
      };
};

export async function sendEmail(message: EmailMessage) {
  const { transporter: mailer, user } = getTransporter();

  return mailer.sendMail({
    ...message,
    from: `"Weaverbird Garments" <${user}>`,
  });
}
