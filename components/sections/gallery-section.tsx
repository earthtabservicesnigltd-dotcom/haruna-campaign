import Image from "next/image";
import { SectionHead } from "./section-head";
import { delay } from "@/lib/animation";

const galleryItems = [
  { src: "/images/22.jpg", alt: "Community visit, Auchi", cap: "Ward Visit — Auchi", tall: true, delayMs: 0 },
  { src: "/images/27.jpeg", alt: "Town hall rally", cap: "Town Hall — Etsako West", delayMs: 80 },
  { src: "/images/28.jpeg", alt: "Youth meeting", cap: "Youth Desk Launch — Owan East", delayMs: 160 },
  { src: "/images/29.jpeg", alt: "Market association meeting", cap: "Market Association Meeting", wide: true, delayMs: 240 },
  { src: "/images/30.jpeg", alt: "Health centre inspection", cap: "PHC Inspection — Ovia North-East", delayMs: 320 },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-25">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="ON THE GROUND"
          title={<>Visits, <span className="accent">Rallies & Meetings</span></>}
        />

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <a
              key={item.cap}
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className={`gallery-item rise ${item.tall ? "tall" : ""} ${item.wide ? "wide" : ""}`}
              style={delay(item.delayMs)}
            >
              <Image src={item.src} alt={item.alt} width={400} height={300} className="w-full h-full object-cover" />
              <span className="gallery-cap">{item.cap}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}