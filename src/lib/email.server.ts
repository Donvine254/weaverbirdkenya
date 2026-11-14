import process from "node:process";
import nodemailer from "nodemailer";

type EmailMessage = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

function createEmailTransporter() {
  const user = process.env.GOOGLE_APP_EMAIL;
  const pass = process.env.GOOGLE_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error("GOOGLE_APP_EMAIL and GOOGLE_APP_PASSWORD must be configured to send email.");
  }

  return {
    user,
    transporter: nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    }),
  };
}

export async function sendEmail(message: EmailMessage) {
  const { user, transporter } = createEmailTransporter();

  return transporter.sendMail({
    from: user,
    ...message,
  });
}
