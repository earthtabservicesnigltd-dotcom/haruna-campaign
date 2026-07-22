// components/dashboard/views/profile-view.tsx
"use client";

export function ProfileView() {
  return (
    <div>
      <div className="mb-7">
        <span className="font-mono text-[11px] tracking-widest text-orange block mb-2">Account</span>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] leading-tight">My Profile</h2>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.6fr] gap-6 items-start">
        <div className="bg-white border border-ink/10 rounded-site text-center p-8">
          <div className="w-[84px] h-[84px] rounded-full bg-forest text-white flex items-center justify-center font-display text-[34px] mx-auto mb-4">EO</div>
          <h3 className="font-display font-semibold text-xl">Ehizojie Osayande</h3>
          <div className="font-mono text-[11px] text-slate mt-1">COHORT WEEK 28 · ESTATE MGMT</div>
          <button className="w-full mt-5 py-3 rounded-site border border-ink/10 text-sm font-medium hover:border-orange hover:text-orange transition-colors">Change Photo</button>
        </div>

        <div className="bg-white border border-ink/10 rounded-site p-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {[
              { label: "First Name", value: "Ehizojie" },
              { label: "Last Name", value: "Osayande" },
            ].map((f) => (
              <div key={f.label}>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">{f.label}</label>
                <input type="text" defaultValue={f.value} className="w-full px-4 py-3 border border-ink/10 rounded-site text-sm outline-none focus:border-orange transition-colors" />
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {[
              { label: "Email", value: "ehizojie@example.com", type: "email" },
              { label: "Phone", value: "+234 705 216 5836", type: "tel" },
            ].map((f) => (
              <div key={f.label}>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">{f.label}</label>
                <input type={f.type} defaultValue={f.value} className="w-full px-4 py-3 border border-ink/10 rounded-site text-sm outline-none focus:border-orange transition-colors" />
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">LGA of Residence</label>
              <select className="w-full px-4 py-3 border border-ink/10 rounded-site text-sm outline-none focus:border-orange transition-colors bg-white">
                {["Etsako West", "Akoko-Edo", "Etsako Central", "Etsako East", "Owan East", "Owan West"].map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">Current Programme</label>
              <select className="w-full px-4 py-3 border border-ink/10 rounded-site text-sm outline-none focus:border-orange transition-colors bg-white">
                {["Estate Management", "Agro-Allied", "Entrepreneurship", "Digital Skills", "Import & Export", "Engineering Technology"].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="bg-orange text-white px-6 py-3 rounded-site font-semibold text-sm hover:bg-orange-dark transition-colors">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
