"use client";
import { motion } from "framer-motion";
import { Eye, FileSearch, Handshake, Wrench } from "lucide-react";
import ContactButton from "../help/Contact";
const steps = [
  {
    icon: Eye,
    title: "Demostración Personalizada",
    description:
      "Un especialista te mostrará en vivo cómo funciona nuestro ozonizador y los beneficios que puede aportar a tu hogar o negocio.",
  },
  {
    icon: FileSearch,
    title: "Análisis de tu Caso",
    description:
      "Evaluamos tu espacio y necesidades para ofrecerte la mejor solución adaptada a ti.",
  },
  {
    icon: Handshake,
    title: "Opciones de Adquisición",
    description:
      "Te ayudamos a encontrar la mejor forma para ti, ya sea compra directa o financiamiento.",
  },
  {
    icon: Wrench,
    title: "Instalación Profesional",
    description:
      "Un técnico especializado visitará tu domicilio para realizar la instalación y garantizar un óptimo funcionamiento.",
  },
];

const SalesProcess = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Nuestro Proceso de Demostracion
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <step.icon className="w-12 h-12 mx-auto mb-4 text-sky-300" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            ¡Agenda tu demostración gratuita ahora!
          </p>
          <ContactButton text="Solicitar demostración" />
        </motion.div>
      </div>
    </section>
  );
};

export default SalesProcess;
