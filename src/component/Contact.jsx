import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Apart from "/src/photo/4BEDROOMS.jpg"
const Contact = () => {
  const [showApartmentInfo, setShowApartmentInfo] = useState(true);
  const navigate = useNavigate();

  const ApartmentAdvert = [
      {
         id:1,
         title:"Modern 1-Story Apartment – Hai Cinema",
         image:Apart,
         subtle:"3 Bedrooms · 2 Bathrooms · Located in Hai Cinema, Juba",
         description:"Stylish mixed-material facade, glass entry, and landscaped courtyard. Ideal for executive rental or boutique living"
      }
  ]

  return (
    <section className='w-full h-fit md:w-[70%] rounded flex flex-col p-4 md:ml-50'>
      {/* Header Section */}
      <div className='w-full flex flex-col bg-gray-500 rounded p-3'>
        <h1 className='p-3 text-6xl text-red-500 bg-white rounded text-center shadow border border-indigo-900 uppercase'>
          Welcome to Telesuk Real EstatE
        </h1>
        <h4 className='p-3 text-2xl text-black bg-sky-200 rounded  md:w-fit shadow border border-indigo-900 mt-3'>
          We are more than happy to serve you
        </h4>
      </div>

      {/* Apartment Info Section */}
      {showApartmentInfo && (
        <div className='w-full md:w-[60%] bg-white rounded p-4 mt-4 space-y-4'>
          <button
            className='bg-red-400 text-white px-3 py-2 rounded hover:bg-red-500 transition'
            onClick={() => setShowApartmentInfo(false)}
          >
            x
          </button>
          {
             ApartmentAdvert.map(({id,title,image,subtle,description})=>{
               return (
                  <div className='bg-gray-400 rounded p-3' key={id}>
            <span className='p-2 bg-white text-black rounded'> Title:{title}</span>
              <img src={image} alt="" className=' w-full h-60 object-center' />
              <span className='p-2 bg-gray text-black rounded'> subtle:{subtle}</span>
            <p className='text-white'>
                Description:     {description}
            </p>
          </div>
               )
             })
          }

        

          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
            onClick={() => navigate('/advert')}
          >
            view the Apartment
          </button>
        </div>
      )}

      {/* Contact Form */}
      <div className='min-h-screen flex items-center justify-center bg-gray-100 p-6 md:w-full mt-3 rounded'>
        <form className='w-full max-w-lg bg-gray-300 p-8 rounded-lg shadow-md space-y-6' type="form" action="">
          <h2 className='text-2xl font-semibold text-gray-800 text-center'>Contact us</h2>

          <div>
            
            <input type='text' id='name' name='name'  placeholder ="Enter your name" className='w-full bg-white border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>

          <div>
            
            <input type='email' id='email' name='email' placeholder='Enter your Email' className='w-full bg-white border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>

          <div>
           
            <input type='text' id='location' name='location' placeholder='Enter your Location eg.Gudele buoba' className='w-full bg-white border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>

          <div>
            
            <input type='text' id='purpose' name='purpose' placeholder='purpose e.g rental, leasing,buying selling,looking for agent,tourguiding' className='w-full bg-white border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>

          <div>
            
            <textarea id='comment' name='comment' rows='4' placeholder='write a brief detail of what you are looking for..' className='w-full bg-white border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400'></textarea>
          </div>

          <div className='text-center'>
            <button type='submit' className='bg-blue-500 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
