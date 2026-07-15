import Link from "next/link";
import { delay } from "@/lib/animation";

const stats = [
  { value: "18", label: "YEARS IN PUBLIC SERVICE" },
  { value: "07", label: "LGAs COVERED" },
  { value: "240K+", label: "RESIDENTS REPRESENTED" },
];

export function CtaBannerSection() {
  return (
    <section id="cta" className="cta-banner bg-ink text-white py-25 text-center">
      <div className="max-w-site mx-auto px-8">
        <span className="eyebrow rise">EDO NORTH · 2027 GENERAL ELECTION</span>

        <h2 className="rise font-display font-semibold text-[clamp(30px,4.2vw,44px)] leading-tight mt-5 max-w-[720px] mx-auto" style={delay(100)}>
          Edo North, It&apos;s Time for <em>Better Representation</em>
        </h2>

        <p className="rise max-w-[560px] mx-auto mt-5 text-base leading-relaxed text-white/75" style={delay(200)}>
          Join thousands of residents backing a campaign built on published budgets, finished projects, and a senator who shows up twice: for the ribbon, and for the follow-up.
        </p>

        <div className="rise mt-9 flex gap-3.5 justify-center flex-wrap" style={delay(300)}>
          <Link href="/volunteer" className="btn-solid">Volunteer</Link>
          <Link href="/contact" className="btn-ghost">Contact Team</Link>
        </div>

        <div className="rise mt-10 pt-6 border-t border-white/18 flex justify-center gap-12 flex-wrap" style={delay(400)}>
          {stats.map((s) => (
            <div key={s.label}>
              <strong className="font-display text-[26px] text-orange block">{s.value}</strong>
              <span className="font-mono text-[10px] text-white/65 tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}