import { SectionHead } from "./section-head";
import { delay } from "@/lib/animation";

const values = [
  { no: "01", title: "Accountability", text: "Every constituency fund logged and published before it is spent, not after it is questioned." },
  { no: "02", title: "Service Over Status", text: "Public office is a duty to be discharged in the ward, not a title to be held in the capital." },
  { no: "03", title: "Integrity", text: "Contracts and commitments that hold whether or not anyone is watching, or filming." },
  { no: "04", title: "Grassroots First", text: "Policy shaped by the people who live with its consequences, starting at ward level." },
  { no: "05", title: "Results, Not Rhetoric", text: "Judged on classrooms completed and clinics staffed, not speeches delivered." },
  { no: "06", title: "Unity", text: "One agenda for all seven local government areas of Edo North, regardless of ward or affiliation." },
];

export function ValuesSection() {
  return (
    <section id="values" className="py-25">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="PRINCIPLES"
          title={<>His Core <span className="accent">Values</span></>}
        />

        <div className="values-grid">
          {values.map((v, i) => (
            <div key={v.no} className="value-card rise" style={delay(i * 80)}>
              <span className="value-no">{v.no}</span>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}