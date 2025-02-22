"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "¿Cómo funciona el purificador de agua CleanAura?",
    answer:
      "CleanAura utiliza un sistema de filtración avanzado de 5 etapas que incluye carbón activado, ósmosis inversa y luz UV. Este proceso elimina eficazmente contaminantes, bacterias y virus, proporcionando agua limpia y segura para beber.",
  },
  {
    question: "¿Con qué frecuencia debo cambiar los filtros?",
    answer:
      "La frecuencia de cambio de filtros depende del uso y la calidad del agua de entrada. En general, recomendamos cambiar los filtros cada 6-12 meses. El sistema CleanAura tiene un indicador que le avisará cuando sea necesario cambiar los filtros.",
  },
  {
    question: "¿Es difícil instalar el purificador CleanAura?",
    answer:
      "No, CleanAura está diseñado para una fácil instalación. La mayoría de los usuarios pueden instalarlo en menos de una hora siguiendo nuestras instrucciones detalladas. Sin embargo, también ofrecemos servicios de instalación profesional si lo prefiere.",
  },
  {
    question: "¿CleanAura elimina los minerales beneficiosos del agua?",
    answer:
      "Aunque CleanAura elimina contaminantes dañinos, nuestro sistema de remineralización añade de nuevo minerales beneficiosos como calcio y magnesio al agua purificada, asegurando un sabor óptimo y beneficios para la salud.",
  },
  {
    question: "¿Cuánto cuesta mantener un purificador CleanAura?",
    answer:
      "El costo de mantenimiento es mínimo comparado con la compra de agua embotellada. Los filtros de reemplazo cuestan aproximadamente $50-$100 al año, dependiendo de la calidad del agua y el uso.",
  },
  {
    question: "¿CleanAura funciona con agua de pozo?",
    answer:
      "Sí, CleanAura es eficaz tanto con agua del grifo como con agua de pozo. Sin embargo, para agua de pozo, recomendamos realizar un análisis previo para asegurarnos de que nuestro sistema estándar sea suficiente o si se necesita algún pre-tratamiento adicional.",
  },
];
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}
const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <motion.div
      className="border-b border-gray-200 dark:border-gray-700"
      initial={false}
    >
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-4 text-gray-700 dark:text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((currentOpenItems) =>
      currentOpenItems.includes(index)
        ? currentOpenItems.filter((item) => item !== index)
        : [...currentOpenItems, index],
    );
  };

  const toggleAll = () => {
    setOpenItems((currentOpenItems) =>
      currentOpenItems.length === faqs.length
        ? []
        : faqs.map((_, index) => index),
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          FAQ’s ¿Tienes alguna duda?
        </h2>
        <div className="max-w-3xl mx-auto">
          <Button onClick={toggleAll} className="mb-6" variant="outline">
            {openItems.length === faqs.length
              ? "Colapsar Todo"
              : "Expandir Todo"}
          </Button>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
