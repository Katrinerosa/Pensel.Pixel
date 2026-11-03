"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import type { ContactFormState } from "@/app/contact/form-state";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120, "Please use no more than 120 characters."),
  email: z.string().trim().max(254, "Please enter a shorter email address.").email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please add a short subject.").max(160, "Please use no more than 160 characters."),
  message: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters.")
    .max(10000, "Please use no more than 10,000 characters."),
});

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawValues = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const validated = contactSchema.safeParse(rawValues);

  if (!validated.success) {
    return {
      success: false,
      message: "Please correct the highlighted fields and try again.",
      errors: validated.error.flatten().fieldErrors,
      values: rawValues,
    };
  }

  const smtpHost = process.env.SMTP_HOST ?? process.env.SMPT_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? process.env.SMPT_PORT ?? "587");
  const smtpSecure =
    (process.env.SMTP_SECURE ?? process.env.SMPT_SECURE ?? String(smtpPort === 465)) === "true";
  const smtpUser = process.env.SMTP_USER ?? process.env.SMPT_USER;
  const smtpPass = process.env.SMTP_PASS ?? process.env.SMPT_PASS;
  const contactTo = process.env.CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !contactTo || !contactFrom || !Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
    const missingKeys = [
      !smtpHost ? "SMTP_HOST" : null,
      !smtpUser ? "SMTP_USER" : null,
      !smtpPass ? "SMTP_PASS" : null,
      !contactTo ? "CONTACT_TO" : null,
      !contactFrom ? "CONTACT_FROM" : null,
      !Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535 ? "SMTP_PORT" : null,
    ].filter(Boolean);

    console.error("Contact mail configuration incomplete", { missingKeys });
    return {
      success: false,
      message: "Your message could not be sent right now. Please try again later, or use the contact links on this page.",
      errors: {},
      values: rawValues,
    };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    requireTLS: !smtpSecure,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
    tls: { minVersion: "TLSv1.2" },
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    const result = await transporter.sendMail({
      from: contactFrom,
      to: contactTo,
      replyTo: validated.data.email,
      subject: `[Contact] ${validated.data.subject}`,
      text: [
        `Name: ${validated.data.name}`,
        `Email: ${validated.data.email}`,
        "",
        "Message:",
        validated.data.message,
      ].join("\n"),
    });
    if (!Array.isArray(result.accepted) || result.accepted.length === 0) {
      throw new Error("SMTP server did not accept the recipient");
    }
  } catch (error) {
    const smtpError = error as { code?: string; message?: string };
    console.error("Contact form SMTP send failed", {
      code: smtpError?.code,
      message: smtpError?.message,
    });

    return {
      success: false,
      message:
        "Could not send email right now. Please try again in a moment, or use the contact links on this page.",
      errors: {},
      values: rawValues,
    };
  }

  return {
    success: true,
    message: "Thanks for your message. We will get back to you soon.",
    errors: {},
    values: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  };
}
