"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl md:text-3xl font-light tracking-widest">
              LANA DEL REY
            </Link>

            <div className="hidden md:flex space-x-8">
              <NavLink href="#" label="HOME" />
              <NavLink href="#music" label="MUSIC" />
              <NavLink href="#gallery" label="GALLERY" />
              <NavLink href="#tour" label="TOUR" />
              <NavLink href="#contact" label="CONTACT" />
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-gray-800" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center space-y-8 flex-1">
              <MobileNavLink href="#" label="HOME" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="#music" label="MUSIC" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="#gallery" label="GALLERY" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="#tour" label="TOUR" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="#contact" label="CONTACT" onClick={() => setMobileMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-sm tracking-widest hover:text-gray-600 relative group">
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full duration-300"></span>
    </Link>
  )
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} className="text-xl tracking-widest" onClick={onClick}>
      {label}
    </Link>
  )
}

