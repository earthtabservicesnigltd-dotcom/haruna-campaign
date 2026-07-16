// components/sections/donate/give-section.tsx
"use client";

import { useState } from "react";
import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

const amounts = [2500, 5000, 10000, 25000, 50000, 100000];
const lgas = ["Akoko-Edo", "Etsako Central", "Etsako East", "Etsako West", "Owan East", "Owan West", "Others outside Edo North"];

export function GiveSection() {
  const [selected, setSelected] = useState(5000);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState("once");

  return (
    <section className="py-22" id="give">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="CONTRIBUTE" title={<>Make a <span className="accent">Contribution</span></>} />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-start">
          <div className="bg-white border border-ink/12 rounded-site p-10 rise">
            <h3 className="font-display font-semibold text-2xl mb-1.5">Choose Your Amount</h3>
            <span className="font-mono text-[11.5px] tracking-wide text-slate block mb-7">ALL AMOUNTS IN NAIRA (₦)</span>

            <div className="flex border border-ink/15 rounded-site overflow-hidden mb-7">
              {["once", "monthly"].map((f) => (
                <button key={f} onClick={() => setFrequency(f)}
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${
                    frequency === f ? "bg-ink text-white" : "bg-white text-slate"
                  }`}
                >
                  {f === "once" ? "One-time" : "Monthly"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {amounts.map((a) => (
                <button key={a} onClick={() => { setSelected(a); setCustom(""); }}
                  className={`font-mono text-sm font-medium py-3.5 rounded-site border transition-colors ${
                    selected === a && !custom ? "bg-forest text-white border-forest" : "bg-paper text-ink border-ink/15 hover:border-orange hover:text-orange"
                  }`}
                >
                  ₦{a.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="relative mb-7">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-slate">₦</span>
              <input type="number" value={custom} onChange={(e) => { setCustom(e.target.value); setSelected(0); }} placeholder="Enter a custom amount" min={100}
                className="w-full pl-8 pr-4 py-3.5 border border-ink/18 rounded-site font-mono text-[15px] outline-none focus:border-orange transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-mono text-[11px] tracking-wider uppercase text-slate block mb-2">Full Name</label>
                <input type="text" placeholder="e.g. Ehizojie Osayande" className="w-full px-4 py-3.5 border border-ink/18 rounded-site text-[14.5px] outline-none focus:border-orange transition-colors" />
              </div>
              <div>
                <label className="font-mono text-[11px] tracking-wider uppercase text-slate block mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3.5 border border-ink/18 rounded-site text-[14.5px] outline-none focus:border-orange transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="font-mono text-[11px] tracking-wider uppercase text-slate block mb-2">Phone Number</label>
                <input type="tel" placeholder="+234" className="w-full px-4 py-3.5 border border-ink/18 rounded-site text-[14.5px] outline-none focus:border-orange transition-colors" />
              </div>
              <div>
                <label className="font-mono text-[11px] tracking-wider uppercase text-slate block mb-2">LGA of Residence</label>
                <select className="w-full px-4 py-3.5 border border-ink/18 rounded-site text-[14.5px] outline-none focus:border-orange transition-colors bg-white">
                  <option>Select LGA (optional)</option>
                  {lgas.map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
            </div>

            <button className="w-full bg-orange text-white py-4 rounded-site font-semibold text-[15px] hover:bg-orange-dark transition-colors">
              Continue to Secure Payment →
            </button>

            <p className="text-xs leading-relaxed text-slate mt-4">Contributions are voluntary and not tax-deductible. By donating you confirm you are a Nigerian citizen in line with INEC regulations.</p>
          </div>

          <div className="space-y-6 rise" style={delay(120)}>
            <div className="bg-paper rounded-site p-8">
              <h4 className="font-display font-semibold text-lg mb-2">Direct Bank Transfer</h4>
              <p className="text-sm text-slate mb-4">Prefer to transfer directly? Use the campaign&apos;s official account.</p>
              {[
                { label: "Account Name", value: "Friends of Aruna Abubakari Cttee" },
                { label: "Bank", value: "GTBank Plc" },
                { label: "Account Number", value: "0123456789" },
                { label: "Sort Code", value: "058-152-036" },
              ].map((b) => (
                <div key={b.label} className="flex justify-between py-2.5 border-b border-ink/15 last:border-0 text-[13.5px]">
                  <span className="text-slate">{b.label}</span>
                  <span className="font-mono font-semibold text-ink">{b.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-paper rounded-site p-8">
              <h4 className="font-display font-semibold text-lg mb-4">Other Ways to Give</h4>
              <div className="space-y-4">
                {[
                  { icon: "📱", title: "USSD Transfer", text: "Dial *737# and follow the prompts to send directly." },
                  { icon: "🏢", title: "Visit the Constituency Office", text: "14 Sapele Road, Benin City — give in person." },
                  { icon: "👥", title: "Host a Fundraiser", text: "Organize a small gathering — we'll help you plan it." },
                ].map((o) => (
                  <div key={o.title} className="flex gap-3.5 items-start">
                    <span className="text-lg text-orange shrink-0">{o.icon}</span>
                    <div>
                      <h6 className="font-display font-semibold text-[15px] mb-0.5">{o.title}</h6>
                      <p className="text-[13.5px] text-slate leading-relaxed">{o.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
