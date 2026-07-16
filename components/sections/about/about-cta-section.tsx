// components/sections/about/about-cta-section.tsx
"use client";

import Link from "next/link";
import { delay } from "@/lib/animation";

export function AboutCtaSection() {
  return (
    <section className="py-22 bg-[#F5F5F5] relative overflow-hidden">
      <div className="max-w-site mx-auto px-8 text-center relative z-10">
        <span className="inline-block font-mono text-[11px] tracking-widest uppercase text-black/35 mb-4 px-4 py-1.5 border border-black/10 rounded-full">
          JOIN THE MOVEMENT
        </span>
        <h2 className="font-display font-semibold text-[clamp(32px,4.5vw,52px)] text-[#1a1a1a] leading-tight mb-5">
          Edo North, It&apos;s Time for <span className="text-orange">Better Representation</span>
        </h2>
        <p className="text-[17px] leading-relaxed text-black/55 max-w-[600px] mx-auto mb-10">
          Join thousands of residents backing a campaign built on published budgets, finished projects, and a senator who shows up twice: for the ribbon, and for the follow-up.
        </p>
        <div className="flex justify-center gap-12 mb-11 flex-wrap">
          {[
            { value: "18", label: "YEARS IN PUBLIC SERVICE" },
            { value: "07", label: "LGAs COVERED" },
            { value: "240K+", label: "RESIDENTS REPRESENTED" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="block font-display text-[40px] font-bold text-[#1a1a1a] leading-none mb-1.5">{s.value}</span>
              <span className="font-mono text-[11px] tracking-wider uppercase text-black/40">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/volunteer" className="inline-block px-9 py-3.5 font-mono text-xs tracking-wider uppercase font-semibold bg-ink text-white border-2 border-ink rounded-site hover:bg-transparent hover:text-orange transition-colors">
            Join the Movement
          </Link>
          <Link href="/manifesto" className="inline-block px-9 py-3.5 font-mono text-xs tracking-wider uppercase font-semibold bg-transparent text-ink border-2 border-black/15 rounded-site hover:border-orange hover:text-orange transition-colors">
            Read the Manifesto
          </Link>
        </div>
      </div>
    </section>
  );
}
