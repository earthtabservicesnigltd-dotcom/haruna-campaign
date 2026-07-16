// components/sections/volunteer/volunteer-hero-section.tsx
export function VolunteerHeroSection() {
  return (
    <section className="py-16 pb-12 bg-white border-b border-ink/8">
      <div className="max-w-site mx-auto px-8">
        <h1 className="font-display font-semibold text-[clamp(36px,4.2vw,58px)] leading-tight text-ink rise">
          Join the <em className="text-forest not-italic">Movement</em>
        </h1>
        <p className="text-[17px] leading-relaxed text-slate max-w-[560px] mt-4 rise" style={{ "--d": "120ms" } as React.CSSProperties}>
          This campaign runs on people, not privilege. Whether you knock on doors, run a camera, or coordinate logistics, there&apos;s a place for you.
        </p>
      </div>
    </section>
  );
}
