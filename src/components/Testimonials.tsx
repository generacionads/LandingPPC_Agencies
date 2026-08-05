import { Container, SectionHeading } from "./ui";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-brand-mist py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="From our agency partners"
          title="What it's like to hand us the media buying."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="soft-shadow flex flex-col gap-6 rounded-3xl bg-white p-8"
            >
              <p className="text-lg leading-7 text-black/80">&ldquo;{t.quote}&rdquo;</p>
              <footer className="text-sm text-black/50">
                <span className="text-black/80">{t.name}</span> — {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
