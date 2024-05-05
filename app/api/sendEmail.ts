// pages/api/sendEmail.js

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Email content
      const mailOptions = {
        from: "cedarvidz@gmail.com",
        to: "cedarwudnovels@gmail.com",
        subject: "Verdroof Challenge",
        text: "compete now",
      };

      // Create a transporter object
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "cedarvidz@gmail.com",
          pass: "clutchwuddiv2019",
        },
      });

      // Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
