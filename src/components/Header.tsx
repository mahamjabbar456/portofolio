import Link from "next/link"
import { Button } from "./ui/button"

// components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 px-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="./">
           <h1 className="text-3xl md:text-4xl font-bold">
            Maham <span className="text-mainAccent-hover">Jabbar</span></h1>
        </Link>
        {/* Desktop Nav and hire me button */}
        <div className="hidden lg:flex items-center gap-8">
        <Nav/>
        <Link href="https://www.linkedin.com/in/maham-jabbar-976229294/" target="_blank">
        <Button>Hire Me</Button>
        </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
            <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
