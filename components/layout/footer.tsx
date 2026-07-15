"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  footerQuickLinks,
  footerInvolvedLinks,
  siteConfig,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  { label: 'Facebook',  icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'X',         icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 4.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'YouTube',   icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
]

export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-ink text-white pt-20 pb-7 border-t-[3px] border-orange">
      <div className="max-w-site mx-auto px-8">
        {/* Slogan + newsletter */}
        <div className="flex items-center justify-between flex-wrap gap-6 pb-12 border-b border-white/14">
          <h2 className="font-display font-semibold text-[clamp(26px,3.2vw,40px)] leading-tight max-w-[16ch]">
            Edo North First. <em className="text-orange not-italic">Progress Always.</em>
          </h2>

          <form
            className="min-w-[min(360px,100%)]"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="nlEmail" className="block font-mono text-[11px] uppercase tracking-wide text-white/70 mb-3">
              Get campaign updates in your inbox
            </label>
            <div className="flex flex-col gap-2.5">
              <Input
                id="nlEmail"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-transparent border-white/22 text-white placeholder:text-white/40 rounded-site focus-visible:ring-orange"
              />
              <Button type="submit" className="bg-orange hover:bg-orange-dark rounded-site font-semibold">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <span className={cn("block mt-2.5 text-xs", submitted ? "text-orange" : "text-white/50")}>
              {submitted ? "You're subscribed. Thank you!" : "No spam. Unsubscribe anytime."}
            </span>
          </form>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 py-13 border-b border-white/14">
          <div className="lg:col-span-1 md:col-span-2">
            <div className="flex items-center gap-3.5 mb-4">
              <Image src="/images/senatorial_logo_clean_50x50.png" alt="Campaign logo" width={64} height={64} />
              <Image src="/images/08.png" alt="ADC logo" width={50} height={50} />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-[34ch]">{siteConfig.description}</p>
            <div className="inline-flex items-center gap-2.5 mt-5 px-3.5 py-2 border border-white/20 rounded-site">
              <span className="font-display font-bold text-base text-orange">ADC</span>
              <span className="font-mono text-[10px] uppercase tracking-wide text-white/55 leading-snug">
                African Democratic<br />Congress
              </span>
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[11.5px] tracking-widest uppercase text-orange mb-5">Quick Links</h5>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/78 hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11.5px] tracking-widest uppercase text-orange mb-5">Get Involved</h5>
            <ul className="space-y-3">
              {footerInvolvedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/78 hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11.5px] tracking-widest uppercase text-orange mb-5">Stay Connected</h5>
            <p className="text-sm text-white/60 leading-relaxed mb-3.5">
              Questions, ideas, or press enquiries? Reach the team directly.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 text-[15px] text-white border-b border-white/25 pb-1 mb-6 hover:text-orange hover:border-orange transition-colors"
            >
              <Mail className="w-4 h-4 text-orange" />
              {siteConfig.email}
            </a>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(s => (
                <a key={s.label} href="#" aria-label={s.label} className="text-white/50 hover:text-[#f97316] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex justify-between flex-wrap gap-2.5 font-mono text-[11px] text-white/50">
          <span>© 2027 Comr. Aruna Abubakari Campaign · All rights reserved</span>
          <span>
            Authorized by the Edo North Campaign Organization ·{" "}
            <Link href="#" className="hover:text-orange transition-colors">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}