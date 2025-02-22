"use client";

import Image from "next/image";
import Header from "../Header";
import EcozonoCalculator from "../help/CalculadoraAhorro";
import { motion } from "framer-motion";
import ContactButton from "../help/Contact";

interface AboutUs {
  title: string;
  description: string;
  image: string;
  background: string;
  ticket: string;
}

export default function AboutUs({
  background,
  description,
  image,
  ticket,
  title,
}: AboutUs) {
  return (
    <div className="bg-background">
      <Header />
      <section className="relative bg-blue-300">
        <div className="absolute inset-0">
          <Image
            src={background || "/placeholder.svg"}
            alt="Background"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-24">
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-white/60 text-primary text-sm font-medium rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.1 }}
            >
              {ticket}
            </motion.span>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-lg text-zinc-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.2 }}
            >
              {description}
            </motion.p>
            <div className="flex flex-wrap gap-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.2 }}
              >
                <ContactButton text="Solicitar Demostracion" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.2 }}
              >
                <EcozonoCalculator />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-35 right-0 w-[500px] h-[500px] hidden md:block -mb-24 mr-[-100px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt="Water Bottles"
              width={380}
              height={380}
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>
    </div>
  );
}
