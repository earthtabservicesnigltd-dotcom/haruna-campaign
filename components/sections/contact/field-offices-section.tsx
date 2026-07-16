// components/sections/contact/field-offices-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

const offices = [
  { lga: "Etsako West", title: "Auchi (Headquarters)", addr: "14 Sapele Road, Auchi", hrs: "MON–SAT · 9AM–5PM" },
  { lga: "Akoko-Edo", title: "Igarra Liaison Desk", addr: "Market Junction, Igarra", hrs: "MON–FRI · 10AM–4PM" },
  { lga: "Etsako Central", title: "Fugar Desk", addr: "Township Hall Annex, Fugar", hrs: "MON–FRI · 10AM–4PM" },
  { lga: "Etsako East", title: "Agenebode Desk", addr: "Riverside Road, Agenebode", hrs: "MON–FRI · 10AM–4PM" },
  { lga: "Owan East", title: "Afuze Desk", addr: "Central Market Road, Afuze", hrs: "MON–FRI · 10AM–4PM" },
  { lga: "Owan West", title: "Sabongida-Ora Desk", addr: "Ora Community Centre", hrs: "MON–FRI · 10AM–4PM" },
];

export function FieldOfficesSection() {
  return (
    <section className="py-22 bg-paper">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="ON THE GROUND" title={<>Field Offices Across <span className="accent">All Seven LGAs</span></>} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-ink/10">
          {offices.map((o, i) => (
            <div key={o.lga} className="bg-white p-8 hover:-translate-y-1 transition-transform rise" style={delay(i * 60)}>
              <span className="font-mono text-[11px] tracking-wider uppercase text-orange block mb-3">{o.lga}</span>
              <h4 className="font-display font-semibold text-lg mb-2.5">{o.title}</h4>
              <p className="text-[13.5px] leading-relaxed text-slate mb-2">{o.addr}</p>
              <p className="font-mono text-[11px] tracking-wide text-ink">{o.hrs}</p>
            </div>
          ))}
        </div>

        <div className="bg-ink text-white rounded-site p-8 md:p-12 mt-8 grid md:grid-cols-[1fr_auto] gap-8 items-center rise">
          <div>
            <span className="font-mono text-xs tracking-widest text-orange block mb-3.5">DROP BY IN PERSON</span>
            <h3 className="font-display font-semibold text-[clamp(24px,2.6vw,32px)] leading-tight max-w-[640px]">
              Our doors are open. Walk into any field office and a coordinator will hear you out, no appointment needed.
            </h3>
          </div>
          <a href="https://maps.google.com" className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-site font-mono text-sm tracking-wide hover:border-orange hover:text-orange transition-colors whitespace-nowrap">
            Open in Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}
