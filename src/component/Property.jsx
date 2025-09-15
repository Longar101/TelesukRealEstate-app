import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown,faLocationDot,faBed,faSink } from '@fortawesome/free-solid-svg-icons'

import home1 from "/src/photo/4BEDROOMS.jpg";
import home2 from "/src/photo/download (1).jpg";
import home3 from "/src/photo/download (2).jpg";
import home4 from "/src/photo/download.jpg";
import home5 from "/src/photo/Esterno di casa moderna con sfondo vuoto per il concetto immobiliare _ Foto Premium.jpg";
import home6 from "/src/photo/Фотографии на тему «3d дом» — скачивайте бесплатные изображения высокого качества _ Freepik.jpg";
import Apartment from '../pages/Apartment';
import AirBnB from '../pages/AirBnB';
import Condo from '../pages/Condo';
import Shop from '../pages/Shop';
import Land from '../pages/Land';

function Property() {

      const listOfApartment = [

                               {   id:1,
                                  saletype:"sale",
                                  image:home1,
                                  
                                  description:"modern downtown apartment with view ",
                                  location: <FontAwesomeIcon icon={faLocationDot} />+"Hai-cinema",
                                  price:"$4500",
                                  details: <FontAwesomeIcon icon={faBed} />+"4 bedroom"+ <FontAwesomeIcon icon={faSink} /> +"twobath+ 2400sq ft",
                                  nav:<Link to="/book">book now</Link>

                               },
                                 {   id:2,
                                  saletype:"rental",
                                  image:home2,
                                  description:"modern apartment with wide space located near river ",
                                  location: <FontAwesomeIcon icon={faLocationDot} />+"juba Town",
                                   price:"$1500",
                                  details: <FontAwesomeIcon icon={faBed} />+"3 bedroom"+ <FontAwesomeIcon icon={faSink} /> +"one bath+ 1400sq ft",
                                  nav:<Link to="/book">book now</Link>

                               },
                                 {   id:3,
                                  saletype:"sale",
                                  image:home3,
                                  description:"modern downtown apartment with serene  ",
                                  location: <FontAwesomeIcon icon={faLocationDot} />+"Hai-cinema",
                                   price:"$2500",
                                  details: <FontAwesomeIcon icon={faBed} />+"4 bedroom"+ <FontAwesomeIcon icon={faSink} /> +"twobath+ 2400sq ft",
                                  nav:<Link to="/booki">book now</Link>

                               },
                                 {   id:4,
                                  saletype:"sale",
                                  image:home4,
                                  description:"modern downtown apartment with view ",
                                  location: <FontAwesomeIcon icon={faLocationDot} />+"jubatown",
                                   price:"$6500",
                                  details: <FontAwesomeIcon icon={faBed} />+"4 bedroom"+ <FontAwesomeIcon icon={faSink} /> +"twobath+ 2400sq ft",
                                  nav:<Link to="/booki">book now</Link>

                               },
                                 {   id:5,
                                  saletype:"rent",
                                  image:home5,
                                  description:"modern downtown apartment with view ",
                                  location: <FontAwesomeIcon icon={faLocationDot} />+"suk-jebel",
                                   price:"$1500",
                                  details: <FontAwesomeIcon icon={faBed} />+"4 bedroom"+ <FontAwesomeIcon icon={faSink} /> +"twobath+ 2400sq ft",
                                  nav:<Link to="/booki">book now</Link>

                               },
                                 {   id:6,
                                  saletype:"sale",
                                  image:home6,
                                  description:"modern downtown apartment with view ",
                                  location: <FontAwesomeIcon icon={faLocationDot} />+"Gudele",
                                   price:"$5500",
                                  details: <FontAwesomeIcon icon={faBed} />+"4 bedroom"+ <FontAwesomeIcon icon={faSink} /> +"twobath+ 2400sq ft",
                                  nav:<Link to="/booki">book now</Link>

                               }

      ]



     
    const sales=[
            
              {
                 id:1,
                 link:<Link to="/rental">Rents </Link>
              }
              ,
               {
                 id:2,
                 link:<Link to="/sales">sale </Link>
              },
               {
                 id:3,
                 link:<Link to="/buy">buy </Link>
              },
               {
                 id:4,
                 link:<Link to="/least">least </Link>
              }

    ]

    const propertyType = [
                            
              {
                 id:1,
                 link:<Link to="/Apartments">Apartment </Link>
              }
              ,
               {
                 id:2,
                 link:<Link to="/shops">shops </Link>
              },
               {
                 id:3,
                 link:<Link to="/house"> houses</Link>
              },
               {
                 id:4,
                 link:<Link to="/plot of land">plot of land </Link>
              } 
        
    ]

    const priceRange = [

                             
              {
                 id:1,
                 link:<Link to="/$300-$650">$300-$650</Link>
              }
              ,
               {
                 id:2,
                 link:<Link to="/$500-$850">$500-$850 </Link>
              },
               {
                 id:3,
                 link:<Link to="/$800-$1650">$800-$1650</Link>
              },
               {
                 id:4,
                 link:<Link to="/$1300-$2650">$1500-$8650 </Link>
              } 
        
       
    ]

    const bedRooms = [

                      {
                 id:1,
                 link:<Link to="/onebedroom">1</Link>
              }
              ,
               {
                 id:2,
                 link:<Link to="/twobedRoom">+2</Link>
              },
               {
                 id:3,
                 link:<Link to="/threebedrooms">+3</Link>
              },
               {
                 id:4,
                 link:<Link to="/fourbedroom">+4 </Link>
              },
                {
                 id:5,
                 link:<Link to="/fivebedroom">+5 </Link>
              }


           
    ]


  return (
      <>
    <section className='bg-white flex flex-col md:flex-col w-full h-[200vh]  md:w-full  mt-2'>
     <div className='bg-blue-400 md:m-2 w-full h-fit md:w-[60%] md:h-fit my-2 p-2 rounded flex-col mt-2'>
       <h2 className='text-4xl text-red-600 uppercase bg-white md:mt-1 md:w-fit p-3 rounded '>property listings</h2>
       <h4 className='text-2xl text-slate-800 p-2 md:mt-2 bg-white w-fit rounded '>we not only provide comfort, but a mix reaction of joy and luxury</h4>
        <p className='text-slate-200 text- xl p-2 bg-slate-500 mt-2 rounded md:fit' > Discover your perfect property from our extensive collection</p>
     </div>

       <div className='flex flex-col h-fit w-full md:w-full space-y-3 md:flex-row md:ml-2 rounded'>
       <form action="" className='w-full h-fit md:w-1/2 md:h-fit p-3 bg-gray-400 flex flex-row flext col  '>
        <input type="text" className='w-full h-fit md:w-full md:h-fit p-3 focus:outline-0 bg-white' placeholder='search property by location' name=''/>
        <button className='p-2 hover:scale-105 duration-200 bg-gray-300'> search</button>
       </form>
       </div>

       {/*drop down*/}
        <div className='md:mt-2 flex flex-row w-full h-fit p-2 md:w-full md:h-fit md:flex-row'>
         <button className='rounded group relative border border-gray-300 text-blue-700 md:w-fit h-fit p-2 bg-gray-400 flex-col md:flex-row space-x-2 space-y-3 '>
          sale/rent<FontAwesomeIcon icon={faCaretDown} />
         <ul className='bg-white mt-4 absolute top-0 right-0 rounded p-3 md:mt-4 shadow-md scale-y-0 group-focus:scale-100 origin-top duration-200 md:w-full md:h-fit'>
       
        {
               sales.map(({id,link})=>{
                  return (
                        <li className='p-2 rounded md:h-full w-full' key={id}>{link}</li>
                  )
               })
        }
         </ul>
         
         </button>

              <button className='rounded  group relative border border-gray-300 text-blue-700 md:w-fit h-fit p-2 bg-gray-400 flex-col md:flex-row space-x-2 space-y-3 '>
          property<FontAwesomeIcon icon={faCaretDown} />
         <ul className='bg-white mt-4 absolute top-0 right-0 rounded p-3 md:mt-4 shadow-md scale-y-0 group-focus:scale-100 origin-top duration-200 md:w-full md:h-fit'>
       
        {
               propertyType.map(({id,link})=>{
                  return (
                        <li className='p-2 rounded md:h-full w-full' key={id}>{link}</li>
                  )
               })
        }
         </ul>
         
         </button>


              <button className='rounded group relative border border-gray-300 text-blue-700 md:w-fit h-fit p-2 bg-gray-400 flex-col md:flex-row space-x-2 space-y-3 '>
          price range<FontAwesomeIcon icon={faCaretDown} />
         <ul className='bg-white mt-4 absolute top-0 right-0 rounded p-3 md:mt-4 shadow-md scale-y-0 group-focus:scale-100 origin-top duration-200 md:w-full md:h-fit'>
       
        {
               priceRange.map(({id,link})=>{
                  return (
                        <li className='p-2 rounded md:h-full w-full' key={id}>{link}</li>
                  )
               })
        }
         </ul>
         
         </button>


              <button className='rounded group relative border border-gray-300 text-blue-700 md:w-fit h-fit p-2 bg-gray-400 md:flex-row space-x-2 space-y-3 w-fit  '>
          bedrooms<FontAwesomeIcon icon={faCaretDown} />
         <ul className='bg-white mt-4 absolute top-0 right-0 rounded p-3 md:mt-4 shadow-md scale-y-0 group-focus:scale-100 origin-top duration-200 md:w-full md:h-fit'>
       
        {
               bedRooms.map(({id,link})=>{
                  return (
                        <li className='p-2  mt-2 rounded md:h-fit w-fit' key={id}>{link}</li>
                  )
               })
        }
         </ul>
         
         </button>

           </div>          
   
        <div className='md:mt-2 flex flex-row w-full h-fit p-2 md:w-full md:h-fit rounded'>
         <div className='w-fit h-fit p-4 bg-blue-400 flex-row md:flex-row space-x-2 space-y-3 '>
          <span className='p-2 rounded bg-white'> showing 6 properties</span>
          <span className='p-2 rounded bg-violet-400' > featured </span>
          <span className='p-2 rounded bg-blue-300 '>newest first</span>
         </div>

           </div>

           <div  className=' ml-2 w-full md:w-full md:h-fit h-fit rounded flex flex-col md:flex-row  flex-wrap gap-6'>
                          {
                             listOfApartment.map(({id,saletype,image,description,location,price,details,nav})=>{
                                return (

             <div className='md:w-[30%] md:h-fit rounded mt-1 bg-gray-400 w-full h-fit p-2 ' key={id}>
              <div className='flex flex-row w-fit rounded p-2 justify-between gap-3'>
                                
                
                <span className='w-fit h-fit p-2 rounded bg-red-400'>{saletype}</span>
                 <span className='w-fit h-fit p-2 rounded bg-white'>featured</span>
              </div>
              <div className='w-fit h-fit overflow-hidden'>
                   <img src={image} alt="" className='h-40 w-full object-center rounded '/>
              </div>

              <div className=' w-full h-fit flex flex-col items-start rounded bg-white space-y-2 mt-3'>
            <span className='p-1'>{price}</span>
            <span className='p-1'>{description}</span>
            <span className='p-1'>{location}</span>
            <span className='p1'>{details}</span>
            <button className='p-2 rounded w-fit h-fit bg-yellow-400'>{nav}</button>

              </div>

            </div>

                                )
                             })
                          }
        

           </div>

        
    </section>
    <Apartment/>
    <AirBnB/>
    <Condo/>
    <Shop/>
    <Land/>
    </>
  )
}

export default Property;
