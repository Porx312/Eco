"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ContactButton from "../help/Contact";
interface Products {
  name: string;
  description: string;
  image: string;
  features: string[];
}
export const ProductShowcase = ({
  name,
  description,
  image,
  features,
}: Products) => {
  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={image}
              alt={name}
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Purificador de Agua Premium
            </h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              {description}
            </p>
            <ul className="mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center mb-3 text-gray-700 dark:text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Check className="mr-2 text-green-500" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ContactButton text="Lo Quiero!" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
