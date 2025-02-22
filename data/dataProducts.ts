import { Products } from "@/interface/produc.interface";

export const dataProducts: Products[] = [
  {
    name: "purificador",
    aboutus: {
      title: "Purificamos tu agua, mejoramos tu vida",
      description:
        "Disfruta de agua 100% limpia y segura todos los días. Olvídate del agua embotellada y ahorra mientras cuidas tu salud y el planeta. Solicita una visita gratuita y descubre cómo mejorar tu calidad de vida con nuestro purificador de agua.",
      image: "/images/bottle.png",
      background: "/images/web.png",
      ticket: "Agua pura para tu hogar, bienestar para tu familia",
    },
    benefits: {
      title: "Beneficios",
      benefits: [
        {
          icon: "Droplet",
          title: "Agua más limpia",
          description: "Elimina impurezas y contaminantes del agua",
        },
        {
          icon: "Heart",
          title: "Mejor salud",
          description:
            "Reduce el riesgo de enfermedades transmitidas por el agua",
        },
        {
          icon: "DollarSign",
          title: "Ahorro",
          description: "Reduce la necesidad de comprar agua embotellada",
        },
        {
          icon: "Leaf",
          title: "Ecológico",
          description: "Disminuye el uso de plástico de un solo uso",
        },
        {
          icon: "ShieldCheck",
          title: "Seguridad",
          description: "Protección contra bacterias y parásitos",
        },
        {
          icon: "Zap",
          title: "Mejor sabor",
          description: "Mejora el sabor y olor del agua",
        },
      ],
    },
    product: {
      name: "Purificador de Agua Premium",
      description:
        " Disfruta de agua pura y cristalina en tu hogar con nuestro purificador de última generación. Diseñado para ofrecerte la máxima calidad y seguridad en cada gota.",
      image: "/images/autum.png",
      features: [
        "Filtración avanzada de 7 etapas para una pureza total",
        "Elimina el 99.99% de contaminantes y bacterias",
        "Diseño compacto y elegante, fácil de integrar en tu hogar",
        "Fácil instalación y mantenimiento sin complicaciones",
        "Certificado por NSF International para tu tranquilidad",
        "Grifo de 2 vías incluido para un acceso conveniente",
        "¡Ahorra hasta 450€ al año! Con el purificador, elimina el gasto en agua para beber, cocinar y otros usos.",
      ],
    },
    process: {
      title: "Proceso de Purificación de Agua Autum",
      description:
        "Descubre cómo nuestro purificador de agua Autum transforma el agua del grifo en agua pura y saludable.",
      steps: [
        {
          title: "Filtración inicial",
          description:
            "El agua pasa por un filtro de sedimentos que elimina partículas grandes.",
          icon: "Droplet",
        },
        {
          title: "Purificación con carbón activado",
          description: "Elimina cloro, sabores y olores desagradables.",
          icon: "Zap",
        },
        {
          title: "Ósmosis inversa",
          description:
            "Elimina contaminantes microscópicos y minerales disueltos.",
          icon: "Repeat",
        },
        {
          title: "Remineralización",
          description: "Se añaden minerales beneficiosos al agua purificada.",
          icon: "Package",
        },
        {
          title: "Agua pura lista",
          description: "El agua está lista para beber, limpia y saludable.",
          icon: "Check",
        },
      ],
    },
  },
  {
    name: "ozonizador",
    aboutus: {
      title: "limpieza profunda y desinfección natural",
      description:
        "El ozonizador transforma el aire y el agua en una herramienta de limpieza natural, desinfectando superficies, eliminando olores y combatiendo bacterias, virus y moho, sin químicos. Ideal para hogares, oficinas y espacios comerciales, promoviendo un ambiente saludable.",
      image: "/images/frasco.png",
      background: "/images/planta.png",
      ticket: "Limpieza sin químicos, poder del ozono",
    },
    benefits: {
      title: "Beneficios",
      benefits: [
        {
          icon: "Wind",
          title: "Purificación Natural",
          description: "Desinfecta aire y agua sin químicos agresivos",
        },
        {
          icon: "ShieldCheck",
          title: "Elimina Virus y Bacterias",
          description: "Neutraliza microorganismos que afectan tu salud",
        },
        {
          icon: "Zap",
          title: "Elimina Olores",
          description: "Descompone olores de comida, humo, humedad y mascotas",
        },
        {
          icon: "Home",
          title: "Ambiente Saludable",
          description:
            "Reduce alérgenos y mejora la calidad del aire en tu hogar u oficina",
        },
        {
          icon: "DollarSign",
          title: "Ahorro Garantizado",
          description: "Menos gasto en productos de limpieza y purificadores",
        },
        {
          icon: "Leaf",
          title: "Ecológico y Sostenible",
          description: "Disminuye el uso de químicos y plásticos contaminantes",
        },
        {
          icon: "Cloud",
          title: "Aire Puro y Fresco",
          description:
            "Ideal para personas con alergias o problemas respiratorios",
        },
      ],
    },
    product: {
      name: "Autum Generador de Ozono",
      description:
        "Descubre el poder del ozono para una limpieza profunda y ecológica. El Autum Generador de Ozono desinfecta y purifica de forma natural, eliminando bacterias, virus y olores sin necesidad de químicos agresivos. Ideal para el hogar, oficina o cualquier espacio que requiera higiene impecable.",
      image: "/images/astr.png",
      features: [
        "Genera ozono para una desinfección profunda, eliminando bacterias y virus sin químicos",
        "Elimina la necesidad de comprar productos de limpieza, ahorrando entre 324€ y 480€ al año",
        "Funciona con agua fría o caliente (hasta 35°) para limpiar diversas superficies",
        "Diseño compacto y fácil de almacenar, ideal para cualquier hogar u oficina",
        "Bajo consumo energético (12V, 30W), eficiente y seguro de usar",
        "Presión de agua de 4.5 litros por minuto, perfecto para limpieza rápida y efectiva",
        "Ligero y portátil (solo 2.5 kg), fácil de mover y utilizar en cualquier espacio",
      ],
    },
    process: {
      title: "Proceso de Ozonización Astrom",
      description:
        "Conoce cómo nuestro ozonizador Astrom purifica el aire y el agua de manera eficiente y natural.",
      steps: [
        {
          title: "Entrada de aire",
          description: "El aire del ambiente entra en el dispositivo.",
          icon: "Droplet",
        },
        {
          title: "Generación de ozono",
          description:
            "El aire se convierte en ozono mediante descargas eléctricas.",
          icon: "Zap",
        },
        {
          title: "Dispersión",
          description: "El ozono se dispersa en el ambiente o en el agua.",
          icon: "Repeat",
        },
        {
          title: "Desinfección",
          description: "El ozono elimina bacterias, virus y olores.",
          icon: "Package",
        },
        {
          title: "Reconversión",
          description:
            "El ozono se convierte de nuevo en oxígeno después de su uso.",
          icon: "Check",
        },
      ],
    },
  },
];
