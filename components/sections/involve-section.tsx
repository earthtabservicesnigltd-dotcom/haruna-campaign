import Link from "next/link";
import { SectionHead } from "./section-head";
import { delay } from "@/lib/animation";

const blocks = [
  {
    letter: "A",
    title: "Volunteer",
    text: "Join a ward team knocking on doors, staffing town halls, or helping run polling-day logistics across Edo North.",
    href: "/volunteer",
    filled: true,
    delayMs: 0,
  },
  {
    letter: "B",
    title: "Donate",
    text: "Every contribution is logged and published quarterly, in line with the campaign's own accountability pledge.",
    href: "/donate",
    delayMs: 120,
  },
  {
    letter: "C",
    title: "Host a Meeting",
    text: "Invite the campaign to a town hall, market association, or church hall meeting anywhere in the district.",
    href: "/contact",
    delayMs: 240,
  },
];

export function InvolveSection() {
  return (
    <section id="involve" className="py-25 mb-8">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="GET INVOLVED"
          title={<>Three Ways <span className="accent">In</span></>}
        />

        <div className="involve-grid">
          {blocks.map((block) => (
            <div
              key={block.letter}
              className={`involve-block rise ${block.filled ? "filled" : ""}`}
              style={delay(block.delayMs)}
            >
              <div>
                <span className="font-mono text-[11px] text-orange tracking-wider">{block.letter}</span>
                <h4 className="font-display text-[26px] font-semibold my-4">{block.title}</h4>
                <p className="text-sm leading-relaxed text-slate mb-6">{block.text}</p>
              </div>
              <Link
                href={block.href}
                className="font-mono text-xs tracking-wide border-b-[1.5px] border-orange pb-0.5 self-start hover:text-orange transition-colors"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}