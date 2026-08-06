"use client";

import { FormEvent, useState } from "react";
import { Container, Eyebrow } from "./ui";

const spendRanges = [
  "Under $10k/mo",
  "$10k–$50k/mo",
  "$50k–$150k/mo",
  "$150k+/mo",
];

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/javierrevueltag@gmail.com";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div
        className="brand-blob top-0 right-1/4 h-[380px] w-[380px] bg-brand-purple/40"
        aria-hidden
      />
      <Container className="relative flex flex-col gap-14 md:flex-row md:justify-between">
        <div className="flex max-w-md flex-col gap-5">
          <Eyebrow>Let&apos;s talk</Eyebrow>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl">
            Ready to hand off your next PPC client?
          </h2>
          <p className="text-lg leading-7 text-black/60">
            Tell us about the account and we&apos;ll reply within one business
            day with next steps and partner pricing.
          </p>
          <div className="mt-4 flex flex-col gap-1 text-black/60">
            <span>hola@generacionads.com</span>
            <span>+34 644 04 68 62</span>
          </div>
        </div>

        <div className="soft-shadow w-full max-w-lg rounded-3xl bg-white p-8">
          {status === "success" ? (
            <p className="text-lg">
              Thanks — we&apos;ve got it. We&apos;ll be in touch within one
              business day.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="hidden" name="_subject" value="New white-label PPC partner lead" />
              <input type="hidden" name="_cc" value="mzornoza@generacionads.com" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Agency name" name="agency" required />
                <Field label="Your name" name="name" required />
              </div>
              <Field label="Work email" name="email" type="email" required />
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="text-black/60">
                  Client&apos;s monthly ad spend
                </span>
                <select
                  name="spend"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base outline-none focus:border-brand-purple"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {spendRanges.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="text-black/60">Tell us about the account</span>
                <textarea
                  name="message"
                  rows={3}
                  className="resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-base outline-none focus:border-brand-purple"
                />
              </label>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="pill-shadow mt-1 w-full rounded-full bg-black px-7 py-3.5 text-base text-white transition-colors duration-300 hover:bg-brand-purple disabled:opacity-60 sm:w-fit"
              >
                {status === "submitting" ? "Sending…" : "Send"}
              </button>
              {status === "error" ? (
                <p className="text-sm text-brand-red">
                  Something went wrong. Please email us directly at{" "}
                  <a href="mailto:hola@generacionads.com" className="underline">
                    hola@generacionads.com
                  </a>
                  .
                </p>
              ) : null}
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-black/60">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base outline-none focus:border-brand-purple"
      />
    </label>
  );
}
