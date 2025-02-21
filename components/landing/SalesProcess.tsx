"use client"
import { motion } from "framer-motion"
import { Home, UserCheck, PenToolIcon as Tool, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactButton from "../help/Contact"

const steps = [
  {
    icon: Home,
    title: "Visita Gratuita",
    description:
      "Un agente visitará su hogar sin costo alguno para explicarle detalladamente nuestro producto y las opciones de pago disponibles.",
  },
  {
    icon: UserCheck,
    title: "Acuerdo Personalizado",
    description: "Trabajamos juntos para llegar a un acuerdo que se adapte a sus necesidades y presupuesto.",
  },
  {
    icon: Tool,
    title: "Instalación Profesional",
    description:
      "Una vez alcanzado el acuerdo, un técnico especializado realizará la instalación de su purificador CleanAura.",
  },
  {
    icon: ThumbsUp,
    title: "Disfrute de Agua Pura",
    description: "¡Comience a disfrutar de agua limpia y saludable directamente desde su grifo!",
  },
]

const SalesProcess = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nuestro Proceso de Venta</h2>
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
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
            ¿Listo para experimentar la diferencia de CleanAura? ¡Programe su visita gratuita hoy mismo!
          </p>
         <ContactButton/>
        </motion.div>
      </div>
    </section>
  )
}

export default SalesProcess

