import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Location() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <div className="flex justify-center items-center gap-3 mb-4">
          <FontAwesomeIcon icon={faLocationDot} className="text-blue-700 text-3xl" />
          <h1 className="text-3xl font-bold text-blue-800">Our Location</h1>
        </div>
        <p className="text-gray-600 text-lg">
          Visit us at Block 4, Route Hai-Lona, Hai-Cinema, Juba, South Sudan.
        </p>
      </div>

      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          title="Telesuk Location"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.345678!2d31.582000!3d4.851000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171281e2d3f1a9b3%3A0xabc123456789abcd!2sHai-Cinema%2C%20Block%204%2C%20Route%20Hai-Lona%2C%20Juba%2C%20South%20Sudan!5e0!3m2!1sen!2sus!4v1699999999999"
        ></iframe>
      </div>
    </section>
  )
}
