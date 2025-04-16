import Navbar from "@/components/navbar"
import HeroSlider from "@/components/hero-slider"
import MusicPlayer from "@/components/music-player"
import Discography from "@/components/discography"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f2]">
      <Navbar />
      <HeroSlider />
      <div className="container mx-auto px-4 py-16 space-y-24">
        <section id="music" className="pt-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center mb-12">LATEST RELEASES</h2>
          <MusicPlayer />
          <Discography />
        </section>

        <section id="gallery" className="pt-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center mb-12">GALLERY</h2>
          <Gallery />
        </section>

        <section id="connection" className="pt-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center mb-12">WHY I CONNECT</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed mb-6">
              Lana Del Rey's music has been a constant companion through the highs and lows of my life. Her hauntingly
              beautiful melodies and poetic lyrics create a nostalgic dreamscape that resonates deeply with my own
              experiences.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Her ability to blend vintage aesthetics with modern sensibilities mirrors my own appreciation for timeless
              beauty. The raw vulnerability in her songwriting has helped me process my own emotions during difficult
              times.
            </p>
            <p className="text-lg leading-relaxed">
              From the melancholic tones of "Born to Die" to the introspective journey of "Norman Fucking Rockwell!",
              Lana's artistic evolution has paralleled my own growth and self-discovery. Her music isn't just something
              I listen to—it's become part of who I am.
            </p>
          </div>
        </section>

        <section id="contact" className="pt-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center mb-12">CONTACT</h2>
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  )
}

