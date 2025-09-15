import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartnerWithTelesuk = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "I'm an agent or broker",
      description: 'Connect with buyers and sellers through Telesuk’s trusted platform.',
      image: '/images/agent.jpg',
      route: '/pages/agent',
    },
    {
      title: "I'm a property manager",
      description: 'List and manage properties with powerful tools and visibility.',
      image: '/images/manager.jpg',
      route: '/partner/manager',
    },
    {
      title: "I'm a landlord",
      description: 'Advertise your rental and reach qualified tenants fast.',
      image: '/images/landlord.jpg',
      route: '/partner/landlord',
    },
    {
      title: "I'm a lender or loan officer",
      description: 'Offer financing solutions to buyers and grow your lending network.',
      image: '/images/lender.jpg',
      route: '/partner/lender',
    },
    {
      title: "I'm a builder",
      description: 'Showcase new developments and connect with investors and buyers.',
      image: '/images/builder.jpg',
      route: '/partner/builder',
    },
    {
      title: "I am a brand or local advertiser",
      description: 'Promote your business to a targeted real estate audience.',
      image: '/images/advertiser.jpg',
      route: '/partner/advertiser',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Partner with Telesuk to Grow Your Business
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Reach thousands of buyers, sellers, renters, and professionals across South Sudan’s fastest-growing real estate network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => navigate(section.route)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img src={section.image} alt={section.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audience Insights Section */}
<div className="mt-20 bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Telesuk Audience Snapshot</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <div>
      <div className="flex justify-center mb-4">
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 10l1-2h16l1 2v10H3V10z" />
          <path d="M7 10v10M17 10v10" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-700">42% to Buy or Sell</h3>
      <p className="text-gray-600 mt-2">
        Nearly 42% of visitors plan to buy or sell property within the next 12 months.
      </p>
    </div>

    <div>
      <div className="flex justify-center mb-4">
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
          <path d="M5 10v10h14V10" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-700">180K+ Monthly Users</h3>
      <p className="text-gray-600 mt-2">
        Telesuk platforms attract over 180,000 unique users every month across mobile and web.
      </p>
    </div>

    <div>
      <div className="flex justify-center mb-4">
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l8 8-8 8-8-8 8-8z" />
          <path d="M12 12v10" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-700">#1 Rental Network</h3>
      <p className="text-gray-600 mt-2">
        Telesuk Rentals is the most visited rental platform in the region.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default PartnerWithTelesuk;
