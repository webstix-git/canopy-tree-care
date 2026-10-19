"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/lib/site";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-forest-900/15 bg-cream-50 px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-forest-600 focus:bg-white focus:ring-4 focus:ring-leaf-200/60 focus:outline-none";

const selectClass = `${inputClass} appearance-none bg-[length:0.7rem] bg-[position:right_1.35rem_center] bg-no-repeat pr-12 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2012%208%27%20fill=%27none%27%3E%3Cpath%20d=%27M1%201.5%206%206.5%2011%201.5%27%20stroke=%27%231b4029%27%20stroke-width=%271.6%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3E%3C/svg%3E')]`;

export function EstimateForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();

    const email = String(data.get("email") ?? "").trim();

    if (!name || !phone || !email || !service) {
      setError("Please Fill In the Required Fields Before You Send This.");
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
        Request Your Free Estimate
      </h2>
      <p className="mt-1 text-sm text-ink-muted">Takes Less Than a Minute. No Obligation.</p>
      <p className="mt-2 text-sm text-ink-muted">Fields Marked With an Asterisk (*) Are Required.</p>

      <div className="mt-7 grid gap-5">
        <label className="block text-sm font-semibold text-forest-900">
          Full Name <span aria-hidden="true" className="text-red-600">*</span>
          <input name="name" autoComplete="name" aria-required="true" className={inputClass} placeholder="Jane Smith" />
        </label>
        <label className="block text-sm font-semibold text-forest-900">
          Phone <span aria-hidden="true" className="text-red-600">*</span>
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
          Email <span aria-hidden="true" className="text-red-600">*</span>
          <input name="email" type="email" autoComplete="email" aria-required="true" className={inputClass} placeholder="you@example.com" />
        </label>
        <label className="block text-sm font-semibold text-forest-900">
          Service Needed <span aria-hidden="true" className="text-red-600">*</span>
          <select name="service" defaultValue="" aria-required="true" className={selectClass}>
            <option value="">Select a Service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="not-sure">Not Sure, I Need Advice</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-forest-900">
          Tell Us About Your Trees
          <textarea
            name="message"
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="A Large Oak Leaning Toward the House, About 60 Ft Tall"
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
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-forest-800 px-7 py-4 text-[18px] font-semibold text-white transition-all hover:bg-forest-700"
      >
        Send My Request
      </button>
    </form>
  );
}
