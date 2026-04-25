import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Properties } from "@/components/site/Properties";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { SampleBanner } from "@/components/site/SampleBanner";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { CookieBanner } from "@/components/site/CookieBanner";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <SampleBanner position="top" />
      <Header />
      <Hero />
      <Properties />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
      <SampleBanner position="bottom" />
      <FloatingCTA />
      <CookieBanner />
      <Toaster position="top-center" richColors />
    </main>
  );
}
