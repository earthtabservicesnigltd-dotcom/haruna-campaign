import Image from "next/image";
import { Play } from "lucide-react";
import { delay } from "@/lib/animation";

interface MediaCardProps {
  image: string;
  alt: string;
  duration: string;
  tag?: string;
  title?: string;
  description?: string;
  quote?: string;
  attribution?: string;
  delayMs?: number;
  variant?: "media" | "voxpop";
}

export function MediaCard({
  image,
  alt,
  duration,
  tag,
  title,
  description,
  quote,
  attribution,
  delayMs = 0,
  variant = "media",
}: MediaCardProps) {
  return (
    <div className={`rise bg-white group ${variant === "voxpop" ? "voxpop-card" : "media-card"}`} style={delay(delayMs)}>
      <div className="media-thumb">
        <Image src={image} alt={alt} width={640} height={360} className="w-full h-full object-cover" />
        <button className="play-btn" aria-label={`Play ${title ?? "video"}`}>
          <Play className="w-6 h-6 fill-current" />
        </button>
        <span className="media-duration">{duration}</span>
      </div>

      {variant === "media" ? (
        <div className="p-7 pb-8">
          {tag && <span className="media-tag">{tag}</span>}
          {title && <h4 className="font-display font-semibold text-[22px] my-3 text-ink">{title}</h4>}
          {description && <p className="text-[14.5px] leading-relaxed text-slate">{description}</p>}
        </div>
      ) : (
        <div className="px-6 py-5 pb-7">
          {quote && (
            <p className="font-display italic text-[15px] leading-relaxed text-ink mb-3.5">
              &ldquo;{quote}&rdquo;
            </p>
          )}
          {attribution && (
            <span className="font-mono text-[10.5px] tracking-wide text-slate">{attribution}</span>
          )}
        </div>
      )}
    </div>
  );
}