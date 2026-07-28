"use server";

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
