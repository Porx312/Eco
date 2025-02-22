"use client";

import { FC } from "react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
  icon: string;
}

interface ProcessTimelineProps {
  title: string;
  description: string;
  steps: Step[];
}

const ProcessTimeline: FC<ProcessTimelineProps> = ({
  title,
  description,
  steps,
}) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-xl text-gray-600">{description}</p>
        </motion.div>
        <div className="relative">
          {steps.map((step, index) => {
            const Icon =
              (LucideIcons[
                step.icon as keyof typeof LucideIcons
              ] as React.ElementType) || LucideIcons.HelpCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pb-12 flex items-start"
              >
                {index !== steps.length - 1 && (
                  <motion.span
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute top-5 left-5 -ml-px w-0.5 bg-gradient-to-b from-sky-400 to-sky-600"
                    aria-hidden="true"
                  />
                )}
                <div className="relative flex-shrink-0 mr-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="h-10 w-10 bg-gradient-to-br from-sky-200 to-sky-400 rounded-full flex items-center justify-center ring-8 ring-white shadow-lg"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
