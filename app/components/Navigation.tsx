"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center group">
            <span className="text-lg font-semibold text-foreground tracking-tight">MSB</span>
            <div className="hidden sm:block ml-1 text-xs text-muted-foreground group-hover:text-accent transition-colors">
              Portfolio
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  pathname === href
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2 hover:bg-card/50 rounded-md transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border/50">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-3 text-sm font-medium transition-all duration-200 ${
                pathname === href
                  ? "text-accent bg-accent/10 border-l-2 border-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
