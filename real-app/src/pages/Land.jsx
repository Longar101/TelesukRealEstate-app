import React, { useState } from 'react'

const premiumListings = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: "$450,000",
    tags: ["For Sale", "Featured"],
    area: "2,500 sq ft",
    image: "https://source.unsplash.com/featured/?apartment"
  },
  {
    id: 2,
    title: "Luxury Waterfront Condo",
    price: "$850,000",
    tags: ["For Sale", "Featured"],
    area: "3,000 sq ft",
    image: "https://source.unsplash.com/featured/?condo"
  },
  {
    id: 3,
    title: "Executive Penthouse Suite",
    price: "$1,200,000",
    tags: ["For Sale", "Featured"],
    area: "4,200 sq ft",
    image: "https://source.unsplash.com/featured/?penthouse"
  },
  {
    id: 4,
    title: "Skyline Loft Apartment",
    price: "$620,000",
    tags: ["For Sale"],
    area: "2,800 sq ft",
    image: "https://source.unsplash.com/featured/?loft"
  },
  {
    id: 5,
    title: "Beachside Villa",
    price: "$980,000",
    tags: ["For Sale", "Featured"],
    area: "3,500 sq ft",
    image: "https://source.unsplash.com/featured/?villa"
  },
  {
    id: 6,
    title: "Urban Smart Condo",
    price: "$520,000",
    tags: ["For Sale"],
    area: "2,200 sq ft",
    image: "https://source.unsplash.com/featured/?smart-home"
  }
]

export default function Land() {
  const [showMore, setShowMore] = useState(false)

  const visibleListings = showMore ? premiumListings : premiumListings.slice(0, 3)

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Discover Premium Properties</h1>
        <h3 className='text-4xl font-bold text-blue-800 mb-2'>welcome to premium plots catalog</h3>
        <p className="text-gray-600 text-lg">Explore a handpicked selection of luxury properties in prime locations.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleListings.map(({ id, title, price, tags, area, image }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500 group"
          >
            <div className="overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
              <p className="text-blue-700 text-lg font-semibold mb-2">{price}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600">
                <strong>Area:</strong> {area}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          {showMore ? "Show Less" : "View More"}
        </button>
      </div>
    </section>
  )
}
