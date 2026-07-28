"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import type { ContactFormState } from "@/app/contact/form-state";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please add a short subject."),
  message: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters."),
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
    (process.env.SMTP_SECURE ?? process.env.SMPT_SECURE ?? "false") === "true";
  const smtpUser = process.env.SMTP_USER ?? process.env.SMPT_USER;
  const smtpPass = process.env.SMTP_PASS ?? process.env.SMPT_PASS;
  const contactTo = process.env.CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !contactTo || !contactFrom) {
    const missingKeys = [
      !smtpHost ? "SMTP_HOST" : null,
      !smtpUser ? "SMTP_USER" : null,
      !smtpPass ? "SMTP_PASS" : null,
      !contactTo ? "CONTACT_TO" : null,
      !contactFrom ? "CONTACT_FROM" : null,
    ].filter(Boolean);

    return {
      success: false,
      message: `Mail is not configured yet. Missing: ${missingKeys.join(", ")}`,
      errors: {},
      values: rawValues,
    };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    requireTLS: !smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
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
  } catch (error) {
    const smtpError = error as { code?: string; message?: string };
    console.error("Contact form SMTP send failed", {
      code: smtpError?.code,
      message: smtpError?.message,
    });

    return {
      success: false,
      message:
        "Could not send email right now. Please try again in a moment, or contact us directly at hello@penselogpixel.dk.",
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
