import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">CleanAura</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Agua pura y cristalina directamente en tu hogar. Descubre la diferencia de CleanAura.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone size={16} className="mr-2" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail size={16} className="mr-2" /> info@cleanaura.com
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin size={16} className="mr-2" /> 123 Purifica St., Aguaville, AC 12345
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Boletín Informativo</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Suscríbete para recibir noticias y ofertas especiales.
            </p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Tu correo electrónico" className="bg-white dark:bg-gray-800" />
              <Button type="submit" className="bg-primary text-white hover:bg-primary-dark">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} CleanAura. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

