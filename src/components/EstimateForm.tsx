"use client";

import { useState, FormEvent, useRef } from "react";

export default function EstimateForm() {
  const [showInsurance, setShowInsurance] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fileNames, setFileNames] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/", { method: "POST", body: data });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us at (718) 676-4600.");
      }
    } catch {
      setError("Something went wrong. Please call us at (718) 676-4600.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
          Request Received!
        </h3>
        <p className="text-slate-300 text-lg">We&apos;ll contact you within 2 business hours.</p>
        <p className="text-slate-500 text-sm mt-2">Mon–Fri 8AM–6PM · Sat 9AM–3PM</p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#060d1a] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30 transition-colors text-base min-h-[48px]";
  const labelClass = "block text-slate-300 text-sm font-semibold mb-2";

  return (
    <form
      ref={formRef}
      name="estimate-form"
      method="POST"
      data-netlify="true"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <input type="hidden" name="form-name" value="estimate-form" />

      {error && (
        <div className="md:col-span-2 bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="full-name" className={labelClass}>Full Name *</label>
        <input
          id="full-name"
          type="text"
          name="full-name"
          required
          className={inputClass}
          placeholder="John Smith"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number *</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          className={inputClass}
          placeholder="(718) 555-0123"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>Email Address *</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className={inputClass}
          placeholder="john@example.com"
        />
      </div>

      {/* Vehicle */}
      <div>
        <label htmlFor="vehicle" className={labelClass}>Vehicle Year, Make & Model *</label>
        <input
          id="vehicle"
          type="text"
          name="vehicle"
          required
          className={inputClass}
          placeholder="2021 Toyota Camry"
        />
      </div>

      {/* Damage Type */}
      <div>
        <label htmlFor="damage-type" className={labelClass}>Type of Damage *</label>
        <select
          id="damage-type"
          name="damage-type"
          required
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>Select damage type…</option>
          <option value="collision">Collision</option>
          <option value="dent">Dent</option>
          <option value="paint">Paint</option>
          <option value="scratch">Scratch</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Insurance toggle */}
      <div>
        <span className={labelClass}>Insurance Claim?</span>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setShowInsurance(true)}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-colors min-h-[48px] ${
              showInsurance
                ? "bg-orange-500 text-white"
                : "bg-white/10 text-slate-300 hover:bg-white/15 border border-white/15"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => setShowInsurance(false)}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-colors min-h-[48px] ${
              !showInsurance
                ? "bg-orange-500 text-white"
                : "bg-white/10 text-slate-300 hover:bg-white/15 border border-white/15"
            }`}
          >
            No
          </button>
        </div>
        <input type="hidden" name="insurance-claim" value={showInsurance ? "yes" : "no"} />
      </div>

      {/* Insurance Provider — conditional */}
      {showInsurance && (
        <div className="md:col-span-2">
          <label htmlFor="insurance-provider" className={labelClass}>Insurance Provider</label>
          <input
            id="insurance-provider"
            type="text"
            name="insurance-provider"
            className={inputClass}
            placeholder="e.g. GEICO, State Farm, Allstate, Progressive"
          />
        </div>
      )}

      {/* Description */}
      <div className="md:col-span-2">
        <label htmlFor="damage-description" className={labelClass}>Description of Damage *</label>
        <textarea
          id="damage-description"
          name="damage-description"
          required
          rows={4}
          className={`${inputClass} resize-none h-auto`}
          placeholder="Please describe what happened and the extent of the damage…"
        />
      </div>

      {/* Photo Upload */}
      <div className="md:col-span-2">
        <label className={labelClass}>Upload Photos <span className="text-slate-500 font-normal">(up to 5)</span></label>
        <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-orange-500/40 transition-colors bg-[#060d1a]/50">
          <svg className="w-10 h-10 text-slate-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          {fileNames.length > 0 ? (
            <div className="mb-3">
              <p className="text-green-400 text-sm font-medium mb-1">{fileNames.length} photo{fileNames.length > 1 ? "s" : ""} selected</p>
              <ul className="text-slate-400 text-xs space-y-0.5">
                {fileNames.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </div>
          ) : (
            <>
              <p className="text-slate-400 text-sm mb-1">Drag &amp; drop or click to upload damage photos</p>
              <p className="text-slate-600 text-xs mb-4">JPG, PNG, HEIC · Up to 5 photos</p>
            </>
          )}
          <input
            type="file"
            name="photos"
            id="photo-upload"
            accept=".jpg,.jpeg,.png,.heic"
            multiple
            className="hidden"
            onChange={(e) => {
              const files = Array.from(e.target.files ?? []).slice(0, 5);
              setFileNames(files.map((f) => f.name));
            }}
          />
          <label
            htmlFor="photo-upload"
            className="cursor-pointer inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-slate-300 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border border-white/15 min-h-[44px]"
          >
            {fileNames.length > 0 ? "Change Photos" : "Choose Photos"}
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-orange-500/30 min-h-[56px]"
        >
          Send My Estimate Request →
        </button>
        <p className="text-slate-500 text-sm text-center mt-3">
          We&apos;ll contact you within 2 business hours. No obligation, 100% free.
        </p>
      </div>
    </form>
  );
}
