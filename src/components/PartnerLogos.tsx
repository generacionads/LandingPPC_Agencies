import Image from "next/image";
import { Container, SectionHeading } from "./ui";
import { agencyPartners } from "@/data/agencyPartners";

export function PartnerLogos() {
  return (
    <section className="bg-brand-mist py-24">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Agency partners"
          title="Agencies already running white-label PPC with us."
          align="center"
        />

        <div className="flex flex-wrap items-start justify-center gap-x-14 gap-y-10">
          {agencyPartners.map((a) => (
            <div key={a.name} className="flex w-32 flex-col items-center gap-3 text-center">
              <div
                className={`soft-shadow relative h-24 w-24 overflow-hidden rounded-full p-4 ${a.bg ?? "bg-white"}`}
              >
                <Image
                  src={a.logo}
                  alt={a.name}
                  width={a.width}
                  height={a.height}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-sm text-black/70">{a.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
