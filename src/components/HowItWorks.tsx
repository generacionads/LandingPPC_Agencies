import { Container, SectionHeading } from "./ui";

const steps = [
  {
    n: "01",
    title: "You bring the client",
    body: "Send us the brief, budget and goals. No need to hand over your whole book — just the accounts you want off your plate.",
  },
  {
    n: "02",
    title: "We build under your brand",
    body: "Every account, dashboard and report is set up with your agency's name and colors. Your client never sees ours.",
  },
  {
    n: "03",
    title: "We run and optimize",
    body: "A dedicated strategist manages campaigns daily across Google, Meta, TikTok and LinkedIn — same cadence as an in-house hire.",
  },
  {
    n: "04",
    title: "You stay the point of contact",
    body: "We send you the reporting and talking points. You deliver the update. We stay invisible.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="How the partnership works"
          title="Your client only ever sees you."
          description="We slot in as the media-buying arm behind the scenes — four steps from brief to launch."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col gap-3">
              <span className="text-sm text-brand-purple">{s.n}</span>
              <h3 className="text-xl">{s.title}</h3>
              <p className="text-black/60 leading-6">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
