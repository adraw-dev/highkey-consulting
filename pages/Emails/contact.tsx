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

interface ContactEmailProps {
  userFirstname: string;
  service: string;
  message: string;
  email?: string;
}



export const contactEmail = ({ userFirstname }: ContactEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
      Hello {userFirstname},
      Thank you for scheduling a 30‑minute consultation with High Key Consulting. We appreciate your interest...
      </Preview>
      <Container style={container}>
        <Img
          src={`https://jenniferlvelez.com/images/navbar/HIGHKEY-logo-green.png`}
          width="170"
          height="50"
          alt="Koala"
          style={logo}
        />

        <Text style={paragraph}>Hello <b>{userFirstname}</b>,</Text>
        <Text style={paragraph}>
          Thank you for scheduling a 30‑minute consultation with High Key
          Consulting. We appreciate your interest in exploring how our expertise
          can help drive your business forward.
        </Text>
        <Text style={paragraph}>
          One of our senior consultants will review the details you provided and
          reach out shortly to confirm your appointment and ensure we’re fully
          prepared to address your objectives. In the meantime, feel free to
          reply to this email if there’s any specific topic or question you’d
          like us to cover during our call.
        </Text>
        <Text style={paragraph}>
          We look forward to connecting with you and delivering actionable
          insights tailored to your needs.
        </Text>
  
        <Text style={paragraph}>
          Best regards,
          <br />
          The highkey consulting Team
        </Text>
        <Hr style={hr} />
    
      </Container>
    </Body>
  </Html>
);

contactEmail.PreviewProps = {
  userFirstname: "Alan",
} as ContactEmailProps;

export default contactEmail;

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
