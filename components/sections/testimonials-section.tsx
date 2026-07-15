import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHead } from "./section-head";
import { delay } from "@/lib/animation";

const testimonials = [
  {
    quote: "I've volunteered for three campaigns in this district. This is the first one that actually gave us a monitoring role, not just a T-shirt.",
    name: "Emmanuel Okoro",
    role: "Ward Volunteer Coordinator",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    delayMs: 0,
  },
  {
    quote: "I donated because the campaign publishes where the money goes. That's rare enough here that it changed my mind about giving at all.",
    name: "Ngozi Aihie",
    role: "Campaign Donor, Diaspora Network",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    delayMs: 120,
  },
  {
    quote: "As a young graduate here, the youth desk pledge is the only concrete plan I've heard from anyone running this cycle.",
    name: "Daniel Ogiemwonyi",
    role: "Youth Supporter, Etsako East",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    delayMs: 240,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-25 bg-paper">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="SUPPORT"
          title={<>Testimonials From <span className="accent">Supporters</span></>}
        />

        <div className="test-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="test-card rise" style={delay(t.delayMs)}>
              <Quote className="w-7 h-7 text-emerald opacity-50 mb-3.5" />
              <p>{t.quote}</p>
              <div className="flex items-center gap-3">
                <Image src={t.avatar} alt={t.name} width={42} height={42} className="rounded-full object-cover" />
                <div>
                  <strong className="block text-[13.5px]">{t.name}</strong>
                  <span className="font-mono text-[10.5px] text-slate">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}