import { NextApiRequest, NextApiResponse } from "next";
import { SMTPClient } from "emailjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { message, name, email, subject } = JSON.parse(req.body);

  const client = new SMTPClient({
    user: process.env.EMAIL_SENDER,
    password: process.env.EMAIL_SENDER_PASSWORD,
    host: process.env.SMTP_HOST,
    ssl: false,
    port: 587,
    tls: true,
  });

  await client
    .sendAsync({
      text: `${name} \n ${message} \n from : ${email}`,
      from: process.env.EMAIL_SENDER!,
      to: process.env.EMAIL_RECIPIENT!,
      subject: subject,
    })
    .then(() => res.status(200).send("email sent"))
    .catch((err) => {
      res.status(500).send(err);
    });
}
