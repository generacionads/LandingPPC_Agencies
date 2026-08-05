import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { WhyPartner } from "@/components/WhyPartner";
import { Results } from "@/components/Results";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <HowItWorks />
        <Services />
        <WhyPartner />
        <Results />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
