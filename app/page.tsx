import AboutUs from "@/components/landing/AboutUs";
import BenefitsSection from "@/components/landing/Beneficts";
import FAQSection from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import { ProductShowcase } from "@/components/landing/Product";
import SalesProcess from "@/components/landing/SalesProcess";
import WhatsAppButton from "@/components/landing/Whatsapp";
import { WhyUs } from "@/components/landing/WhyUs";

export default function Home() {
  return (
    <>
     <AboutUs/>
     <BenefitsSection/>
     <ProductShowcase/>
      
     <SalesProcess/>
      <WhyUs/>
      
      <FAQSection/>
     <WhatsAppButton/>
     <Footer/>
    </>
  );
}
