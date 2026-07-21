// components/sections/institute/overview-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

const pillars = [
  { icon: "👥", title: "Cohort-Based", text: "Learn in weekly batches. Everyone progresses together." },
  { icon: "🔨", title: "Practical Focus", text: "Assignments and a capstone project every single week." },
  { icon: "✅", title: "Recognised", text: "Weekly certificates, digital badges, and Top Performer awards." },
];

export function OverviewSection() {
  return (
    <section className="py-24">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="OVERVIEW" title={<>Learning That Ends in <span className="accent">Real Skill</span></>} />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
          <div className="space-y-5 rise">
            <p className="text-base leading-[1.85] text-slate max-w-[60ch]">
              Abubakari Aruna Institute is an online learning platform designed to equip Edo North citizens with <strong className="text-ink">practical, employable, and entrepreneurial skills.</strong>
            </p>
            <p className="text-base leading-[1.85] text-slate max-w-[60ch]">
              The institute runs <strong className="text-ink">weekly intensive training cohorts, Monday to Saturday,</strong> across six core disciplines.
            </p>
            <p className="text-base leading-[1.85] text-slate max-w-[60ch]">
              Every programme is fully online and structured for <strong className="text-ink">hands-on learning and real-world application.</strong>
            </p>
          </div>

          <div className="space-y-0.5 bg-ink/10 border border-ink/10 rise" style={delay(120)}>
            {pillars.map((p) => (
              <div key={p.title} className="bg-white p-6 md:p-7 flex gap-4 items-start">
                <span className="text-xl text-orange shrink-0 mt-1">{p.icon}</span>
                <div>
                  <h4 className="font-display font-semibold text-[17px] mb-1">{p.title}</h4>
                  <p className="text-sm leading-relaxed text-slate">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
