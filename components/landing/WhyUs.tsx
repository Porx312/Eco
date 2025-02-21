'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, DollarSign, Clock, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const WhyUs = () => {
  const comparisons = [
    {
      title: "vs. Agua Embotellada",
      icon: DollarSign,
      description: "Ahorra hasta $500 al año",
      detail: "CleanAura elimina la necesidad de comprar agua embotellada, ahorrándote dinero y reduciendo el plástico."
    },
    {
      title: "vs. Filtros de Baja Calidad",
      icon: Clock,
      description: "Mayor durabilidad y eficacia",
      detail: "Nuestros filtros duran hasta 3 veces más y eliminan más contaminantes que los filtros convencionales."
    }
  ];

  const successStories = [
    {
      title: "Estudio de Calidad del Agua",
      description: "Un estudio independiente demostró que CleanAura elimina el 99.99% de los contaminantes comunes."
    },
    {
      title: "Testimonio de Cliente",
      description: "\"Desde que instalamos CleanAura, la calidad de nuestra agua mejoró notablemente. ¡Ya no compramos agua embotellada!\" - María G."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">¿Por qué elegirnos?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {comparisons.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <item.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-lg font-medium mb-2">{item.description}</p>
              <p className="text-gray-600 dark:text-gray-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>

      {/*   <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Casos de Éxito</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-2">{story.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div> */}

      {/*   <motion.div 
          className="bg-primary text-white p-8 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Garantía de Satisfacción del 100%</h3>
          <p className="mb-6">
            Estamos tan seguros de la calidad de CleanAura que ofrecemos una garantía de devolución de 30 días. 
            Si no estás completamente satisfecho, te devolvemos tu dinero sin hacer preguntas.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Ver Detalles de la Garantía
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};

