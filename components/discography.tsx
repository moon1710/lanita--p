"use client"

import { motion } from "framer-motion"

const albums = [
  {
    id: 1,
    title: "Born To Die",
    year: "2012",
    cover: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 2,
    title: "Ultraviolence",
    year: "2014",
    cover: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 3,
    title: "Honeymoon",
    year: "2015",
    cover: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 4,
    title: "Lust for Life",
    year: "2017",
    cover: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 5,
    title: "Norman Fucking Rockwell!",
    year: "2019",
    cover: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 6,
    title: "Chemtrails Over the Country Club",
    year: "2021",
    cover: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 7,
    title: "Blue Banisters",
    year: "2021",
    cover: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 8,
    title: "Did You Know That There's a Tunnel Under Ocean Blvd",
    year: "2023",
    cover: "/placeholder.svg?height=500&width=500",
  },
]

export default function Discography() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {albums.map((album, index) => (
          <AlbumCard key={album.id} album={album} index={index} />
        ))}
      </div>
    </div>
  )
}

function AlbumCard({ album, index }: { album: (typeof albums)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden rounded-md shadow-md">
        <div className="relative">
          <img
            src={album.cover || "/placeholder.svg"}
            alt={`${album.title} album cover`}
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button className="bg-white text-black px-4 py-2 rounded-sm text-sm tracking-wider">LISTEN</button>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <h3 className="font-medium tracking-wide">{album.title}</h3>
        <p className="text-gray-600 text-sm">{album.year}</p>
      </div>
    </motion.div>
  )
}

