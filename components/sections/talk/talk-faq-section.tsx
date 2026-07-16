// components/sections/talk/talk-faq-section.tsx
"use client";

import { useState } from "react";
import { SectionHead } from "../section-head";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Does Abubakari really read these?", a: "Every question is read by the campaign team, and the ones selected each week are answered by Abubakari himself. When it's his answer, it's genuinely his words." },
  { q: "Will my name and details be made public?", a: "Only your first name and LGA appear alongside a featured answer, and only if you allow public answering. Your email and phone number are never published." },
  { q: "How are the weekly questions chosen?", a: "We group submissions by theme and pick the questions that reflect what most people are asking. Selection is on merit, never on who is asking." },
  { q: "What if my question is urgent or personal?", a: "Reach the field team directly on WhatsApp or through the Contact page. Uncheck 'answer publicly' and we'll keep it between us." },
  { q: "How soon will I hear back?", a: "Featured questions are answered here every Friday. If yours isn't selected, the team still aims to respond directly within a week." },
];

export function TalkFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-25">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="FAQ" title={<>Good to <span className="accent">Know</span></>} />

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
