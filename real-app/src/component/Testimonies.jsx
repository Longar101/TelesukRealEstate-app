import React from 'react'

const clients = [
  {
    id: 1,
    title: "Client",
    name: "Sarah Johnson",
    location: "Juba, South Sudan",
    comment: "Telesuk helped me find my dream home with ease and professionalism.",
    image: "https://source.unsplash.com/featured/?woman,portrait"
  },
  {
    id: 2,
    title: "Client",
    name: "Michael Deng",
    location: "Wau, South Sudan",
    comment: "Their platform is intuitive and the agents are very responsive.",
    image: "https://source.unsplash.com/featured/?man,portrait"
  },
  {
    id: 3,
    title: "Client",
    name: "Amina Lado",
    location: "Malakal, South Sudan",
    comment: "I was impressed by the speed and clarity of the service.",
    image: "https://source.unsplash.com/featured/?woman,smile"
  },
  {
    id: 4,
    title: "Client",
    name: "John Garang",
    location: "Bor, South Sudan",
    comment: "Reliable and trustworthy—highly recommended.",
    image: "https://source.unsplash.com/featured/?man,smile"
  },
  {
    id: 5,
    title: "Client",
    name: "Grace Ayen",
    location: "Yei, South Sudan",
    comment: "The listings were accurate and the support was excellent.",
    image: "https://source.unsplash.com/featured/?woman,realestate"
  },
  {
    id: 6,
    title: "Client",
    name: "Peter Lok",
    location: "Torit, South Sudan",
    comment: "Smooth experience from start to finish.",
    image: "https://source.unsplash.com/featured/?man,home"
  }
]

const employees = [
  {
    id: 1,
    title: "Employee",
    name: "James Okello",
    location: "Juba HQ",
    comment: "Working at Telesuk has been a rewarding journey of growth.",
    image: "https://source.unsplash.com/featured/?man,professional"
  },
  {
    id: 2,
    title: "Employee",
    name: "Lilian Nyibol",
    location: "Wau Branch",
    comment: "The team culture here is collaborative and inspiring.",
    image: "https://source.unsplash.com/featured/?woman,office"
  },
  {
    id: 3,
    title: "Employee",
    name: "David Makuach",
    location: "Malakal Branch",
    comment: "I love helping clients find homes that truly fit their lives.",
    image: "https://source.unsplash.com/featured/?man,agent"
  },
  {
    id: 4,
    title: "Employee",
    name: "Rose Ajak",
    location: "Bor Branch",
    comment: "Every day brings new challenges and opportunities.",
    image: "https://source.unsplash.com/featured/?woman,smile"
  },
  {
    id: 5,
    title: "Employee",
    name: "Simon Lado",
    location: "Yei Branch",
    comment: "Telesuk empowers us to innovate and serve better.",
    image: "https://source.unsplash.com/featured/?man,team"
  },
  {
    id: 6,
    title: "Employee",
    name: "Mary Abuk",
    location: "Torit Branch",
    comment: "Proud to be part of a company that values integrity.",
    image: "https://source.unsplash.com/featured/?woman,leader"
  }
]

const TestimonyCard = ({ title, name, location, comment, image }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500 border border-gray-200">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-sm font-semibold text-blue-600">{title}</h3>
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500 mb-2">{location}</p>
      <p className="text-gray-700 text-sm italic">“{comment}”</p>
    </div>
  </div>
)

export default function Testimonies() {

  
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Client Testimonials */}
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Client Testimonials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clients.map((client) => (
            <TestimonyCard key={client.id} {...client} />
          ))}
        </div>

        {/* Employee Testimonials */}
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Employee Testimonials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <TestimonyCard key={employee.id} {...employee} />
          ))}
        </div>
      </div>
    </section>
  )
}
