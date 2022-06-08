import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "331a4c84cae96c",
    pass: "86784c97da3930"
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Fidget <oi@feedget.com>",
      to: "Diovane Marcelino <diovanemarcelinoazevedo@gmail.com>",
      subject,
      html: body,
    });
  }
}
