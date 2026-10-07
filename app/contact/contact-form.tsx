"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { submitContactForm } from "@/app/contact/actions";
import { initialContactFormState } from "@/app/contact/form-state";

export default function ContactForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState
  );

  const values = state?.values ?? initialContactFormState.values;
  const errors = state?.errors ?? initialContactFormState.errors;
  const statusMessage = state?.message ?? "";
  const isSuccess = state?.success ?? false;

  useEffect(() => {
    if (isSuccess) {
      router.push("/contact/thanks");
    }
  }, [isSuccess, router]);

  return (
    <form action={formAction}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={values.name}
            className="mt-2 w-full border border-brand/25 bg-white px-4 py-3 text-base text-ink transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/35"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-error" aria-live="polite">
              {errors.name[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values.email}
            className="mt-2 w-full border border-brand/25 bg-white px-4 py-3 text-base text-ink transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/35"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-error" aria-live="polite">
              {errors.email[0]}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className="block text-sm font-semibold text-ink">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          defaultValue={values.subject}
          className="mt-2 w-full border border-brand/25 bg-white px-4 py-3 text-base text-ink transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/35"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-2 text-sm text-error" aria-live="polite">
            {errors.subject[0]}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={values.message}
          className="mt-2 w-full border border-brand/25 bg-white px-4 py-3 text-base text-ink transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/35"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-error" aria-live="polite">
            {errors.message[0]}
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-brand/20 pt-6">
        <button
          type="submit"
          disabled={pending}
          className="bg-brand px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send message"}
        </button>

        <p
          className={`text-sm ${isSuccess ? "text-brand" : "text-error"}`}
          aria-live="polite"
        >
          {statusMessage}
        </p>
      </div>
    </form>
  );
}
