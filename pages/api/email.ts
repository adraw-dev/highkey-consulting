import type { NextApiRequest, NextApiResponse } from "next";
import EmailTemplate from "../Emails/contact";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email } = req.query; // Usar req.query para obtener parámetros de consulta en solicitudes GET
debugger
    try {
      await resend.emails.send({
        from: "contact@jenniferlvelez.com",
        to: "alejandrovelez74@gmail.com",
        subject: "hello world",
        react: EmailTemplate({ userFirstname: name as string }),
      });
      debugger;
      res.status(200).json({ status: true, message: `Email sent to ${email}` });
    } catch (error) {
      res.status(500).json({ status: false, error: (error as any)?.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
