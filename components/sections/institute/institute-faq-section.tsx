// components/sections/institute/institute-faq-section.tsx
"use client";

import { useState } from "react";
import { SectionHead } from "../section-head";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is the programme fully online?", a: "Yes. Every course is delivered fully online, mixing pre-recorded material with live Zoom and Google Meet sessions. All you need is a device and an internet connection." },
  { q: "How long is each cohort?", a: "Each cohort runs one intensive week, Monday to Saturday, following the same structured rhythm: individual learning, group collaboration, practice, project work, assessment, and a Saturday graduation." },
  { q: "Do I get a certificate?", a: "Yes. Every week ends with a certificate of completion and a digital badge, awarded at the Saturday virtual graduation. Top performers get special recognition." },
  { q: "Do I need prior experience?", a: "No. The programmes are built for hands-on learning from the ground up, so beginners and those looking to upgrade existing skills are both welcome." },
  { q: "Who can enroll?", a: "The institute is open to Edo North citizens and Nigerians generally who want practical, employable, and entrepreneurial skills. Pick a discipline and join the next cohort." },
];

export function InstituteFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-25">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="FAQ" title={<>Before You <span className="accent">Enroll</span></>} />

        <div className="max-w-[760px] mx-auto space-y-4 rise" style={{ "--d": "100ms" } as React.CSSProperties}>
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-ink/12 rounded-site overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer font-display font-semibold text-lg text-ink hover:bg-paper/50 transition-colors"
              >
                <span className="flex-1">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-orange shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-[300px]" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-[14.5px] leading-relaxed text-slate">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
