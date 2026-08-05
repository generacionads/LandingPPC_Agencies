import { Container, SectionHeading } from "./ui";
import { faq } from "@/data/faq";

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="FAQ" title="Questions agencies actually ask." />

        <div className="flex max-w-3xl flex-col divide-y divide-black/10 border-t border-b border-black/10">
          {faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg">
                {item.q}
                <span className="shrink-0 text-brand-purple transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-6 text-black/60">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
