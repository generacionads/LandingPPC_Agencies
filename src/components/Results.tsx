import { Container, SectionHeading } from "./ui";
import { results } from "@/data/results";

export function Results() {
  return (
    <section id="results" className="py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Results"
          title="Numbers from partner accounts."
          description="A few outcomes from campaigns we run white-label for agency partners."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {results.map((r) => (
            <div
              key={r.label}
              className="soft-shadow flex flex-col gap-3 rounded-3xl bg-white p-8"
            >
              <span className="text-4xl text-brand-purple">{r.stat}</span>
              <p className="text-lg leading-6">{r.label}</p>
              <p className="text-sm text-black/45">{r.context}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
