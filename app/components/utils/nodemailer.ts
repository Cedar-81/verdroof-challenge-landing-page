import nodemailer, { Transporter, SentMessageInfo } from "nodemailer";
import { EmailFormData } from "./helpers";
import { template, templateText } from "./emailtemplate";

interface EmailOptions {
  from: string;
  to: string;
  subject?: string;
  text?: string;
  html?: string;
}

export async function sendMail({
  email,
  ref_code,
  name,
}: EmailFormData): Promise<SentMessageInfo> {
  const transport: Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL!,
      pass: process.env.SMTP_PASS!,
    },
  });

  // console.log(
  //     "argsData: ",
  //     process.env.SMTP_EMAIL,
  //     process.env.SMTP_PASS,
  //     email,
  //     ref_code,
  //     name
  //   );

  try {
    await transport.verify(); // Test SMTP connection
  } catch (error) {
    throw new Error(
      "Error verifying SMTP connection: " + (error as Error).message
    );
  }

  const mailOptions: EmailOptions = {
    from: process.env.SMTP_EMAIL as string,
    to: email as string,
    subject: "Welcome to Verdroof Challenge!!!",
    text: templateText({
      insta_link: "https://www.instagram.com/verdroof/",
      twitter_link: "https://twitter.com/Verdroof",
      linkedin_link: "https://www.linkedin.com/company/verdroof/",
      facebook_link: "https://facebook.com/verdroof",
      user_name: name,
      ref_link: `https://verdroof.com/referrals/${ref_code}`,
      roomie_link: "https://verdroof.com/",
      planet_link: "https://verdroof.com/",
      earn_link: "https://verdroof.com/",
    }) as string,
    html: template({
      insta_link: "https://www.instagram.com/verdroof/",
      twitter_link: "https://twitter.com/Verdroof",
      linkedin_link: "https://www.linkedin.com/company/verdroof/",
      facebook_link: "https://facebook.com/verdroof",
      user_name: name,
      ref_link: `https://verdroof.com/referrals/${ref_code}`,
      roomie_link: "https://verdroof.com/",
      planet_link: "https://verdroof.com/",
      earn_link: "https://verdroof.com/",
    }) as string,
  };

  try {
    const sendResult: SentMessageInfo = await transport.sendMail(mailOptions);
    return sendResult;
  } catch (error) {
    throw new Error("Error sending email: " + (error as Error).message);
  }
}
