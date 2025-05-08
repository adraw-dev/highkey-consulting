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
    const { name, email } = req.body;
    debugger;
    try {
      const { data, error } = await resend.emails.send({
        from: "jennifer <jennifer@jenniferlvelez.com>",
        // from: "jennifer@jenniferlvelez.com",
        to: ["alejandrovelez74@gmail.com"],
        
        subject: "Hello world",
        react: EmailTemplate({ userFirstname: name }),
      });

      if (error) {
        return res.status(500).json({ status: 500, error: error });
        // return Response.json({ error }, { status: 500 });
      }

      // return Response.json(data);
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
