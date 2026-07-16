// components/sections/donate/donate-faq-section.tsx
"use client";

import { useState } from "react";
import { SectionHead } from "../section-head";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Is my donation legal under Nigerian campaign finance law?", a: "Yes. Individual contributions from Nigerian citizens are permitted under the Electoral Act, subject to disclosure thresholds we observe and publish quarterly." },
  { q: "Can I get a receipt for my contribution?", a: "Yes — an acknowledgment is sent to the email provided, or issued on the spot for in-person gifts." },
  { q: "Can I cancel a monthly contribution?", a: "Absolutely. Reach out through the Contact page and it will be cancelled before the next billing cycle." },
  { q: "Where can I see how funds are being spent?", a: "The campaign publishes a quarterly funding and expenditure report, linked above, itemising major expenses." },
];

export function DonateFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-25">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="FAQ" title={<>Common <span className="accent">Questions</span></>} />
        <div className="space-y-0 max-w-[760px] mx-auto rise" style={{ "--d": "100ms" } as React.CSSProperties}>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-ink/12">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-6 flex justify-between items-center gap-5 cursor-pointer font-display font-semibold text-lg text-ink">
                {faq.q}
                <Plus className={`w-4 h-4 text-orange shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-[200px]" : "max-h-0"}`}>
                <p className="text-[14.5px] leading-relaxed text-slate pb-6">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
