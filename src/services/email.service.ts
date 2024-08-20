import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import {
  NODE_MAILER_PASS,
  NODE_MAILER_SENDER_EMAIL,
  NODE_MAILER_SMTP_HOST,
  NODE_MAILER_SMTP_PORT,
  NODE_MAILER_USER,
} from 'src/constants/env';
import { ServiceResponse } from 'src/globalDto';

export interface MailParams {
  subject: string;
  to: string;
  message: string;
  cc?: string[];
  attachments?: [
    { filename: string; content?: Buffer | string; path?: string },
  ];
}

export const sendMail = async (
  _params: MailParams,
): Promise<ServiceResponse> => {
  try {
    const transport = nodemailer.createTransport({
      host: NODE_MAILER_SMTP_HOST,
      port: NODE_MAILER_SMTP_PORT,
      secure: false,
      auth: {
        user: NODE_MAILER_USER,
        pass: NODE_MAILER_PASS,
      },
    } as SMTPTransport.Options);

    const config: Mail.Options = {
      subject: _params.subject,
      from: NODE_MAILER_SENDER_EMAIL,
      to: _params.to,
      cc: _params.cc,
      html: _params.message,
      attachments: _params.attachments,
    };

    const info = await transport.sendMail(config);

    return { status: true, data: info, error: null };
  } catch (error) {
    return { status: false, data: null, error };
  }
};
