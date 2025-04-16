"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const images = [
  {
    id: 1,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Gallery image 1",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Gallery image 2",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Gallery image 3",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Gallery image 4",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Gallery image 5",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Gallery image 6",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-64 md:h-80 object-cover hover:brightness-90 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

