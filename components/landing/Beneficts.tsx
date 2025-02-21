"use client"
import { motion } from "framer-motion"
import { Droplet, Heart, DollarSign, Leaf, ShieldCheck, Zap } from "lucide-react"

const benefits = [
  { icon: Droplet, title: "Agua más limpia", description: "Elimina impurezas y contaminantes del agua" },
  { icon: Heart, title: "Mejor salud", description: "Reduce el riesgo de enfermedades transmitidas por el agua" },
  { icon: DollarSign, title: "Ahorro", description: "Reduce la necesidad de comprar agua embotellada" },
  { icon: Leaf, title: "Ecológico", description: "Disminuye el uso de plástico de un solo uso" },
  { icon: ShieldCheck, title: "Seguridad", description: "Protección contra bacterias y parásitos" },
  { icon: Zap, title: "Mejor sabor", description: "Mejora el sabor y olor del agua" },
]

interface BenefitCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white w-[170px] md:w-[200px] dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
)

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-gray-700 font-bold text-center mb-12">Beneficios de tener un purificador de agua en casa</h2>
        <div className="flex flex-wrap gap-2 justify-between">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

