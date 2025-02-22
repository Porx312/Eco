import {
  Droplets,
  Truck,
  Factory,
  FlaskRoundIcon as Flask,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: <Droplets className="w-10 h-10 text-primary" />,
    title: "Purificación de Agua",
    description:
      "Utilizamos tecnología avanzada de filtración y purificación para garantizar agua de la más alta calidad.",
  },
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "Entrega a Domicilio",
    description:
      "Servicio de entrega puntual y conveniente directamente a su hogar u oficina.",
  },
  {
    icon: <Factory className="w-10 h-10 text-primary" />,
    title: "Plantas Embotelladoras",
    description:
      "Instalaciones modernas y certificadas para el embotellamiento seguro de agua mineral.",
  },
  {
    icon: <Flask className="w-10 h-10 text-primary" />,
    title: "Control de Calidad",
    description:
      "Rigurosos procesos de control y pruebas de laboratorio para garantizar la pureza del agua.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Certificaciones",
    description:
      "Cumplimos con los más altos estándares de calidad y seguridad en la industria del agua.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-primary" />,
    title: "Servicio al Cliente",
    description:
      "Atención personalizada y soporte dedicado para satisfacer todas sus necesidades.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Qué Hacemos</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Ofrecemos soluciones integrales de agua mineral de alta calidad para
            hogares y empresas, respaldadas por tecnología moderna y un servicio
            excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300 dark:bg-zinc-800/50"
            >
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-1 w-12 bg-primary/10 group-hover:w-full transition-all duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
