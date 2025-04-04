import Link from "next/link"

type FooterProps = {
  variant: 'light' | 'dark'
}
export default function Footer({variant}: FooterProps) {
  return (
    <footer className={`${variant == 'dark' ? 'bg-[#4A4A4A] text-white' : 'bg-gray-100 text-gray-700'} text-sm`}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1 */}
          <div className="md:col-span-3 space-y-2">
            <Link href="/our-story" className="block hover:text-gray-300">
              Our Story
            </Link>
            <Link href="/showroom" className="block hover:text-gray-300">
              Showroom
            </Link>
            <Link href="/contact" className="block hover:text-gray-300">
              Contact
            </Link>
            <Link href="/where-to-buy" className="block hover:text-gray-300">
              Where to Buy
            </Link>
          </div>

          {/* Column 2 */}
          <div className="md:col-span-3 space-y-2">
            <Link href="/care-maintenance" className="block hover:text-gray-300">
              Care & Maintenance
            </Link>
            <Link href="/warranty" className="block hover:text-gray-300">
              Warranty
            </Link>
            <Link href="/careers" className="block hover:text-gray-300">
              Careers
            </Link>
            <Link href="/trade-portal" className="block hover:text-gray-300">
              Trade Portal
            </Link>
          </div>

          {/* Column 3 */}
          <div className="md:col-span-3 space-y-2">
            <Link href="/retail-rep-finder" className="block hover:text-gray-300">
              Retail Rep Finder
            </Link>
            <Link href="/contract-rep-finder" className="block hover:text-gray-300">
              Contract Rep Finder
            </Link>
            <Link href="/dealer-sign-in" className="block hover:text-gray-300">
              Dealer Sign In
            </Link>
            <Link href="/catalogs" className="block hover:text-gray-300">
              Catalogs
            </Link>
          </div>

          {/* Column 4 */}
          <div className="md:col-span-3 space-y-3">
            <Link href="tel:8008772290" className="block hover:text-gray-300">
              800.877.2290
            </Link>
            <div className="flex space-x-2">
              <Link
                href="https://instagram.com/woodardfurniture"
                aria-label="Instagram"
                className="hover:text-gray-300"
              >
                <div className="w-5 h-5 rounded-full border border-gray-700 flex items-center justify-center">
                  <span className="text-xs">@</span>
                </div>
              </Link>
              <Link href="https://facebook.com/woodardfurniture" aria-label="Facebook" className="hover:text-gray-300">
                <div className="w-5 h-5 rounded-full border border-gray-700 flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
              </Link>
              <Link
                href="https://linkedin.com/company/woodardfurniture"
                aria-label="LinkedIn"
                className="hover:text-gray-300"
              >
                <div className="w-5 h-5 rounded-full border border-gray-700 flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 text-gray-500 mt-4">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <p className="text-xs text-gray-400">
            © 2023 Woodard Furniture |
            <Link href="/terms" className="text-gray-400 hover:text-white ml-1">
              Terms & Conditions
            </Link>{" "}
            |
            <Link href="/privacy" className="text-gray-400 hover:text-white ml-1">
              Privacy Policy
            </Link>{" "}
            |<span className="ml-1">Site protected by reCAPTCHA. Google Privacy and Terms apply.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

