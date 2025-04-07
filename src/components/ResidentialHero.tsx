import Link from "next/link"
import Image from "next/image"
import { Menu, MapPin, Search } from "lucide-react"

export default function ResidentialHero() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/furniture.jpg"
          alt="Luxury outdoor furniture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Navigation Bar */}
        <header className="w-full py-6 px-8 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-12">
            <button className="text-white" aria-label="Menu">
              <Menu size={24} />
            </button>
            <Link href="/residential" className="text-white text-lg font-serif">
              Residential
            </Link>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-white text-3xl font-serif">
              Woodard
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <Link href="/sign-in" className="text-white text-sm">
                Sign In
              </Link>
              <Link href="/contact" className="text-white text-sm">
                Contact
              </Link>
            </div>
            <button className="text-white" aria-label="Location">
              <MapPin size={20} />
            </button>
            <button className="text-white" aria-label="Search">
              <Search size={20} />
            </button>
          </div>
        </header>

        {/* Main Content Area - Empty in this case as the image is the focus */}
        <main className="flex-grow"></main>

        {/* Footer Navigation */}
        <footer className="w-full py-6 px-8 flex justify-center">
          <nav className="flex items-center gap-4 text-white font-serif">
            <Link href="/collections" className="hover:underline">
              Collections
            </Link>
            <span className="mx-1">—</span>
            <Link href="/where-to-buy" className="hover:underline">
              Where to Buy
            </Link>
            <span className="mx-1">—</span>
            <Link href="/catalog" className="hover:underline">
              Catalog
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}

