import { Container, Eyebrow, PillButton } from "./ui";

const platforms = ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        className="brand-blob top-24 -right-32 h-[420px] w-[420px] bg-brand-purple/60"
        aria-hidden
      />
      <div
        className="brand-blob top-40 -left-40 h-[320px] w-[320px] bg-brand-yellow/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent"
        aria-hidden
      />

      <Container className="relative flex flex-col items-start gap-8">
        <Eyebrow>White-label PPC partner for agencies</Eyebrow>

        <h1 className="max-w-3xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
          Scale your agency&apos;s paid media —{" "}
          <span className="text-brand-purple">without hiring a media buyer.</span>
        </h1>

        <p className="max-w-xl text-lg leading-7 text-black/60 md:text-xl">
          We plan, launch and optimize Google, Meta, TikTok and LinkedIn Ads
          for your clients — under your brand, in your dashboards, on reports
          that never mention our name.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <PillButton href="#contact">Become a partner agency</PillButton>
          <PillButton href="#how-it-works" variant="secondary">
            See how it works
          </PillButton>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-sm text-black/40">Campaigns run on</span>
          {platforms.map((p) => (
            <span
              key={p}
              className="soft-shadow rounded-full bg-white px-4 py-1.5 text-sm text-black/70"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
