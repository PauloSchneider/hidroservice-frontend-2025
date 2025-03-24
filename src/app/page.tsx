import ContactSection from "@/sections/contactSection";
import HeroSection from "@/sections/heroSection";
import ServicesSection from "@/sections/servicesSection";
import HowWeWorkSection from "@/sections/howWeWorkSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowWeWorkSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
