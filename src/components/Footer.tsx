import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <Container className="flex flex-col items-center gap-4 text-sm text-black/50 md:flex-row md:justify-between">
        <span>
          Generación <span className="text-brand-purple">Ads</span> — White-label
          PPC for agencies
        </span>
        <span>© {new Date().getFullYear()} Generación Ads. All rights reserved.</span>
      </Container>
    </footer>
  );
}
