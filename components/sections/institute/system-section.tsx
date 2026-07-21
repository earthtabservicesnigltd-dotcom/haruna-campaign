// components/sections/institute/system-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

export function SystemSection() {
  return (
    <section className="bg-ink text-white py-25">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="LEARNING SYSTEM DESIGN" title={<>Built to Make It <span className="accent text-orange">Stick</span></>} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-white/10 border border-white/10">
          {[
            { icon: "👥", title: "Cohort-Based Learning", text: "Students learn in weekly batches, everyone progresses together." },
            { icon: "💬", title: "Peer Learning Model", text: "Group discussions turn classmates into a working network." },
            { icon: "🔨", title: "Practical Focus", text: "Assignments throughout the week and a capstone every Friday." },
            { icon: "🏆", title: "Recognition System", text: "Weekly certificates, digital badges, and Top Performer awards." },
          ].map((item, i) => (
            <div key={item.title} className="bg-ink p-8 rise" style={delay(i * 80)}>
              <span className="text-2xl text-orange block mb-4">{item.icon}</span>
              <h4 className="font-display font-semibold text-lg mb-2.5">{item.title}</h4>
              <p className="text-[13.5px] leading-relaxed text-white/62">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
