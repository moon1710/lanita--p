"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=1080&width=1920",
    title: "NEW ALBUM",
    subtitle: "Out Now",
    cta: "Listen Now",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=1080&width=1920",
    title: "WORLD TOUR",
    subtitle: "Starting June 2025",
    cta: "Get Tickets",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=1080&width=1920",
    title: "EXCLUSIVE MERCH",
    subtitle: "Limited Edition Collection",
    cta: "Shop Now",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white space-y-6 px-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl font-light tracking-wider">{slides[currentSlide].subtitle}</p>
              <button className="mt-4 px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-300 tracking-wider text-sm">
                {slides[currentSlide].cta}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

