// components/sections/events/newsletter-section.tsx
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20">
      <div className="max-w-site mx-auto px-8">
        <div className="bg-gradient-to-br from-ink to-forest text-white py-16 px-8 md:px-16 rounded-site text-center">
          <h2 className="font-display font-semibold text-[clamp(26px,3vw,38px)] mb-3">
            Stay <span className="text-orange italic">Up to Date</span>
          </h2>
          <p className="text-[15px] text-white/75 mb-8 max-w-[520px] mx-auto leading-relaxed">
            Get event invites, campaign schedules, and field reports delivered to your inbox.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-[520px] mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3.5 rounded-site border border-white/20 bg-white/10 text-white placeholder:text-white/50 text-[15px] font-body outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange text-white rounded-site font-semibold text-[15px] hover:bg-orange-dark transition-colors whitespace-nowrap"
            >
              {submitted ? "Subscribed ✓" : "Subscribe"}
              {!submitted && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-orange/90 font-medium">
              You&apos;re in! Check your inbox for the next update.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
