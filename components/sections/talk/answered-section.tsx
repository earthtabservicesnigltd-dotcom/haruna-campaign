// components/sections/talk/answered-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

const qas = [
  {
    q: "What will you do for youth in Edo North?",
    a: "Three concrete things in the first year: a skills-and-trades fund tied to real apprenticeships in Auchi and Igarra, digital-work hubs so young people can earn online without leaving home, and a youth enterprise grant judged transparently, not by connection. Jobs first, slogans never.",
    asked: "BLESSING · ETSAKO WEST",
  },
  {
    q: "How will you improve agriculture?",
    a: "Our farmers don't need charity, they need access. That means feeder roads so produce reaches market before it spoils, cooperative storage to end distress selling, and a direct line to input support at planting season. Edo North fed this region once. We can do it again.",
    asked: "MUSA · ETSAKO CENTRAL",
  },
  {
    q: "What is your security plan?",
    a: "Security starts with intelligence from the community, not soldiers arriving after the harm is done. I'll push for properly resourced local vigilante coordination, faster response on the Auchi–Igarra corridor, and honest partnership with security agencies that answers to residents.",
    asked: "GRACE · AKOKO-EDO",
  },
];

export function AnsweredSection() {
  return (
    <section className="py-22 bg-paper">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="ANSWERED PUBLICLY" title={<>This Week&apos;s <span className="accent">Questions</span></>} />

        <div className="flex items-baseline gap-3 font-mono text-[11.5px] tracking-wide text-slate mb-4 rise">
          <span className="bg-orange text-white px-2.5 py-1 rounded-site text-[10px] tracking-wider">WEEK OF 6 JULY 2026</span>
          <span>THREE QUESTIONS · CHOSEN FROM 214 SUBMISSIONS</span>
        </div>

        <div className="space-y-0.5 bg-ink/10 rise" style={delay(80)}>
          {qas.map((item) => (
            <div key={item.q} className="bg-white p-8 md:p-9">
              <div className="flex gap-3.5 items-start mb-4">
                <span className="font-mono text-lg font-medium text-orange leading-tight shrink-0">Q</span>
                <h4 className="font-display font-semibold text-lg leading-tight">{item.q}</h4>
              </div>
              <div className="flex gap-3.5 items-start pl-8">
                <span className="font-mono text-lg font-medium text-forest leading-tight shrink-0">A</span>
                <div>
                  <p className="text-[14.5px] leading-relaxed text-slate max-w-[70ch]">{item.a}</p>
                  <p className="font-mono text-[11px] tracking-wide text-slate mt-3.5">ASKED BY {item.asked}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3.5 mt-8 rise">
          <p className="text-[13.5px] text-slate max-w-[52ch]">New answers every Friday. Ask now and yours could be next week&apos;s featured question.</p>
          <a href="#ask" className="font-mono text-xs tracking-wide text-ink border-b border-orange pb-0.5 hover:text-orange transition-colors whitespace-nowrap">Ask your question →</a>
        </div>
      </div>
    </section>
  );
}
