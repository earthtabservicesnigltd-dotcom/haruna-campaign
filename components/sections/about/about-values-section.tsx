// components/sections/about/about-values-section.tsx
"use client";

import { SectionHead } from "../section-head"
import { delay } from "@/lib/animation";

const values = [
  { icon: "💡", title: "Transparency", text: "Open books, open budgets, open to questions from any ward." },
  { icon: "🤝", title: "Integrity", text: "Agreements kept, contracts honoured, regardless of who is watching." },
  { icon: "🌱", title: "Grassroots Leadership", text: "Decisions shaped by those who live with their consequences." },
  { icon: "📊", title: "Data-Driven Governance", text: "Policy based on what is measured, not on what sounds good." },
  { icon: "🏗️", title: "Results Over Rhetoric", text: "Judged on classrooms completed and clinics staffed, not speeches." },
  { icon: "🤲", title: "Service", text: "Public office is a duty, not a title to be held in the capital." },
];

export function AboutValuesSection() {
  return (
    <section className="py-25">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="VALUES"
          title={<>What He <span className="accent">Stands For</span></>}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-ink/10">
          {values.map((v, i) => (
            <div key={v.title} className="bg-white py-12 px-8 hover:bg-paper transition-colors rise" style={delay(i * 80)}>
              <span className="text-3xl mb-4 block">{v.icon}</span>
              <h4 className="font-display font-semibold text-[22px] mb-3">{v.title}</h4>
              <p className="text-[14.5px] leading-relaxed text-slate">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
