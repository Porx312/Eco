import AboutUs from "@/components/landing/AboutUs";
import FAQSection from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import { ProductShowcase } from "@/components/landing/Product";
import SalesProcess from "@/components/landing/SalesProcess";
import WhatsAppButton from "@/components/landing/Whatsapp";
import { dataProducts } from "@/data/dataProducts";
import BenefitsSection from "@/components/landing/Beneficts";
import ProcessTimeline from "@/components/landing/Process";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Desestructuramos directamente de la promesa resuelta
  const data = dataProducts.find((product) => product.name === slug);

  if (!data) {
    return <div>Product not found</div>; // Si no se encuentra el producto, mostramos un mensaje
  }

  return (
    <section>
      <h1>My Post: {slug}</h1> {/* Titulo para mostrar el slug */}
      <AboutUs
        background={data?.aboutus.background || ""}
        description={data?.aboutus.description || ""}
        image={data?.aboutus.image || ""}
        ticket={data?.aboutus.ticket || ""}
        title={data?.aboutus.title || ""}
      />
      <BenefitsSection
        benefits={data.benefits.benefits}
        title={data.benefits.title}
      />
      <ProcessTimeline
        title={data.process.title}
        description={data.process.description}
        steps={data.process.steps}
      />
      <ProductShowcase
        description={data.product.description}
        features={data.product.features}
        image={data.product.image}
        name={data.product.name}
      />
      <SalesProcess />
      {/*       <WhyUs/> */}
      <FAQSection />
      <WhatsAppButton />
      <Footer />
    </section>
  );
}
