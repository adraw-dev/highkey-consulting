import type { NextApiRequest, NextApiResponse } from "next";
import EmailUserTemplate from "../Emails/contact";
import EmailAdminTemplate from "../Emails/newUser";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, service, Message } = req.body;

    try {
      const emailDataUser = {
        from: "jennifer <jennifer@jenniferlvelez.com>",
        subject: `Hello ${name} from High Key Consulting`,
        react: EmailUserTemplate({
          userFirstname: name,
          service,
          message: Message,
        }),
      };
      const emailDataMe = {
        from: "jennifer <jennifer@jenniferlvelez.com>",
        subject: `Hello jennifer ${name} want to connect with you `,
        react: EmailAdminTemplate({
          userFirstname: name,
          email: email,
          service,
          message: Message,
        }),
      };

      const [userEmail, internalEmail] = await Promise.all([
        resend.emails.send({
          ...emailDataUser,
          to: [email],
        }),
        resend.emails.send({
          ...emailDataMe,
          // to: ["jennifer@jenniferlvelez.com"],
          to: ["alejandrovelez74@gmail.com"],
        }),
      ]);

      if (userEmail.error || internalEmail.error) {
        return res.status(500).json({
          status: false,
          error: userEmail.error || internalEmail.error,
        });
      }

      res.status(200).json({
        status: true,
        message: `Emails sent to ${email}`,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: (error as any)?.message || "Unexpected error",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
