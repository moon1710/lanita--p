"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const tourDates = [
  {
    id: 1,
    date: "June 15, 2025",
    venue: "Madison Square Garden",
    location: "New York, NY",
    status: "On Sale",
  },
  {
    id: 2,
    date: "June 18, 2025",
    venue: "TD Garden",
    location: "Boston, MA",
    status: "On Sale",
  },
  {
    id: 3,
    date: "June 22, 2025",
    venue: "Scotiabank Arena",
    location: "Toronto, ON",
    status: "On Sale",
  },
  {
    id: 4,
    date: "June 25, 2025",
    venue: "United Center",
    location: "Chicago, IL",
    status: "On Sale",
  },
  {
    id: 5,
    date: "July 2, 2025",
    venue: "Crypto.com Arena",
    location: "Los Angeles, CA",
    status: "Sold Out",
  },
  {
    id: 6,
    date: "July 5, 2025",
    venue: "Climate Pledge Arena",
    location: "Seattle, WA",
    status: "On Sale",
  },
]

export default function Tour() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {tourDates.map((tour, index) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full flex-shrink-0">
                  <Calendar className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium">{tour.venue}</h3>
                  <p className="text-gray-600 text-sm">{tour.location}</p>
                  <p className="text-gray-500 text-sm mt-1">{tour.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:flex-col md:items-end">
                <div
                  className={`text-sm px-3 py-1 rounded-full ${
                    tour.status === "Sold Out" ? "bg-gray-100 text-gray-700" : "bg-black text-white"
                  }`}
                >
                  {tour.status}
                </div>

                <button
                  className={`px-4 py-2 border border-black text-sm tracking-wider transition-colors ${
                    tour.status === "Sold Out"
                      ? "bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed"
                      : "hover:bg-black hover:text-white"
                  }`}
                  disabled={tour.status === "Sold Out"}
                >
                  {tour.status === "Sold Out" ? "SOLD OUT" : "GET TICKETS"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

