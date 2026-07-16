// components/sections/about/bio-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

export function BioSection() {
  return (
    <section className="py-20">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="BIOGRAPHY"
          title={<>Full <span className="accent">Biography</span></>}
        />

        <div className="space-y-5 max-w-[760px] lg:max-w-none">
          <p className="text-base leading-[1.9] text-slate rise" style={delay(80)}>
            Comr. Aruna Abubakari began his career in public service through grassroots community leadership, where he witnessed firsthand the daily challenges facing schools, healthcare facilities, and rural communities across Edo North. Those early experiences continue to shape the values and priorities that define his leadership today.
          </p>
          <p className="text-base leading-[1.9] text-slate rise" style={delay(120)}>
            For nearly two decades, he has served in both community development and public administration, earning respect for his hands-on approach, transparency, and accountability. Known for personally monitoring projects and ensuring public resources are properly utilized, supporters see him as a dependable problem-solver committed to delivering meaningful results rather than empty promises.
          </p>
          <p className="text-base leading-[1.9] text-slate rise" style={delay(160)}>
            His experience spans local government administration, state-level policy implementation, and independent civic monitoring — a combination that gives him a rare vantage point on how public funds actually move, and where they get stuck, between Abuja and an Edo North ward.
          </p>
        </div>
      </div>
    </section>
  );
}
