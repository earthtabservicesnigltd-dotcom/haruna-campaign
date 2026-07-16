// components/sections/vision/vision-agenda-section.tsx
"use client";

import { delay } from "@/lib/animation";

interface AgendaProps {
  id: string;
  icon: string;
  title: string;
  lead: string;
  directions: string[];
  punch: string;
  index: number;
}

export function VisionAgendaSection({ id, icon, title, lead, directions, punch, index }: AgendaProps) {
  return (
    <section id={`agenda-${id}`} className={`py-22 ${index % 2 === 1 ? "bg-paper" : "bg-white"}`}>
      <div className="max-w-site mx-auto px-8 grid lg:grid-cols-[300px_1fr] gap-14">
        <div className="lg:sticky top-[150px] self-start rise">
          <span className="text-3xl block mb-4">{icon}</span>
          <h3 className="font-display font-semibold text-[clamp(24px,2.3vw,32px)] leading-tight text-ink">{title}</h3>
        </div>

        <div className="rise space-y-6" style={delay(120)}>
          <p className="text-base leading-[1.9] text-slate max-w-[680px]">{lead}</p>

          <span className="font-mono text-[11px] tracking-wider text-orange uppercase block">Vision Direction</span>

          <div className="space-y-0.5 max-w-[720px] border border-ink/10">
            {directions.map((d) => (
              <div key={d} className="flex gap-4 items-start bg-white even:bg-paper/50 p-4 pl-5">
                <span className="text-orange shrink-0 mt-0.5">✓</span>
                <p className="text-[15px] leading-relaxed text-ink">{d}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3.5 items-start pt-5 border-t border-ink/12 max-w-[720px]">
            <span className="text-orange text-lg shrink-0">❝</span>
            <p className="font-display italic text-lg leading-relaxed text-ink max-w-[600px]">{punch}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
