// components/sections/contact/contact-faq-section.tsx
"use client";

import { useState } from "react";
import { SectionHead } from "../section-head";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How quickly will I get a response?", a: "We aim to reply to every message within 48 hours on working days. Ward-level issues are routed to the relevant LGA coordinator." },
  { q: "I want to volunteer. Is this the right place?", a: "Select 'Volunteering' above, or head to the Volunteer page to sign up. Either way, your details reach the same field team." },
  { q: "Can I invite the campaign to my community event?", a: "Yes. Choose 'Event Invite' and include the date, town, and expected turnout. The team reviews every request." },
  { q: "Is my information kept private?", a: "Always. Your contact details are used only to respond to your enquiry and are never shared with third parties." },
];

export function ContactFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-25">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="FAQ" title={<>Before You <span className="accent">Reach Out</span></>} />

        <div className="space-y-0 max-w-[760px] rise" style={{ "--d": "100ms" } as React.CSSProperties}>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-ink/12">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-6 flex justify-between items-center gap-5 cursor-pointer font-display font-semibold text-lg text-ink">
                {faq.q}
                <Plus className={`w-4 h-4 text-orange shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-[200px]" : "max-h-0"}`}>
                <p className="text-[14.5px] leading-relaxed text-slate pb-6 max-w-[72ch]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
