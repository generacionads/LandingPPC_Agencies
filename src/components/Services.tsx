import { Container, SectionHeading } from "./ui";

const services = [
  {
    name: "Google Ads",
    detail: "Search, Shopping, Performance Max, Display",
  },
  {
    name: "Meta Ads",
    detail: "Facebook & Instagram, full-funnel",
  },
  {
    name: "TikTok Ads",
    detail: "Spark Ads, conversion & app campaigns",
  },
  {
    name: "LinkedIn Ads",
    detail: "B2B lead gen & ABM campaigns",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="What we run"
          title="One partner, every major ad platform."
          description="Hand off a single channel or the whole media mix — one strategist keeps it coordinated."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.name}
              className="soft-shadow flex flex-col gap-2 rounded-3xl bg-white p-7"
            >
              <h3 className="text-xl">{s.name}</h3>
              <p className="text-sm leading-6 text-black/55">{s.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
