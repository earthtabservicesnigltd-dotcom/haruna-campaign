import { SectionHead } from "./section-head";
import { MediaCard } from "./media-card";

const mediaItems = [
  {
    image: "/images/20.jpeg",
    alt: "Campaign introduction video thumbnail",
    duration: "03:42",
    tag: "INTRODUCTION",
    title: "Campaign Introduction Video",
    description:
      "Meet Comr. Aruna Abubakari — his story, his record, and his plan for Edo North, in his own words.",
    delayMs: 0,
  },
  {
    image: "/images/13.png",
    alt: "Why I am running speech thumbnail",
    duration: "07:15",
    tag: "SPEECH",
    title: "“Why I Am Running”",
    description:
      "The full address delivered at Auchi Town Hall, setting out the case for a new direction in Edo North.",
    delayMs: 140,
  },
];

export function MediaHubSection() {
  return (
    <section id="media" className="py-25 bg-paper">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="WATCH"
          title={<>Hear It From <span className="accent">Him Directly</span></>}
        />
        <div className="media-grid">
          {mediaItems.map((item) => (
            <MediaCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}