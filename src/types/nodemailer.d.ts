declare module "nodemailer" {
  type TransportOptions = {
    service: string;
    auth: {
      user: string;
      pass: string;
    };
  };

  type MessageOptions = {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
  };

  type SentMessageInfo = {
    messageId: string;
    accepted: string[];
    rejected: string[];
    response: string;
  };

  type Transporter = {
    sendMail(message: MessageOptions): Promise<SentMessageInfo>;
  };

  function createTransport(options: TransportOptions): Transporter;

  const nodemailer: {
    createTransport: typeof createTransport;
  };

  export default nodemailer;
}
