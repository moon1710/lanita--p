import type React from "react"
import Link from "next/link"
import { Instagram, Twitter, Youtube, Facebook, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Link href="/" className="text-2xl font-light tracking-widest mb-6">
            LANA DEL REY
          </Link>

          <div className="flex space-x-6 mb-8">
            <SocialLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
            <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            <SocialLink href="https://youtube.com" icon={<Youtube className="h-5 w-5" />} label="YouTube" />
            <SocialLink href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
            <SocialLink href="https://spotify.com" icon={<Music className="h-5 w-5" />} label="Spotify" />
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-sm">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:underline">
              Accessibility
            </Link>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>Subscribe to the newsletter for exclusive updates and content</p>
            <div className="flex justify-center mt-4">
              <div className="relative max-w-md w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 pr-20 border border-gray-300 focus:outline-none focus:border-black"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-black text-white px-4 text-sm">SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Lana Del Rey. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-black transition-colors" aria-label={label}>
      {icon}
    </Link>
  )
}

