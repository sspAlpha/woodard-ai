"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, MapPin, Search, Instagram, Facebook, Linkedin } from "lucide-react"
import ImageMagnifier from "@/components/ImageMagnifier"
import type { Product } from "@/types/product"
import { getProducts } from "@/lib/products"

export default function SingleBenchPage() {

  const params = useParams()
const slug = params.name

  const product: Product | undefined = getProducts().find(p => p.name === slug)

  if (!product) {
    return <div className="p-4">Product not found</div>
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-100 py-4">
        <div className="mx-auto px-4 flex items-center justify-between">
          <button className="lg:hidden">
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </button>

          <div className="hidden lg:block text-sm text-gray-700">Benches | Residential</div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="font-serif text-3xl">
              Woodard
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/sign-in" className="text-sm hidden lg:block">
              Sign In
            </Link>
            <Link href="/contact" className="text-sm hidden lg:block">
              Contact
            </Link>
            <MapPin className="w-5 h-5" />
            <Search className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/products/benches" className="inline-flex items-center text-sm mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          BACK
        </Link>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <ImageMagnifier
              src={product.image}
              alt={product.displayName}
              width={500}
              height={400}
              magnifierHeight={400}
              magnifierWidth={400}
              zoomLevel={2.5}
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="font-serif text-3xl mb-4">{product.displayName}</h1>

            <div className="flex gap-4 mb-8 text-sm">
              <Link href="#" className="text-gray-600 underline">
                PDF Spec Sheet
              </Link>
              <span>|</span>
              <Link href="#" className="text-gray-600 underline">
                CAD Drawings
              </Link>
            </div>

            <div className="space-y-4 text-sm">
              <ProductDetail label="Model Number" value={product.productCode} />
              <ProductDetail label="Collection" value={product.collection} />
              <ProductDetail label="Material" value={product.material} />
              <ProductDetail label="Cushion Type" value={product.cushionType} />
              <ProductDetail label="Stackable" value={product.isStackable ? "Yes" : "No"} />
              <ProductDetail label="Price" value={`$${product.price}`} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function ProductDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex">
      <div className="w-32">{label}</div>
      <div>| {value}</div>
    </div>
  )
}