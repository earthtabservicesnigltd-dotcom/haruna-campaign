import { SectionHead } from "./section-head";
import { delay } from "@/lib/animation";

export function WhyRunningSection() {
  return (
    <section id="why-running" className="py-25 bg-paper">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="MOTIVATION"
          title={<>Why He Is <span className="accent">Running</span></>}
        />

        <div className="why-grid">
          <div className="why-quote rise">
            <span className="quote-mark">&ldquo;</span>
            <p className="font-display italic text-[19px] leading-relaxed mb-5">
              I have spent eighteen years watching Edo North&apos;s problems get named at every election and solved by none of them. This campaign exists because a ward-level plan, monitored and published, is worth more than another manifesto.
            </p>
            <div className="font-mono text-[11.5px] tracking-wide text-orange">
              — Comr. Aruna Abubakari
            </div>
          </div>

          <div className="rise space-y-5" style={delay(140)}>
            <p className="text-base leading-[1.9] text-[#414c50] max-w-[560px]">
              Comr. Aruna Abubakari is running because he has stood inside the primary healthcare centres with no nurse, the classroom blocks abandoned mid-construction, and the feeder roads that wash away every rainy season — not as a candidate touring for votes, but as the officer once assigned to fix them.
            </p>
            <p className="text-base leading-[1.9] text-[#414c50] max-w-[560px]">
              He is running because the gap between constituency budgets and constituency reality has grown too wide to close from outside government, and because Edo North deserves a senator whose record can be checked, not just believed.
            </p>
            <p className="text-base leading-[1.9] text-[#414c50] max-w-[560px]">
              This is a campaign built on the conviction that leadership is measured in boreholes that still run, classrooms that get finished, and ledgers the public can actually read — not in promises made once every four years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}