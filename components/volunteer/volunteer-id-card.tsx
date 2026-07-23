// components/volunteer/volunteer-id-card.tsx
"use client";

import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

interface VolunteerData {
  full_name: string;
  email: string;
  phone: string;
  lga: string;
  skills: string[];
  volunteer_id: string;
  created_at: string;
}

export function VolunteerIDCard({ volunteer }: { volunteer: VolunteerData }) {
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const fullName = volunteer.full_name.toUpperCase();
  const initials = volunteer.full_name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  const areaOfService = volunteer.skills?.[0]?.toUpperCase() ?? "GENERAL";
  const dateRegistered = new Date(volunteer.created_at).toLocaleDateString("en-GB", {
    day: "2-digit", month: "long", year: "numeric",
  }).toUpperCase();
  const verifyUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/verify/${volunteer.volunteer_id.replace(/\//g, "-")}`;

  async function downloadCard(ref: React.RefObject<HTMLDivElement | null>, filename: string) {
    if (!ref.current) return;
    const html2canvas = (await import("html2canvas-pro")).default;
    const jsPDF = (await import("jspdf")).default;

    const canvas = await html2canvas(ref.current, {
      scale: 3, useCORS: true, logging: false,
      onclone: (clonedDoc) => {
        const el = clonedDoc.body;
        el.style.setProperty("--color-ink", "#01381D");
        el.style.setProperty("--color-orange", "#F97316");
      },
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [canvas.width / 3, canvas.height / 3] });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width / 3, canvas.height / 3);
    pdf.save(`${filename}.pdf`);
  }

  function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => setPhoto(event.target?.result as string);
    reader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col items-center gap-8 py-8 px-4">
      <h2 className="font-display text-3xl text-center">
        YOUR <span className="text-orange">ID CARD</span>
      </h2>
      <p className="text-slate text-sm text-center -mt-4">
        Upload your photo, preview the card, then download.
      </p>

      {/* Photo upload */}
      <label className="cursor-pointer flex items-center gap-2 bg-paper border border-ink/15 rounded-site px-5 py-3 hover:border-orange transition-colors">
        <span className="text-lg">📸</span>
        <span className="text-sm font-medium text-ink">{photo ? "Change Photo" : "Upload Your Photo"}</span>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
      </label>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full">
        {/* ── FRONT ── */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-slate">Front</p>
          <div ref={frontRef} className="w-[340px] min-h-[520px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white relative font-sans">
            {/* Header */}
            <div className="bg-ink px-4 py-3 flex items-center gap-3">
              <Image src="/images/logo.png" alt="Campaign" width={48} height={48} className="object-contain rounded" />
              <div className="w-px h-10 bg-white/30" />
              <div>
                <p className="text-white font-black text-xl leading-none tracking-tight">AA</p>
                <p className="text-white text-[9px] leading-tight font-semibold">ARUNA ABUBAKARI<br />SENATORIAL CAMPAIGN</p>
              </div>
            </div>
            {/* Tagline */}
            <div className="bg-white px-4 py-2 border-b border-gray-100">
              <p className="text-ink font-black text-sm tracking-wide">PEOPLE FIRST. <span className="text-orange">PROGRESS ALWAYS.</span></p>
              <p className="text-gray-400 text-[9px] tracking-[0.15em]">LEADERSHIP · ACCOUNTABILITY · PROGRESS</p>
            </div>
            {/* ID Card Label */}
            <div className="bg-ink px-4 py-2 flex items-center justify-between">
              <p className="text-white font-black text-sm tracking-widest">VOLUNTEER ID CARD</p>
              <div className="flex gap-1">
                <div className="w-3 h-5 bg-orange skew-x-[-10deg]" />
                <div className="w-3 h-5 bg-orange skew-x-[-10deg]" />
              </div>
            </div>
            {/* Body */}
            <div className="px-4 pt-4 pb-2 flex gap-4 relative">
              <div className="absolute right-2 top-2 opacity-[0.06]">
                <Image src="/images/logo.png" alt="" width={128} height={128} />
              </div>
              {/* Photo */}
              <div className="shrink-0">
                <div className="w-[100px] h-[120px] border-2 border-ink rounded overflow-hidden bg-gray-100">
                  {photo ? (
                    <Image src={photo} alt="Volunteer" width={100} height={120} className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-3xl font-bold">{initials}</div>
                  )}
                </div>
              </div>
              {/* Info */}
              <div className="flex-1 space-y-2">
                <div>
                  <p className="text-ink text-[9px] font-bold tracking-widest">NAME:</p>
                  <p className="font-black text-sm leading-tight text-gray-900">{fullName}</p>
                </div>
                <div>
                  <p className="text-ink text-[9px] font-bold tracking-widest">VOLUNTEER ID:</p>
                  <p className="font-black text-sm text-orange">{volunteer.volunteer_id}</p>
                </div>
                <div>
                  <p className="text-ink text-[9px] font-bold tracking-widest">LGA:</p>
                  <p className="font-bold text-sm text-gray-900">{volunteer.lga.toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-ink text-[9px] font-bold tracking-widest">PHONE:</p>
                  <p className="font-bold text-sm text-gray-900">{volunteer.phone}</p>
                </div>
              </div>
            </div>
            {/* Bottom info + QR */}
            <div className="px-4 pb-2 flex justify-between items-end">
              <div className="space-y-1.5">
                <div>
                  <p className="text-ink text-[9px] font-bold tracking-widest">AREA OF SERVICE:</p>
                  <p className="font-bold text-xs text-gray-900">{areaOfService}</p>
                </div>
                <div>
                  <p className="text-ink text-[9px] font-bold tracking-widest">EMAIL:</p>
                  <p className="font-bold text-xs text-gray-900">{volunteer.email.toLowerCase()}</p>
                </div>
                <div>
                  <p className="text-ink text-[9px] font-bold tracking-widest">DATE REGISTERED:</p>
                  <p className="font-bold text-xs text-gray-900">{dateRegistered}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="border-2 border-ink p-1 rounded">
                  <QRCodeSVG value={verifyUrl} size={72} fgColor="#01381D" bgColor="#ffffff" />
                </div>
                <p className="text-[8px] text-gray-400 tracking-widest">SCAN TO VERIFY</p>
              </div>
            </div>
            {/* Footer */}
            <div className="bg-ink px-4 py-3 mt-2">
              <p className="text-white text-[11px] text-center font-bold tracking-wide">COMR. ARUNA ABUBAKARI</p>
              <p className="text-orange text-[9px] text-center font-bold tracking-widest">SENATORIAL CANDIDATE, EDO NORTH</p>
            </div>
          </div>
          <button onClick={() => downloadCard(frontRef, `AA-ID-Front-${volunteer.volunteer_id.replace(/\//g, "-")}`)}
            className="bg-ink text-white font-bold px-6 py-2.5 rounded-xl hover:bg-orange transition-colors text-sm">
            Download Front
          </button>
        </div>

        {/* ── BACK ── */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-slate">Back</p>
          <div ref={backRef} className="w-[340px] min-h-[520px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white font-sans flex flex-col">
            <div className="bg-ink px-5 py-4">
              <p className="text-white font-black text-lg leading-tight">
                <span className="text-orange">AA</span> SENATORIAL CAMPAIGN ORGANIZATION
              </p>
              <p className="text-white/70 text-xs font-semibold tracking-widest mt-1">PEOPLE FIRST. <span className="text-orange">PROGRESS ALWAYS.</span></p>
              <div className="flex gap-1 mt-2">
                <div className="w-4 h-1.5 bg-orange" /><div className="w-4 h-1.5 bg-orange" /><div className="w-4 h-1.5 bg-orange" />
              </div>
            </div>
            <div className="px-5 py-4 border-b border-gray-100">
              <p className="text-ink font-black text-sm tracking-wide mb-2">ABOUT US</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                We are a people-driven movement committed to electing{" "}
                <strong>Comr. Aruna Abubakari</strong> as Senator for Edo North.
              </p>
            </div>
            <div className="px-5 py-4 flex-1">
              <p className="text-ink font-black text-sm tracking-wide mb-3">VOLUNTEER CODE OF CONDUCT</p>
              <div className="space-y-2">
                {[
                  "I will promote peace, unity and respect for all.",
                  "I will abide by the rules and directives of the campaign.",
                  "I will not engage in any act that brings the campaign into disrepute.",
                  "I will work with integrity, loyalty and responsibility.",
                  "I will uphold the values of transparency and accountability.",
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-ink flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-5 border-t-2 border-orange/40" />
            <div className="px-5 py-4">
              <p className="text-gray-500 text-[10px] text-center font-semibold mb-1">PROPERTY OF</p>
              <p className="text-ink font-black text-xs text-center mb-3">AA SENATORIAL CAMPAIGN ORGANIZATION</p>
              <p className="text-orange font-black text-[10px] text-center tracking-wide mb-2">IF FOUND, PLEASE RETURN:</p>
              <div className="space-y-1 text-center">
                <p className="text-gray-600 text-xs">Aruna Campaign House</p>
                <p className="text-gray-600 text-xs">14 Sapele Road, Auchi, Edo State</p>
                <p className="text-gray-600 text-xs">{volunteer.phone}</p>
              </div>
            </div>
            <div className="bg-ink px-5 py-3 flex items-center justify-between mt-auto">
              <p className="text-white text-[9px] font-bold tracking-widest">NOT TRANSFERABLE</p>
              <div className="w-1.5 h-1.5 rounded-full bg-orange" />
              <p className="text-white text-[9px] font-bold tracking-widest">VALID FOR 2027</p>
            </div>
          </div>
          <button onClick={() => downloadCard(backRef, `AA-ID-Back-${volunteer.volunteer_id.replace(/\//g, "-")}`)}
            className="bg-ink text-white font-bold px-6 py-2.5 rounded-xl hover:bg-orange transition-colors text-sm">
            Download Back
          </button>
        </div>
      </div>

      <button onClick={async () => {
        await downloadCard(frontRef, `AA-ID-Front-${volunteer.volunteer_id.replace(/\//g, "-")}`);
        await downloadCard(backRef, `AA-ID-Back-${volunteer.volunteer_id.replace(/\//g, "-")}`);
      }} className="bg-orange text-white font-bold px-10 py-3 rounded-xl hover:bg-ink transition-colors uppercase tracking-wider">
        Download Both Cards
      </button>
    </div>
  );
}
