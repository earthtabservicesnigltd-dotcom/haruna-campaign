// components/sections/manifesto/pillar-section.tsx
"use client";

import { delay } from "@/lib/animation";

interface PillarProps {
  id: string;
  icon: string;
  title: string;
  lead: string;
  commitments: { title: string; desc: string }[];
  metric: { value: string; label: string };
  index: number;
}

export function PillarSection({ id, icon, title, lead, commitments, metric, index }: PillarProps) {
  return (
    <section id={id} className={`py-22 ${index % 2 === 1 ? "bg-paper" : "bg-white"}`}>
      <div className="max-w-site mx-auto px-8 grid lg:grid-cols-[280px_1fr] gap-14">
        <div className="lg:sticky top-[150px] self-start rise">
          <span className="text-3xl block mb-3.5">{icon}</span>
          <h3 className="font-display font-semibold text-[clamp(24px,2.2vw,30px)] leading-tight text-ink">{title}</h3>
        </div>

        <div className="rise space-y-6" style={delay(120)}>
          <p className="text-base leading-[1.9] text-slate max-w-[680px]">{lead}</p>

          <div className="space-y-4 max-w-[700px]">
            {commitments.map((c) => (
              <div key={c.title} className="flex gap-4 items-start bg-white border border-ink/12 rounded-site p-5">
                <span className="text-orange shrink-0 mt-0.5">✓</span>
                <div>
                  <h5 className="font-display font-semibold text-[16.5px] mb-1">{c.title}</h5>
                  <p className="text-[13.5px] leading-relaxed text-slate">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-baseline gap-2.5 pt-5 border-t border-ink/12 max-w-[700px]">
            <strong className="font-display text-[30px] text-orange">{metric.value}</strong>
            <span className="text-sm text-slate max-w-[280px] leading-relaxed">{metric.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
