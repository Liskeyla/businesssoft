import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { Benefits } from "@/components/Benefits";
import { Timeline } from "@/components/Timeline";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Loader } from "@/components/ui/Loader";

export default function HomePage() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <FeaturedProduct />
        <Benefits />
        <Timeline />
        <Clients />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
