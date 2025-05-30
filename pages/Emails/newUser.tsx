import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface adminEmailProps {
  userFirstname: string;
  service: string;
  message: string;
  email?: string;
}

export const adminEmail = ({
  userFirstname,
  service,
  message,
  email,
}: adminEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        Hello {userFirstname}, Thank you for scheduling a 30‑minute consultation
        with High Key Consulting. We appreciate your interest...
      </Preview>
      <Container style={container}>
        <Img
          src={`https://jenniferlvelez.com/images/navbar/HIGHKEY-logo-green.png`}
          width="170"
          height="50"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hi Jennifer,</Text>
        <Text style={paragraph}>
          You’ve just received a new contact form submission from the highkey
          consulting website. Here are the details:
        </Text>
        <Text style={paragraph}><>👤 <b>Name:</b> {userFirstname}</></Text>
        <Text style={paragraph}><>📧 <b>Email:</b> {email}</>  </Text>

        <Text style={paragraph}><>📂 <b>Service of Interest:</b></> {service}</Text>
        <Text style={paragraph}><>📝 <b>Message:</b></> {message}</Text>
        <Text style={paragraph}>
          Please follow up as soon as possible to ensure a timely response. This
          could be a valuable opportunity to offer your guidance and expertise.
          <br />
          <br />
          —highkey consulting Automated System
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

adminEmail.PreviewProps = {
  userFirstname: "Alan",
  service: "Communicate",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Proin ac neque nec sapien cursus dictum. Mauris euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, vitae euismod nisl nunc euismod nunc. Sed vitae sapien euismod, cursus sapien nec, dictum sapien. Etiam euismod, nisi eu cursus cursus, nisl nisi cursus nisi, euismod euismod nisi nisi euismod.",
  email: "alan@example.com",
} as adminEmailProps;

export default adminEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
