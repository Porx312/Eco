import Image from "next/image"
import Header from "../Header"
import { ContactButton } from "../help/ContactButton"

export default function AboutUs() {
  return (
    <div className=" bg-background">
     
    <Header/>
      <section className="relative  bg-blue-300">
        <div className="absolute inset-0">
          <Image
            src="/images/web.png"
            alt="Background"
            fill
            className="object-cover opacity-90 "
            priority
          />
       {/*    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900/90" /> */}
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-2xl space-y-6">
    <span className="inline-block px-4 py-1.5 bg-white/60 text-primary text-sm font-medium rounded-full">
      Agua pura para tu hogar, bienestar para tu familia
    </span>
    <h1 className="text-4xl md:text-6xl font-bold text-white">
      Purificamos tu agua, mejoramos tu vida
    </h1>
    <p className="text-lg text-zinc-300 max-w-lg">
      Disfruta de agua 100% limpia y segura todos los días. Olvídate del agua embotellada y ahorra mientras cuidas tu salud y el planeta.  
      Solicita una visita gratuita y descubre cómo mejorar tu calidad de vida con nuestro purificador de agua.
    </p>
    <ContactButton/>
  </div>

          <div className="absolute bottom-0  right-0 w-[600px] h-[600px] hidden md:block -mb-24 mr-[-100px]">
             <Image
              src="/images/bottle.png"
              alt="Water Bottles"
              width={400}
              height={400}
              className="object-contain"
            /> 
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>
    </div>
  )
}

