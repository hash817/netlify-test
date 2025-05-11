'use server';
import nodemailer from 'nodemailer';
import { SendMailOptions } from 'nodemailer';
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_PORT = process.env.SMTP_SERVER_PORT;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
// const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: SMTP_SERVER_PORT,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail(props: SendMailOptions) {
  try {
    console.log(SMTP_SERVER_USERNAME)
    const isVerified = await transporter.verify();
    console.log(isVerified)
  } catch (error) {
    console.error('Something Went Wrong', error);
    return;
  }
  const info = await transporter.sendMail({
    from: props.from,
    to: props.to,
    subject: props.subject,
    text: props.text,
    html: props.html ? props.html : '',
    attachments: props.attachments
  });
  console.log('Message Sent', info.messageId);
  return info;
}