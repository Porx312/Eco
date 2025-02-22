import AboutUs from "@/components/landing/AboutUs";
import FAQSection from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import { ProductShowcase } from "@/components/landing/Product";
import SalesProcess from "@/components/landing/SalesProcess";
import WhatsAppButton from "@/components/landing/Whatsapp";
import { dataProducts } from "@/data/dataProducts";

export default function Home() {
  const data = dataProducts.find((product) => product.name === "purificador");
  return (
    <>
      <AboutUs
        background={data?.aboutus.background || ""}
        description={data?.aboutus.description || ""}
        image={data?.aboutus.image || ""}
        ticket={data?.aboutus.ticket || ""}
        title={data?.aboutus.title || ""}
      />

      <SalesProcess />

      <FAQSection />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
