import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import rentaposter from "/src/photo/RentalLogo.png"
import LeasingPosting from "/src/photo/LeasingPoster.png"
import sellingposter from "/src/photo/SellingPoster.png"
import buyingPoster from "/src/photo/ButingPoster.png"
import Advert from "/src/photo/AdvertisePoster.png"
import relocatePoster from "/src/photo/RelocatingPoster.png"
import Tour from "/src/photo/tourPoster.png"
import Maintainance from "/src/photo/Maintainance.png"

function Services() {
             
  const servicesOffer =[
                            {
                              id:1,
                              name:"Rentals",
                               image:rentaposter,
                               description:"we provide rental services to our client,across juba ranging from various housing property such Apartment, AirBnB,shop",
                                nav:<Link to="/contact">Rentals</Link>
                            },
                             {
                              id:2,
                              name:"Leasing",
                               image:LeasingPosting,
                               description:"we provide leasing services to our client,across juba ranging from various property such land AirBnB and shop",
                                nav:<Link to="/contact">lease</Link>
                            },
                             {
                              id:3,
                              name:"selling",
                               image:sellingposter,
                               description:"we provide selling services to our client,across juba state ranging from various housing property such Apartment, AirBnB,shop",
                                nav:<Link to="/contact">selling</Link>
                            },
                             {
                              id:4,
                              name:"Buying",
                               image:buyingPoster,
                               description:"we provide buying services to our client,across juba ranging from various property such Apartment, AirBnB,shop and land",
                               nav:<Link to="/contact">buy</Link>
                            },
                             {
                              id:5,
                              name:"advertising",
                               image:Advert,
                               description:"we provide advertisement services to our client,across juba ranging from various housing property such Apartment, AirBnB,shop and land",
                                nav:<Link to="/contact">advert</Link>
                            },
                             {
                              id:6,
                              name:"Relocating",
                               image:relocatePoster,
                               description:"we provide relocating services to our client,across juba states",
                                nav:<Link to="/contact">contact</Link>
                            },
                             {
                              id:7,
                              name:"tourguiding",
                               image:Tour,
                               description:"we provide tourguiding to our client,across juba city and  the country at large ",
                                nav:<Link to="/contact">contact us</Link>
                            },
                             {
                              id:8,
                              name:"maintainances",
                               image:Maintainance,
                               description:"we provide rental services to our client,across juba ranging from various housing property such Apartment, AirBnB,shop",
                                nav:<Link to="/contact">contact us</Link>
                            },
  ]
      
  return (
   <section className='w-full h-screen md:w-[80%] md:h-screen flex flex-col  mt-2 rounded md:ml-30' >
      <div className='w-full h-fit md:w-[70%] md:h-fit flex flex-col  p-3 rounded md:ml-35 bg-gray-400 justify-center mt-2'>
           <h2 className='p-2 text-5xl text-black bg-amber-50 text-center rounded w-fit h-fit md:w-fit md:h-fit uppercase '>our services</h2>
      </div>
        
        <div className='w-full h-fit md:w-[70%] md:h-fit flex flex-col  p-3 rounded md:ml-35 mt-2 bg-gray-400'>
          <p className='p-2 text-xl text-black bg-amber-50 text-center rounded w-fit h-fit md:w-fit md:h-fit '>
             At telesuk we provide a range of service to our esteem client,our main focus is to solve the housing problem with juba city
             and other Estate a cross south sudan, provide greate deals, we break even with our client just to put a mutual trust and smile
             at both end of the see saw, we provide create and variable of services to our client ranging from Leasing of both property and land, 
             of property and Land,find affordable rental for our client, advertising properties on behaves of our clients , managing properties on behaves of our clients
             maintaining properties, providing relocation services to our clients and finally tour guiding our client at request.
             All this services are possible at Telesuk Real Estate company.
             all you just need to do is a button away from you, trust and click to speak to our Agent, our team is eagely waiting in the background 
             to receive proffesional call.
          </p>
             
                <Link to="/property" className='mt-2 cursor-pointer'>
               <button type='button'  className='text-white-400 cursor-pointer bg-amber-300 rounded p-2'>visit our properties <FontAwesomeIcon icon={faArrowRight} /></button>
                 </Link>
        </div>

          <div className='w-full h-fit md:h-fit md:w-[80%] flex flex-col rounded  mt-2 p-2 md:ml-20 md:flex-row flex-wrap gap-4'>

                 {
                   servicesOffer.map(({id,name,image,description,nav})=>{

                    return  (
                              
               <div className='w-full h-fit p-3 md:w-[30%] md:h-fit rounded flex flex-col items-center bg-gray-500 mt-2 md:ml-4' key={id}>
                   <span className='text-center bg-white text-black bold p-2 rounded mb-2'> {name}</span>
                     <div>
                        <div className='w-fit h-fit overflow-hidden'>
                   <img src={image} alt="" className='h-40 w-full object-center rounded '/>
                      </div>
                         <div className=' bg-blue-400 w-full h-fit md:w-full md:h-fit rounded mt-1 p-2'>
                           <p className='p-2 w-full h-fit text-white'>{description}</p>
                         </div>

                         <button className='p-2 rounded w-fit h-fit bg-yellow-400 mt-2'>{nav}</button>
                     </div>
               </div>

                    )


                   })
                 }





          </div>

          
   </section>
  )
}

export default Services;
