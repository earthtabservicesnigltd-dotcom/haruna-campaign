// components/sections/about/philosophy-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

export function PhilosophySection() {
  return (
    <section className="bg-ink text-white py-25">
      <div className="max-w-site mx-auto px-8 grid lg:grid-cols-[1fr_1.2fr] gap-16">
        <div className="rise">
          <span className="font-mono text-xs tracking-widest text-orange block mb-5">GUIDING PRINCIPLE</span>
          <h2 className="font-display font-semibold text-[clamp(28px,3.2vw,40px)] leading-tight mb-6">
            Why He Keeps <span className="text-orange italic">Coming Back</span> to Auchi
          </h2>
          <blockquote className="font-display italic text-[22px] leading-relaxed text-white border-l-[3px] border-orange py-4 pl-7 mt-7">
            &ldquo;Every position I have held, I have held on loan from the people of Edo North. When the loan ends, I go back to Auchi, to the same streets, and I answer for how I used it.&rdquo;
            <cite className="block font-mono text-xs not-italic text-orange mt-2.5 tracking-wide">
              — Comr. Aruna Abubakari
            </cite>
          </blockquote>
        </div>
        <div className="body-text rise space-y-4" style={delay(120)}>
          <p className="text-base leading-[1.9] text-white/70">
            Colleagues who have worked alongside Abubakari across three different postings describe a consistent pattern: he keeps his family home in Auchi rather than relocating permanently to Benin City or Abuja, and he is known to return most weekends regardless of his official schedule.
          </p>
          <p className="text-base leading-[1.9] text-white/70">
            He has said this is deliberate — that distance from the community one represents is the first, quiet step toward forgetting who that community actually is. It is a discipline he has tried to carry into every role, from ward-level education officer to state adviser to independent civic monitor.
          </p>
        </div>
      </div>
    </section>
  );
}
