// components/sections/donate/impact-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

export function ImpactSection() {
  return (
    <section className="py-22 bg-paper">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="WHERE IT GOES" title={<>Every Naira, <span className="accent">Accounted For</span></>} />

        <div className="grid md:grid-cols-3 gap-0.5 bg-ink/10">
          {[
            { pct: "58%", title: "Community Outreach", text: "Town halls, ward-level visits, and transportation for volunteers across all seven LGAs." },
            { pct: "33%", title: "Voter Education", text: "Printed materials, local radio slots, and translation of the agenda into local languages." },
            { pct: "9%", title: "Administration", text: "Compliance, reporting to INEC, and the running costs of keeping this campaign accountable." },
          ].map((item, i) => (
            <div key={item.title} className="bg-white p-10 rise" style={delay(i * 100)}>
              <div className="font-display text-[36px] font-semibold text-orange mb-2.5">{item.pct}</div>
              <h4 className="font-display font-semibold text-[19px] mb-2.5">{item.title}</h4>
              <p className="text-sm leading-relaxed text-slate">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
