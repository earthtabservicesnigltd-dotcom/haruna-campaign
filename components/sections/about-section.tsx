import Image from "next/image";
import { SectionHead } from "./section-head";
import { delay } from "@/lib/animation";

const credentials = [
  { title: "B.Sc. Public Administration", subtitle: "University of Benin" },
  { title: "M.Sc. Development Studies", subtitle: "University of Ibadan" },
  { title: "Former Ward Education Officer", subtitle: "Etsako LGA, 2006–2011" },
  { title: "Special Adviser, Rural Infrastructure", subtitle: "Edo State, 2015–2021" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-25">
      <div className="max-w-site mx-auto px-8 about-grid">
        <SectionHead
          number="PROFILE"
          title={<>Who Is <span className="accent">Abubakari</span></>}
          className="col-span-full"
        />

        <figure className="rise bg-white p-5">
          <Image
            src="/images/20.jpeg"
            alt="Comr. Aruna Abubakari"
            width={500}
            height={625}
            className="w-full"
            priority
          />
          <figcaption className="font-mono text-[11px] text-slate mt-3.5 text-center tracking-wide">
            Edo North Constituency Office, Auchi
          </figcaption>
        </figure>

        <div className="rise" style={delay(120)}>
          <p className="text-base leading-[1.9] text-[#414c50] mb-5 max-w-[560px] first-letter:font-display first-letter:text-[56px] first-letter:font-bold first-letter:float-left first-letter:leading-[0.8] first-letter:mr-2.5 first-letter:mt-1.5 first-letter:text-forest">
            Comr. Aruna Abubakari began his journey in public service through grassroots community leadership, where he witnessed firsthand the daily challenges facing schools, healthcare facilities, and rural communities across Edo North. Those early experiences continue to shape the values and priorities that define his leadership today.
          </p>
          <p className="text-base leading-[1.9] text-[#414c50] mb-5 max-w-[560px]">
            For nearly two decades, he has served in both community development and public administration, earning respect for his hands-on approach, transparency, and accountability. Known for personally monitoring projects and ensuring public resources are properly utilized, supporters see him as a dependable problem-solver committed to delivering meaningful results rather than empty promises.
          </p>

          <ul className="creds grid sm:grid-cols-2 gap-x-7 gap-y-4 mt-8">
            {credentials.map((cred) => (
              <li key={cred.title}>
                <strong>{cred.title}</strong>
                <span>{cred.subtitle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}