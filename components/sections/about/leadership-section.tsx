// components/sections/about/leadership-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

const leadership = [
  { n: "01", title: "Edo North Community Development Coalition", text: "Chaired the coalition that independently monitors constituency projects and publishes biannual report cards across all seven LGAs." },
  { n: "02", title: "Rural Infrastructure Reform", text: "Designed and implemented the milestone-based payment system for feeder road projects, increasing completion rates from 38% to 81%." },
  { n: "03", title: "Education Accountability System", text: "Created the ward-level enrolment audit system adopted by multiple LGAs, reducing reporting discrepancies by over 40%." },
  { n: "04", title: "Councillor Transparency Initiative", text: "Pioneered quarterly public expenditure reports at the local government level, a practice almost unheard of at the time." },
  { n: "05", title: "Constituency Project Report Card", text: "Launched a biannual citizen-led evaluation of government projects, rating quality, timeliness, and value-for-money." },
  { n: "06", title: "Interfaith & Community Engagement", text: "Built a reputation for even-handed community engagement across Edo North's religiously diverse population." },
];

export function LeadershipSection() {
  return (
    <section className="py-20">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="LEADERSHIP"
          title={<>Experience &amp; <span className="accent">Impact</span></>}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-ink/10">
          {leadership.map((item, i) => (
            <div key={item.n} className="bg-white p-10 rise" style={delay(i * 60)}>
              <span className="font-mono text-[11px] text-orange tracking-wider">{item.n}</span>
              <h4 className="font-display font-semibold text-lg my-3.5 text-ink">{item.title}</h4>
              <p className="text-[14.5px] leading-relaxed text-slate">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
