// components/sections/volunteer/volunteer-types-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

const types = [
  { letter: "A", icon: "🚶", title: "Field Volunteers", text: "Be the face of the campaign on the ground: canvassing, community outreach, and connecting directly with voters." },
  { letter: "B", icon: "💻", title: "Digital Volunteers", text: "Amplify the message online: social media, content sharing, and reaching every corner of Edo North." },
  { letter: "C", icon: "👥", title: "Mobilization Team", text: "Rally supporters, organize wards, and drive turnout on the ground." },
  { letter: "D", icon: "📅", title: "Event Support", text: "Help run rallies, town halls, and community visits from setup to coordination." },
  { letter: "E", icon: "🎥", title: "Media Team", text: "Capture the story: photography, video, live coverage, and design." },
  { letter: "F", icon: "❓", title: "Not sure where you fit?", text: "Pick your skills in the form below and we'll match you with the right team." },
];

export function VolunteerTypesSection() {
  return (
    <section className="py-20 pb-10">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="Ways to Help" title={<>Volunteer <span className="accent">Types</span></>} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-ink/10 border border-ink/10">
          {types.map((t, i) => (
            <div
              key={t.letter}
              className={`bg-white p-10 ${i === types.length - 1 ? "bg-paper flex flex-col justify-center" : ""} hover:bg-paper transition-colors rise`}
              style={delay(i * 60)}
            >
              <span className="font-mono text-[11px] tracking-wider text-orange">{t.letter}</span>
              <span className="text-3xl block my-4">{t.icon}</span>
              <h4 className="font-display font-semibold text-lg mb-2.5">{t.title}</h4>
              <p className="text-sm leading-relaxed text-slate">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
