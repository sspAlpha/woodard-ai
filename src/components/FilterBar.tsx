"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FilterBarProps {
  onFilterChange: (filterType: string, value: string) => void
  onSortChange: (value: string) => void
  sortBy: string
}

export default function FilterBar({ onFilterChange, onSortChange, sortBy }: FilterBarProps) {
  const [openFilter, setOpenFilter] = useState<string | null>(null)

  const filters = [
    {
      id: "collection",
      label: "COLLECTION",
      options: [
        "Casa",
        "New Century",
        "Colfax",
        "Delmar",
        "Tuoro",
        "Windsor",
        "Sheffield",
        "Reunion",
        "Cortland",
        "Wiltshire",
      ],
    },
    {
      id: "productType",
      label: "PRODUCT TYPE",
      options: ["Bench", "Stacking Bench", "Armless Bench", "Backless Bench", "Curved Bench"],
    },
    {
      id: "material",
      label: "MATERIAL",
      options: ["Aluminum", "Wrought Iron", "Teak", "Wicker", "Steel"],
    },
    {
      id: "cushionType",
      label: "CUSHION TYPE",
      options: ["Optional Seat Cushion", "Included Cushion", "No Cushion"],
    },
  ]

  const sortOptions = ["Product Type", "Price: Low to High", "Price: High to Low", "Name: A-Z"]

  const toggleFilter = (filterId: string) => {
    if (openFilter === filterId) {
      setOpenFilter(null)
    } else {
      setOpenFilter(filterId)
    }
  }

  return (
    <div className="bg-gray-200 py-10">
      <div className="px-8 mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Filter section */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="px-4 py-1 filter-label text-gray-700 font-serif">FILTER BY</div>
            <div className="flex flex-wrap">
              {filters.map((filter) => (
                <div key={filter.id} className="relative px-4 py-1">
                  <button
                    className="flex items-center text-xs font-medium text-gray-700"
                    onClick={() => toggleFilter(filter.id)}
                  >
                    {filter.label}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </button>

                  {openFilter === filter.id && (
                    <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg z-10 border border-gray-200">
                      {filter.options.map((option) => (
                        <button
                          key={option}
                          className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            onFilterChange(filter.id, option)
                            setOpenFilter(null)
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sort section */}
          <div className="px-4 py-1 flex items-center">
            <span className="text-xs filter-label text-gray-700 mr-2">SORT BY</span>
            <div className="relative">
              <button
                className="flex items-center text-xs font-medium text-gray-700 border border-gray-300 px-3 py-1 bg-white"
                onClick={() => toggleFilter("sort")}
              >
                {sortBy}
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>

              {openFilter === "sort" && (
                <div className="absolute right-0 mt-1 w-48 bg-white shadow-lg z-10 border border-gray-200">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        onSortChange(option)
                        setOpenFilter(null)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}