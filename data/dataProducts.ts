import { Products } from "@/interface/produc.interface";


export const dataProducts: Products[] = [
   {
    name: "purificador",
    aboutus: {
        title: "Purificamos tu agua, mejoramos tu vida",
        description: "Disfruta de agua 100% limpia y segura todos los días. Olvídate del agua embotellada y ahorra mientras cuidas tu salud y el planeta. Solicita una visita gratuita y descubre cómo mejorar tu calidad de vida con nuestro purificador de agua.",
        image: "/images/bottle.png",
        background: "/images/web.png",
        ticket: "Agua pura para tu hogar, bienestar para tu familia"
    },
   },{
    name: "ozonizador",
    aboutus: {
      title: "limpieza profunda y desinfección natural",
      description: "El ozonizador transforma el aire y el agua en una herramienta de limpieza natural, desinfectando superficies, eliminando olores y combatiendo bacterias, virus y moho, sin químicos. Ideal para hogares, oficinas y espacios comerciales, promoviendo un ambiente saludable.",
      image: "/images/frasco.png",
      background: "/images/planta.png",
      ticket: "Limpieza sin químicos, poder del ozono"
    }
  }
     
   
   
]