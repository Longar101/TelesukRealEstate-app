import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faRulerCombined, faTag } from '@fortawesome/free-solid-svg-icons'

const listings = [
  {
    id: 1,
    title: "Modern Downtown Apartment with City Views",
    type: "For Rent",
    price: "$2,800/mo",
    beds: 2,
    baths: 2,
    area: "1,200 sq ft",
    featured: true,
    image: "https://source.unsplash.com/featured/?apartment"
  },
  {
    id: 2,
    title: "Luxury Waterfront Condo",
    type: "For Sale",
    price: "$850,000",
    beds: 2,
    baths: 2,
    area: "1,500 sq ft",
    image: "https://source.unsplash.com/featured/?condo"
  },
  {
    id: 3,
    title: "Executive Penthouse Suite",
    type: "For Sale",
    price: "$1,200,000",
    beds: 3,
    baths: 3,
    area: "2,500 sq ft",
    featured: true,
    image: "https://source.unsplash.com/featured/?penthouse"
  },
  {
    id: 4,
    title: "Cozy Studio Apartment",
    type: "For Rent",
    price: "$1,200/mo",
    beds: 1,
    baths: 1,
    area: "600 sq ft",
    image: "https://source.unsplash.com/featured/?studio"
  }
]

function Advert() {
  return (
    <section className="bg-gray-50 min-h-screen py-10 px-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Latest Adverts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map(({ id, title, type, price, beds, baths, area, featured, image }) => (
          <div
            key={id}
            className={`bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden border ${
              featured ? 'border-blue-800' : 'border-gray-200'
            }`}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <span className={`text-xs px-2 py-1 rounded ${
                  type === 'For Sale' ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-800'
                }`}>
                  {type}
                </span>
              </div>

              <p className="text-xl font-bold text-blue-800 mb-3">{price}</p>

              <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faBed} /> {beds} bd
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faBath} /> {baths} ba
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faRulerCombined} /> {area}
                </span>
              </div>

              {featured && (
                <div className="text-xs text-white bg-blue-800 px-2 py-1 rounded inline-block">
                  <FontAwesomeIcon icon={faTag} className="mr-1" />
                  Featured
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default  Advert;
