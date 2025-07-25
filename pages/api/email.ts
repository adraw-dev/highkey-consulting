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
    const { name, email, service, Message } = req.body;
    debugger;
    try {
      const { data, error } = await resend.emails.send({
        from: "jennifer <jennifer@jenniferlvelez.com>",
        // from: "jennifer@jenniferlvelez.com",
        to: [email],

        subject: "Hello name from High Key Consulting",
        react: EmailTemplate({
          userFirstname: name,
          service,
          message: Message,
        }),
      });

      if (error) {
        return res.status(500).json({ status: 500, error: error });
      }

      res
        .status(200)
        .json({ status: true, message: `Email sent to ${email}, ${data}` });
    } catch (error) {
      res.status(500).json({ status: false, error: (error as any)?.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
