import { SectionHead } from "./section-head";
import { MediaCard } from "./media-card";

const voxpopItems = [
  {
    image: "/images/14.png",
    alt: "Trader speaking",
    duration: "01:20",
    quote: "What I want from a senator is a working skills desk, not a rally.",
    attribution: "Comfort Aigbe — Trader, Owan East",
    delayMs: 0,
  },
  {
    image: "/images/07.png",
    alt: "Teacher speaking",
    duration: "01:45",
    quote: "His plan is the first one with a payment schedule attached to it.",
    attribution: "Blessing Erhabor — Head Teacher, Etsako West",
    delayMs: 120,
  },
  {
    image: "/images/05.png",
    alt: "Community leader speaking",
    duration: "02:05",
    quote: "He was the only official who came back to check on the borehole.",
    attribution: "Osaze Igbinedion — Community Leader, Ovia North-East",
    delayMs: 240,
  },
];

export function VoxpopSection() {
  return (
    <section id="voxpop" className="py-25">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="IN THEIR WORDS"
          title={<>People of Edo North <span className="accent">Speak</span></>}
        />

        <div className="voxpop-grid">
          {voxpopItems.map((item) => (
            <MediaCard key={item.attribution} {...item} variant="voxpop" />
          ))}
        </div>
      </div>
    </section>
  );
}