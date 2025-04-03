import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function VerifycationEmail({
  email,
  verificationCode,
  username,
}) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>AnonyFeed Email Verification</Preview>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
              <Img
                src={`./static/logo.png`}
                width="75"
                height="45"
                alt="AnonyFeed Logo"
              />
            </Section>
            <Section style={upperSection}>
              <Heading style={h1}>Verify your email address</Heading>
              <Heading style={h2}>Hello 👋 {username}</Heading>
              <Text style={mainText}>Email: {email}</Text>
              <Text style={mainText}>
                Thanks for signing up for AnonyFeed! To ensure your security,
                please enter the following verification code when prompted. If
                you did not request this, you can ignore this message.
              </Text>
              <Section style={verificationSection}>
                <Text style={verifyText}>Verification code</Text>
                <Text style={codeText}>{verificationCode}</Text>
                <Text style={validityText}>
                  (This code is valid for 10 minutes)
                </Text>
              </Section>
            </Section>
            <Hr />
            <Section style={lowerSection}>
              <Text style={cautionText}>
                AnonyFeed will never ask you to disclose your password, credit
                card, or banking information via email.
              </Text>
            </Section>
          </Section>
          <Text style={footerText}>
            This message was sent by AnonyFeed, your anonymous feedback
            platform. © {new Date().getFullYear()}, AnonyFeed Inc. All rights
            reserved. View our
            <Link
              href="https://anonyfeed.com/privacy"
              target="_blank"
              style={link}
            >
              privacy policy
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const h2 = {
  color: "#3330",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "16px",
  fontWeight: "semibold",
  marginBottom: "10px",
};

const link = {
  color: "#2754C5",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontSize: "14px",
  margin: "24px 0",
};

const imageSection = {
  backgroundColor: "#252f3d",
  display: "flex",
  padding: "20px 0",
  alignItems: "center",
  justifyContent: "center",
};

const coverSection = { backgroundColor: "#fff" };
const upperSection = { padding: "25px 35px" };
const lowerSection = { padding: "25px 35px" };
const footerText = { ...text, fontSize: "12px", padding: "0 20px" };
const verifyText = {
  ...text,
  margin: 0,
  fontWeight: "bold",
  textAlign: "center",
};
const codeText = {
  ...text,
  fontWeight: "bold",
  fontSize: "36px",
  margin: "10px 0",
  textAlign: "center",
};
const validityText = { ...text, margin: "0px", textAlign: "center" };
const verificationSection = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const mainText = { ...text, marginBottom: "14px" };
const cautionText = { ...text, margin: "0px" };
