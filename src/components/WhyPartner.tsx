import { Container, SectionHeading } from "./ui";
import {
  IconLayers,
  IconShield,
  IconUserOff,
  IconChart,
  IconClock,
  IconHandshake,
} from "./Icons";

const points = [
  {
    icon: IconLayers,
    title: "White-labeled, always",
    body: "Dashboards, reports and emails carry your agency's name and branding — not ours.",
  },
  {
    icon: IconUserOff,
    title: "Zero direct client contact",
    body: "We never reach out to your client. You control every touchpoint of the relationship.",
  },
  {
    icon: IconHandshake,
    title: "A dedicated strategist",
    body: "Your accounts get a named strategist, not a rotating pod shared across dozens of agencies.",
  },
  {
    icon: IconChart,
    title: "Transparent partner pricing",
    body: "A flat fee per managed account. No revenue share, no surprise line items on the invoice.",
  },
  {
    icon: IconClock,
    title: "Live in under two weeks",
    body: "Structured onboarding gets most accounts launched within 5–10 business days.",
  },
  {
    icon: IconShield,
    title: "Confidentiality by default",
    body: "NDA on every partnership. Your client roster and our arrangement stay between us.",
  },
];

export function WhyPartner() {
  return (
    <section id="why-us" className="bg-brand-mist py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why agencies partner with us"
          title="Built to stay behind the curtain."
          description="Everything about the partnership is designed so your client relationship stays exactly where it is: with you."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-purple soft-shadow">
                <Icon />
              </div>
              <h3 className="text-lg">{title}</h3>
              <p className="text-black/60 leading-6">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
