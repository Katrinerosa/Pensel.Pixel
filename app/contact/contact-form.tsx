"use client";

import { useActionState } from "react";

import { submitContactForm } from "@/app/contact/actions";
import { initialContactFormState } from "@/app/contact/form-state";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState
  );

  const values = state?.values ?? initialContactFormState.values;
  const errors = state?.errors ?? initialContactFormState.errors;
  const statusMessage = state?.message ?? "";
  const isSuccess = state?.success ?? false;

  return (
    <form action={formAction} className="mt-10 rounded-2xl bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#1f2144]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={values.name}
            className="mt-2 w-full rounded-xl border border-[#1f286c]/25 px-4 py-3 text-base text-[#1f2144] outline-none transition focus:border-[#1f286c]"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-[#af1e3a]" aria-live="polite">
              {errors.name[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#1f2144]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values.email}
            className="mt-2 w-full rounded-xl border border-[#1f286c]/25 px-4 py-3 text-base text-[#1f2144] outline-none transition focus:border-[#1f286c]"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-[#af1e3a]" aria-live="polite">
              {errors.email[0]}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="block text-sm font-semibold text-[#1f2144]">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          defaultValue={values.subject}
          className="mt-2 w-full rounded-xl border border-[#1f286c]/25 px-4 py-3 text-base text-[#1f2144] outline-none transition focus:border-[#1f286c]"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-2 text-sm text-[#af1e3a]" aria-live="polite">
            {errors.subject[0]}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-semibold text-[#1f2144]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={values.message}
          className="mt-2 w-full rounded-xl border border-[#1f286c]/25 px-4 py-3 text-base text-[#1f2144] outline-none transition focus:border-[#1f286c]"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-[#af1e3a]" aria-live="polite">
            {errors.message[0]}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-[#1f286c] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#17205a] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send message"}
        </button>

        <p
          className={`text-sm ${isSuccess ? "text-[#1f286c]" : "text-[#af1e3a]"}`}
          aria-live="polite"
        >
          {statusMessage}
        </p>
      </div>
    </form>
  );
}
