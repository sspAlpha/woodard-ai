import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ResidentialSection() {
  return (
    <section className="bg-stone-100 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col justify-center space-y-6 p-12">
          <h2 className="text-3xl font-serif text-stone-900 my-9">Residential</h2>

          <div className="space-y-4 text-stone-800">
            <p className="text-sm leading-7">
              For over 150 years, Woodard has been the industry leader in classic American outdoor furniture design and
              manufacturing. From modern to traditional, Woodard continues to set the standard for luxury leisure
              furnishings for every type of exterior environment. Woodard furniture is hand-crafted from start to finish
              in America and built to last for generations — so much so that there is a sought-after collectible market
              for Woodard originals.
            </p>

            <p className="text-sm leading-7">
              Woodard residential furniture is built to endure rigorous use and withstand the elements. Along with
              countless discerning residences throughout the country, Woodard furniture has been selected as the outdoor
              furniture of choice everywhere from The White House to The Smithsonian to the finest hotels and resorts
              nationwide for our quintessential American style.
            </p>

            <p className="text-sm leading-7">
              Woodard outdoor furniture is available through fine retailers and showrooms nationwide as well as through
              design trade professionals.
            </p>
          </div>

          <div className="pt-4 space-y-3">
            <Link
              href="/collections/residential"
              className="flex items-center text-sm font-medium uppercase tracking-wide text-stone-900 hover:text-stone-700 transition-colors"
            >
              Browse Residential Collections
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/where-to-buy"
              className="flex items-center text-sm font-medium uppercase tracking-wide text-stone-900 hover:text-stone-700 transition-colors"
            >
              Where to Buy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center pt-24 pr-6 pb-3 pl-12">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src="/patio.jpg"
              alt="Woodard outdoor furniture set with navy blue umbrella and chairs on a wooden deck"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

