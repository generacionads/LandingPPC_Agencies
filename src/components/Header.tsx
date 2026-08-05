import Image from "next/image";
import { Container } from "./ui";

export function Header() {
  return (
    <header className="sticky top-4 z-50 md:top-6">
      <Container>
        <div className="soft-shadow mx-auto flex w-fit items-center gap-10 rounded-full bg-white/90 px-4 py-2.5 backdrop-blur md:gap-16 md:px-6">
          <a href="#top" className="flex items-center gap-2.5 text-lg tracking-tight">
            <Image src="/logo-mark.svg" alt="" width={318} height={340} className="h-7 w-auto" priority />
            Generación <span className="text-brand-purple font-medium">Ads</span>
          </a>
          <a
            href="#contact"
            className="pill-shadow rounded-full bg-black px-5 py-2.5 text-sm text-white transition-colors hover:bg-brand-purple"
          >
            Book a call
          </a>
        </div>
      </Container>
    </header>
  );
}
