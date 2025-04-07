import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <Link href={`/products/benches/${product.name}`} className="group w-full flex flex-col items-center">
              <div className="product-image-container">
                <Image
                  src={product.image || "https://www.woodard-furniture.com/media/catalog/product/cache/59ad28a0470972c014f7fb8dad2a2397/c/a/casa_3y0404.jpg"}
                  alt={product.displayName}
                  width={180}
                  height={180}
                  className="product-image"
                />
              </div>
              <div className="text-center">
                <h3 className="product-name text-gray-900">{product.displayName}</h3>
                <p className="product-code">{product.productCode}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}