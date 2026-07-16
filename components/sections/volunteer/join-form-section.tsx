// components/sections/volunteer/join-form-section.tsx
"use client";

import { useState } from "react";
import { delay } from "@/lib/animation";

const skills = [
  { id: "media", icon: "🎥", label: "Media & Content" },
  { id: "canvassing", icon: "🚶", label: "Canvassing" },
  { id: "logistics", icon: "📦", label: "Logistics" },
  { id: "digital", icon: "💻", label: "Digital / Social" },
  { id: "mobilization", icon: "👥", label: "Mobilization" },
  { id: "events", icon: "📅", label: "Event Support" },
];

export function JoinFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 pb-25" id="join-form">
        <div className="max-w-site mx-auto px-8">
          <div className="border border-ink/12 rounded-site overflow-hidden">
            <div className="bg-ink text-white p-12 md:p-16 text-center">
              <span className="text-5xl block mb-4">✅</span>
              <h3 className="font-display text-[26px] font-semibold mb-2">You&apos;re In!</h3>
              <p className="text-white/70 max-w-[360px] mx-auto">Thank you for stepping up. Our team will reach out within 48 hours to welcome you to the movement.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 pb-25" id="join-form">
      <div className="max-w-site mx-auto px-8">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] border border-ink/12 rounded-site overflow-hidden rise">
          <div className="bg-ink text-white p-10 md:p-12 flex flex-col justify-center">
            <span className="font-mono text-[11px] tracking-widest text-orange mb-4 block">Sign Up</span>
            <h2 className="font-display font-semibold text-[clamp(26px,2.8vw,36px)] leading-tight mb-5">
              Ready to <span className="text-orange italic">Get Involved?</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-white/72 mb-7">Fill in your details and tell us how you'd like to help.</p>
            <ul className="space-y-3">
              {[
                "No experience needed, just commitment",
                "Flexible roles that fit your schedule",
                "Be part of a district-wide movement",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-[14.5px] text-white/85">
                  <span className="text-orange shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-10 md:p-12">
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">
                  Full Name <span className="text-orange">*</span>
                </label>
                <input type="text" required placeholder="e.g. Aisha Momoh" className="w-full px-4 py-3.5 border border-ink/20 rounded-site text-[15px] text-ink outline-none focus:border-orange transition-colors" />
              </div>
              <div>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">
                  Phone Number <span className="text-orange">*</span>
                </label>
                <input type="tel" required placeholder="e.g. 0803 000 0000" className="w-full px-4 py-3.5 border border-ink/20 rounded-site text-[15px] text-ink outline-none focus:border-orange transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">
                  Email Address <span className="text-orange">*</span>
                </label>
                <input type="email" required placeholder="you@email.com" className="w-full px-4 py-3.5 border border-ink/20 rounded-site text-[15px] text-ink outline-none focus:border-orange transition-colors" />
              </div>
              <div>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">
                  Location / LGA <span className="text-orange">*</span>
                </label>
                <input type="text" required placeholder="e.g. Auchi, Etsako West" className="w-full px-4 py-3.5 border border-ink/20 rounded-site text-[15px] text-ink outline-none focus:border-orange transition-colors" />
              </div>
            </div>

            <span className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-3">Your Skills</span>
            <div className="grid grid-cols-2 gap-2.5 mb-7">
              {skills.map((s) => (
                <label key={s.id} className="flex items-center gap-2.5 px-3.5 py-3 border border-ink/20 rounded-site cursor-pointer hover:border-orange transition-colors has-[:checked]:border-forest has-[:checked]:bg-emerald/6 has-[:checked]:font-semibold">
                  <input type="checkbox" className="sr-only peer" />
                  <span className="text-base">{s.icon}</span>
                  <span className="text-sm">{s.label}</span>
                </label>
              ))}
            </div>

            <button type="submit" className="w-full bg-orange text-white py-4 rounded-site font-semibold text-[15.5px] hover:bg-orange-dark transition-colors flex items-center justify-center gap-2.5">
              👍 Become an Abubakari Aruna Volunteer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
