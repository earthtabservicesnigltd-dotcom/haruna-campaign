import Link from "next/link";
import { Coins, BookOpen } from "lucide-react";

export function IndexStrip() {
  return (
    <div className="index-strip rise bg-paper border-b border-ink/8 py-2.5">
      <div className="max-w-site mx-auto px-8 flex justify-between items-center flex-wrap gap-2">
        <span className="font-mono text-[11.5px] tracking-wide text-slate">
          EDO NORTH SENATORIAL DISTRICT · 2027 GENERAL ELECTION
        </span>

        <div className="flex gap-5 items-center">
          <Link
            href="/donate"
            className="font-mono text-[11.5px] tracking-wide text-ink border-b border-orange pb-0.5 hover:text-orange transition-colors inline-flex items-center gap-1.5"
          >
            <Coins className="w-3.5 h-3.5" />
            DONATE TO THE CAMPAIGN
          </Link>
          <Link
            href="/abubakari-institute"
            className="font-mono text-[11.5px] tracking-wide text-ink border-b border-orange pb-0.5 hover:text-orange transition-colors inline-flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            ABUBAKARI ARUNA INSTITUTE
          </Link>
        </div>
      </div>
    </div>
  );
}