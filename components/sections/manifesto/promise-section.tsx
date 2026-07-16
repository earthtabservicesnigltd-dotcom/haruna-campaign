// components/sections/manifesto/promise-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

const promises = [
  "Listen to the people",
  "Act with integrity",
  "Deliver measurable results",
  "Represent Edo North with dignity",
  "Build a future our children can be proud of",
];

export function PromiseSection() {
  return (
    <section className="bg-ink text-white py-25">
      <div className="max-w-site mx-auto px-8">
        <div className="sec-head rise mb-11">
          <span className="num text-orange border-orange">PLEDGE</span>
          <h2 className="font-display font-semibold text-[clamp(30px,3.4vw,44px)] text-white border-t border-white/20 pt-2.5">
            Our Promise <span className="text-orange italic">to Edo North</span>
          </h2>
        </div>

        <p className="text-[17px] leading-relaxed text-white/70 max-w-[680px] mb-10 rise">
          This is more than a political ambition — it is a commitment to service.
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-[720px]">
          {promises.map((item, i) => (
            <div key={item} className="flex gap-3.5 items-start py-4 border-b border-white/10 rise" style={delay(i * 80)}>
              <span className="text-orange shrink-0 mt-0.5">✓</span>
              <p className="text-[15px] text-white/85 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
