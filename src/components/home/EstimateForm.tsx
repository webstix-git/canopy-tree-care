"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { services } from "@/lib/site";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-forest-900/15 bg-cream-50 px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-forest-600 focus:bg-white focus:ring-4 focus:ring-leaf-200/60 focus:outline-none";

export function EstimateForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();

    if (!name || !phone || !service) {
      setError("Please fill in the required fields before you send this.");
      return;
    }

    setError("");
    router.push("/thank-you");
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-7 shadow-2xl sm:p-10"
      aria-labelledby="estimate-form-title"
    >
      <h2 id="estimate-form-title" className="text-2xl">
        Request your free estimate
      </h2>
      <p className="mt-1 text-sm text-ink-muted">Takes less than a minute. No obligation.</p>
      <p className="mt-2 text-sm text-ink-muted">Fields marked with an asterisk (*) are required.</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-forest-900">
          Full name <span aria-hidden="true">*</span>
          <input name="name" autoComplete="name" aria-required="true" className={inputClass} placeholder="Jane Smith" />
        </label>
        <label className="block text-sm font-semibold text-forest-900">
          Phone <span aria-hidden="true">*</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-required="true"
            className={inputClass}
            placeholder="608-555-0123"
          />
        </label>
        <label className="block text-sm font-semibold text-forest-900">
          Email
          <input name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
        </label>
        <label className="block text-sm font-semibold text-forest-900">
          Service needed <span aria-hidden="true">*</span>
          <select name="service" defaultValue="" aria-required="true" className={inputClass}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="not-sure">Not sure, I need advice</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-forest-900 sm:col-span-2">
          Tell us about your trees
          <textarea
            name="message"
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="A large oak leaning toward the house, about 60 ft tall"
          />
        </label>
      </div>

      {error ? (
        <p role="alert" className="mt-5 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-800 px-7 py-4 font-semibold text-white transition-all hover:bg-forest-700"
      >
        Send my request
        <Send
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </button>
    </form>
  );
}
