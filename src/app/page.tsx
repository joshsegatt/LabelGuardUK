import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { Pricing } from "@/components/marketing/Pricing";
import { CTA } from "@/components/marketing/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
    </main>
  );
}
