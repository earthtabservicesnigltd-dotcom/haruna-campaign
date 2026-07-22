// components/dashboard/views/certificates-view.tsx
"use client";

export function CertificatesView() {
  const certs = [
    { name: "Professional Certificate in Estate Management", earned: true },
    { name: "Professional Certificate in Digital Skills", earned: true },
    { name: "Professional Certificate in Agro-Allied", earned: false },
    { name: "Professional Certificate in Entrepreneurship & Wealth Creation", earned: false },
    { name: "Professional Certificate in Import & Export Strategies", earned: false },
    { name: "Professional Certificate in Engineering Technology", earned: false },
  ];

  return (
    <div>
      <div className="mb-7">
        <span className="font-mono text-[11px] tracking-widest text-orange block mb-2">Digital Badges</span>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] leading-tight">Certificates</h2>
        <p className="text-[14.5px] text-slate mt-2 max-w-[70ch]">Earn a professional certificate for each programme. Requirements: 80% attendance, all tasks submitted, and Saturday graduation participation.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c) => (
          <div key={c.name} className={`bg-white border border-ink/10 rounded-site p-6 ${!c.earned ? "opacity-70" : ""}`}>
            <div className="text-3xl mb-3.5">{c.earned ? "🏆" : "🔒"}</div>
            <div className="mb-4">
              <span className={`font-mono text-[10.5px] tracking-wide uppercase px-2 py-0.5 rounded-site ${
                c.earned ? "bg-emerald/10 text-emerald" : "bg-paper text-slate"
              }`}>{c.earned ? "Earned" : "Locked"}</span>
            </div>
            <h4 className="font-display font-semibold text-[17px] leading-tight mb-2">{c.name}</h4>
            <p className="text-sm text-slate leading-relaxed mb-4">
              {c.earned
                ? "Completed the one-week intensive with full attendance and a submitted capstone."
                : "Complete the cohort with 80% attendance and a submitted capstone to unlock."}
            </p>
            <button className={`w-full py-2.5 rounded-site text-sm font-semibold transition-colors ${
              c.earned ? "bg-orange text-white hover:bg-orange-dark" : "border border-ink/10 text-ink hover:border-orange hover:text-orange"
            }`}>
              {c.earned ? "Download PDF" : "View Requirements"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
