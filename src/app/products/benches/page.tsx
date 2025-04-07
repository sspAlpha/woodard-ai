"use client"

import { Menu, MapPin, Search } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import ProductGrid from "@/components/ProductGrid"
import FilterBar from "@/components/FilterBar"
import type { Product } from "@/types/product"
import { getProducts } from "@/lib/products"

export default function BenchesPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState({
    collection: "",
    productType: "",
    material: "",
    cushionType: "",
  })
  const [sortBy, setSortBy] = useState("Product Type")

  useEffect(() => {
    // In a real app, this would be a fetch from an API
    const fetchedProducts = getProducts()
    setProducts(fetchedProducts)
    setFilteredProducts(fetchedProducts)
  }, [])

  useEffect(() => {
    let result = [...products]

    // Apply filters
    if (filters.collection) {
      result = result.filter((product) => product.collection.toLowerCase().includes(filters.collection.toLowerCase()))
    }

    if (filters.productType) {
      result = result.filter((product) => product.type.toLowerCase().includes(filters.productType.toLowerCase()))
    }

    if (filters.material) {
      result = result.filter((product) => product.material.toLowerCase().includes(filters.material.toLowerCase()))
    }

    if (filters.cushionType) {
      result = result.filter((product) => product.cushionType.toLowerCase().includes(filters.cushionType.toLowerCase()))
    }

    // Apply sorting
    if (sortBy === "Product Type") {
      result.sort((a, b) => a.type.localeCompare(b.type))
    } else if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "Name: A-Z") {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }

    setFilteredProducts(result)
  }, [products, filters, sortBy])

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
  }

  return (
    <>
      <header className="w-full py-6 px-8 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-40">
            <button className="text-grey-900" aria-label="Menu">
              <Menu size={24} />
            </button>
            <Link href="/residential" className="text-grey-900 text-lg font-serif">
              Benches
            </Link>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-grey-900 text-3xl font-serif italic">
              Woodard
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <Link href="/sign-in" className="text-grey-900 text-sm">
                Sign In
              </Link>
              <Link href="/contact" className="text-grey-900 text-sm">
                Contact
              </Link>
            </div>
            <button className="text-grey-900" aria-label="Location">
              <MapPin size={20} />
            </button>
            <button className="text-grey-900" aria-label="Search">
              <Search size={20} />
            </button>
          </div>
        </header>

        <FilterBar onFilterChange={handleFilterChange} onSortChange={handleSortChange} sortBy={sortBy} />

        <div className="container mx-auto py-4">
          <ProductGrid products={filteredProducts} />
        </div>
    </>
  )
}

