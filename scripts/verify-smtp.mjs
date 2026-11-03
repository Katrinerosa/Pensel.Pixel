import nodemailer from "nodemailer";

// Run only on the server or locally with: node --env-file=.env.local scripts/verify-smtp.mjs
// verify() checks authentication and TLS without sending an email.
const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT || "587");
const secure = (process.env.SMTP_SECURE ?? String(port === 465)) === "true";
if (!host || !process.env.SMTP_USER || !process.env.SMTP_PASS || !Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("SMTP verification requires SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in the server environment.");
  process.exitCode = 1;
} else {
  const transporter = nodemailer.createTransport({ host, port, secure, requireTLS: !secure, tls: { minVersion: "TLSv1.2" }, connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000, auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
  try {
    await transporter.verify();
    console.log("SMTP authentication and TLS verified. No email was sent.");
  } catch (error) {
    console.error("SMTP verification failed:", error.code || "UNKNOWN");
    process.exitCode = 1;
  } finally {
    transporter.close();
  }
}
