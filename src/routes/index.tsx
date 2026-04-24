import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Properties } from "@/components/site/Properties";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Properties />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
      <Toaster position="top-center" richColors />
    </main>
  );
}
