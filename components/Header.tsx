import { Moon, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ContactButton } from "./help/ContactButton"

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 py-1 bg-background/80 backdrop-blur-sm">
    <div className="container mx-auto px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Aquato Logo"
            width={80}
            height={80}
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
        <Link href="#" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/ozonizador" className="text-sm font-medium hover:text-primary">
           Ozono
          </Link>
          <Link href="/purificador" className="text-sm font-medium hover:text-primary">
            Purificador de Agua
          </Link>
         
        </nav>

        <div className="flex items-center gap-4">
         <ContactButton/>
      
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
