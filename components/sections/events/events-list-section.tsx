// components/sections/events/events-list-section.tsx
"use client";

import { useState } from "react";
import { delay } from "@/lib/animation";

const categories = ["All", "Rallies", "Town Halls", "Community Visits", "Debates", "Door-to-Door"] as const;

const events = [
  { date: "Jul 18", mon: "Jul", day: "18", yr: "2026", title: "Edo North Grand Rally: A New Direction", type: "Rallies", time: "10:00 AM", location: "Auchi Township Stadium, Etsako West" },
  { date: "Jul 21", mon: "Jul", day: "21", yr: "2026", title: "Etsako Central Listening Session", type: "Town Halls", time: "4:00 PM", location: "Fugar Community Hall, Etsako Central" },
  { date: "Jul 24", mon: "Jul", day: "24", yr: "2026", title: "Okpella Market Walk & Traders Meet", type: "Community Visits", time: "9:00 AM", location: "Okpella Central Market, Etsako East" },
  { date: "Jul 28", mon: "Jul", day: "28", yr: "2026", title: "Edo North Senatorial Candidates Debate", type: "Debates", time: "6:00 PM", location: "Auchi Polytechnic Auditorium" },
  { date: "Aug 02", mon: "Aug", day: "02", yr: "2026", title: "Ward-by-Ward: Etsako West Canvassing", type: "Door-to-Door", time: "8:00 AM", location: "Various wards, Etsako West" },
];

export function EventsListSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? events : events.filter((e) => e.type === active);

  const typeColor = (t: string) => {
    if (t === "Rallies") return "text-orange bg-orange/10";
    if (t === "Debates") return "text-ink bg-ink/8";
    return "text-forest bg-emerald/8";
  };

  return (
    <section className="pb-24">
      <div className="max-w-site mx-auto px-8">
        <div className="flex gap-2.5 flex-wrap pb-9 mb-11 border-b border-ink/10 rise" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-[11.5px] tracking-wide uppercase px-4 py-2 rounded-full border transition-colors ${
                active === cat
                  ? "bg-ink text-white border-ink"
                  : "bg-white text-slate border-ink/15 hover:border-orange hover:text-orange"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-5">
          {filtered.map((event) => (
            <div
              key={event.title}
              className="grid grid-cols-[110px_1fr_auto] gap-8 items-center border border-ink/12 rounded-site p-6 bg-white hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="text-center border-r border-ink/10 pr-6">
                <span className="font-mono text-[11px] tracking-wider text-orange uppercase block">{event.mon}</span>
                <span className="font-display font-bold text-[40px] leading-none text-ink block my-1">{event.day}</span>
                <span className="font-mono text-[11px] text-slate">{event.yr}</span>
              </div>

              <div>
                <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 ${typeColor(event.type)}`}>
                  {event.type === "Rallies" && "📢"} {event.type === "Town Halls" && "💬"} {event.type === "Community Visits" && "🏠"} {event.type === "Debates" && "🎤"} {event.type === "Door-to-Door" && "🚪"}
                  {event.type}
                </span>
                <h3 className="font-display font-semibold text-[21px] leading-tight text-ink mb-2.5">{event.title}</h3>
                <div className="flex gap-5 text-[13.5px] text-slate flex-wrap">
                  <span>🕐 {event.time}</span>
                  <span>📍 {event.location}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 min-w-[150px]">
                <a href="#rsvp" className="btn-solid text-center text-sm py-2.5 px-5">RSVP</a>
                <a href="#" className="text-center text-xs font-semibold text-forest hover:text-orange transition-colors">🤝 Volunteer</a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate">
            <span className="text-3xl block mb-3">📅</span>
            <p className="font-mono text-xs tracking-wide">No events match this filter. Try another category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
