import Image from "next/image"
import Header from "../Header"
import { ContactButton } from "../help/ContactButton"
import EcozonoCalculator from "../help/CalculadoraAhorro"
interface AboutUs {
  title: string;
  description: string;
  image: string;
  background: string;
  ticket: string;
}

export default function AboutUs({background,description,image,ticket,title}:AboutUs) {
  return (
    <div className=" bg-background">
     
    <Header/>
      <section className="relative  bg-blue-300">
        <div className="absolute inset-0">
          <Image
            src={background}
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
     {ticket}
    </span>
    <h1 className="text-4xl md:text-6xl font-bold text-white">
      {title}
    </h1>
    <p className="text-lg text-zinc-300 max-w-lg">
     {description}
    </p>
    <ContactButton/>
    <EcozonoCalculator/>
  </div>

          <div className="absolute bottom-45  right-0 w-[500px] h-[500px] hidden md:block  -mb-24 mr-[-100px]">
             <Image
              src={image}
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

