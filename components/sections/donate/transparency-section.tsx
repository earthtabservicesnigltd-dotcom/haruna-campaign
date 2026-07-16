// components/sections/donate/transparency-section.tsx
"use client";

import { delay } from "@/lib/animation";

export function TransparencySection() {
  return (
    <section className="bg-ink text-white py-[70px] rise">
      <div className="max-w-site mx-auto px-8 grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <span className="font-mono text-xs tracking-widest text-orange block mb-3.5">OUR COMMITMENT</span>
          <h3 className="font-display font-semibold text-[clamp(24px,2.6vw,32px)] leading-tight max-w-[640px]">
            We publish a public funding report every quarter — every donor above ₦50,000 disclosed, every expense itemised.
          </h3>
        </div>
        <a href="#" className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-site font-mono text-sm tracking-wide hover:border-orange hover:text-orange transition-colors whitespace-nowrap">
          View Funding Reports →
        </a>
      </div>
    </section>
  );
}
