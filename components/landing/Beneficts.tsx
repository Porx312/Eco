"use client";

import type React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface Benefit {
  icon: string; // Change this to string
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title: string;
  benefits: Benefit[];
}

const BenefitCard: React.FC<Benefit> = ({ icon, title, description }) => {
  // Dynamically get the icon component
  const Icon =
    (LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType) ||
    LucideIcons.HelpCircle;

  return (
    <motion.div
      className="bg-white flex-1 md:w-[200px] dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-12 h-12 text-primary mb-4 text-sky-300" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  benefits,
}) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-gray-700 font-bold text-center mb-12">
          {title}
        </h2>
        <div className="flex flex-wrap gap-2 justify-between">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
