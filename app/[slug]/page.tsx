import AboutUs from "@/components/landing/AboutUs";
import FAQSection from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import { ProductShowcase } from "@/components/landing/Product";
import SalesProcess from "@/components/landing/SalesProcess";
import WhatsAppButton from "@/components/landing/Whatsapp";
import { WhyUs } from "@/components/landing/WhyUs";
import { Droplet, Heart, DollarSign, Leaf, ShieldCheck, Zap } from "lucide-react";
import { dataProducts } from "@/data/dataProducts";
import BenefitsSection from "@/components/landing/Beneficts";

const iconMapping = {
  Droplet: Droplet,
  Heart: Heart,
  DollarSign: DollarSign,
  Leaf: Leaf,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params // Desestructuramos directamente de la promesa resuelta
  const data = dataProducts.find((product) => product.name === slug)
  
  if (!data) {
    return <div>Product not found</div> // Si no se encuentra el producto, mostramos un mensaje
  }
  
  return (
    <section>
      <h1>My Post: {slug}</h1> {/* Titulo para mostrar el slug */}
      <AboutUs 
        background={data?.aboutus.background || ''} 
        description={data?.aboutus.description || ''} 
        image={data?.aboutus.image || ''} 
        ticket={data?.aboutus.ticket || ''} 
        title={data?.aboutus.title || ''} 
      />
        <BenefitsSection/>
     <ProductShowcase/>
      
     <SalesProcess/>
      <WhyUs/>
      
      <FAQSection/>
     <WhatsAppButton/>
     <Footer/>
    </section>
  )
}
