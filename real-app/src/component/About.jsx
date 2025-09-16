import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from "/src/photo/telesuklogo.png"
import realEstate from "/src/photo/image.png"
import bord from "/src/photo/board.png"
function About() {
  return (
    <section className='w-full h-screen md:w-full md:h-[250vh] bg-black rounded flex flex-col mt-5 '>
       <div className='w-full h-fit md:w-[80%] md:h-fit p-3 rounded bg-gray-600 mt-2 items-center justify-center md:ml-30'>
         <h1 className='text-black text-4xl text-center bold uppercase bg-white p-3 rounded'>Telesuk Real Estate company ltd </h1>
          <h4 className=' bg-white text-xl text-blue-700 rounded p-2 mt-2' > we are the technological solution to your Home, Apartment, Rentals, Shops,Land and general properties</h4>
         </div>

       <div className='w-full h-fit flex flex-col md:flex-row rounded  bg-gray-300 mt-3 md:w-[80%] md:ml-30 p-3 '>
         <div className='flex-col w-full h-fit md:w-[30%] md:h-fit flex md:flex-col mt-2 items-center justify-center'>
          <img src={logo} alt="company logo" className=' h-60 w-fit object-cover'  />
         <h5 className='p-2 bg-white rounded mt-2 w-full md:w-fit text-2xl md:text-xl text-center'> trust is our main partner</h5>
         </div>

         <div className='h-fit w-full md:h-fit md:w-[60%] flex-col md:w-col'>
                   <p className='p-2 bg-white text-black text-xl rounded'>
Telesuk is one of the best real estate company across South Sudan and east AFRICA region at large,
it has been in the real Estate business for longer period.
the company was established back in 25/dec/2020,with the soul purpose of providing SOLUTION to real Estate housing,
land and property management at large, we focus in providing rental solution to our esteem client at east ,land leasing,sales of property, our main 
purpose it to bridge the digital divide, by bringing the technological solution to your doorstep, you can't imagine neither can you believe but we bring 
trust, purpose and value to your door , that just with a click of button, you can connect with us, wear a smile on your face.
 we focus on providing the real solution to your problem, we are a trusted and legal registared company that does everything in digital ways
we care and so should you, your housing problem is our concern. we have various parners in our field of endevour, who have pledge there full trust in us
to deliver, and we tell them to relaxed, us we work day and night to drive our dream forward, we bring buyer, seller, Agent  and Broker together, our main focus is to 
profit and bring balance and mutual trust to our client.


                   </p>
         </div>
       </div>


       
       <div className='w-full h-fit flex flex-col md:flex-row rounded  bg-gray-300 mt-3 md:w-[80%] md:ml-30 p-3 '>
                          
         <div className='flex-col w-full h-fit md:w-[30%] md:h-fit flex md:flex-col mt-2 items-center justify-center'>
          <div className='bg-gray-400 w-full h-fit rounded p-2 flex justify-center md:w-fit'>
                             <h1 className='text-4xl bold'> Real Estate</h1>
                          </div>
          <img src={realEstate} alt="company logo" className=' h-60 w-fit object-cover mt-2'   />
         <h5 className='p-2 bg-white rounded mt-2 w-full md:w-fit text-2xl md:text-xl text-center'><div className='flex justify-end md:mt-0 bg-blue-800 mt-1 w-fit p-2 rounded hover:scale-105 duration-300 hover:bg-blue-50 cursor-pointer '>
                 <Link to="/latest properties">
                 <button type='button'  className='text-white-400'>visit our properties <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
               </div> </h5>
         </div>

         <div className='h-fit w-full md:h-fit md:w-[60%] flex-col md:w-col'>
                   <p className='p-2 bg-white text-black text-xl rounded'>
            Real Estate Challenges in South Sudan are quiet alot ranging from Economic Instability
          High inflation and currency devaluation have crushed purchasing power.Luxury properties and 
          hotels are underutilized, with vacancy rates exceeding 50% in some areas.Lack of Urban Planning
          Rapid, unregulated urbanization leads to informal settlements and poor infrastructure.
          this where we come in as Telesuk Real Estate company to bridge the digital tireless search of property,
           rental, hotels, AirBNB,land and so on. At Telesuk, 
           our mission is to revolutionize business operations and real estate 
          services in South Sudan by building a reliable digital platform that connects 
            buyers, sellers, tenants, and landlords efficiently. We aim to facilitate economic 
            growth, empower local property owners, and meet the diverse accommodation 
            and commercial needs of Juba and beyond.  


                   </p>
         </div>
       </div>


      <div className='w-full h-fit flex flex-col md:flex-row rounded  bg-gray-300 mt-3 md:w-[80%] md:ml-30 p-3 '>
                          
         <div className='flex-col w-full h-fit md:w-[30%] md:h-fit flex md:flex-col mt-2 items-center justify-center'>
          <div className='bg-gray-400 w-full h-fit rounded p-2 flex justify-center md:w-fit'>
                             <h1 className='text-4xl bold'> Our Executive team</h1>
                          </div>
          <img src={bord} alt="company logo" className=' h-60 w-fit object-cover mt-2'   />
         <h5 className='p-2 bg-white rounded mt-2 w-full md:w-fit text-2xl md:text-xl text-center'><div className='flex justify-end md:mt-0 bg-blue-800 mt-1 w-fit p-2 rounded hover:scale-105 duration-300 hover:bg-blue-50 cursor-pointer '>
                 <Link to="/latest properties">
                 <button type='button'  className='text-white-400'>visit our properties <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
               </div> </h5>
         </div>

         <div className='h-fit w-full md:h-fit md:w-[60%] flex-col md:w-col'>
                   <p className='p-2 bg-white text-black text-xl rounded'>
            WE are as the executive board we are driven with one purpose to ensure our team is dedicated to fulfilling our services to our esteem clients we strive daily
to ensure that our customers wishes are fulfill, and that we provise technical and strategic service, as the goal and the vision demands we skill, at our work that why we are the best
     a testimonied by our clients, we rest not just to ensure that our service are the best with offordable prices and creating connection between out esteem client 


                   </p>
         </div>
       </div>

       
      <div className='w-full h-fit flex flex-col md:flex-row rounded  bg-gray-300 mt-3 md:w-[80%] md:ml-30 p-3 '>
                          
         <div className='flex-col w-full h-fit md:w-[30%] md:h-fit flex md:flex-col mt-2 items-center justify-center'>
          <div className='bg-gray-400 w-full h-fit rounded p-2 flex justify-center md:w-fit'>
                             <h1 className='text-4xl bold'> Our mission </h1>
                          </div>
         </div>

         <div className='h-fit w-full md:h-fit md:w-[60%] flex-col md:w-col'>
                   <p className='p-2 bg-white text-black text-xl rounded'> 
At Telesuk, our mission is to revolutionize business operations and real estate 
services in South Sudan by building a reliable digital platform that connects 
buyers, sellers, tenants, and landlords efficiently. We aim to facilitate economic 
growth, empower local property owners, and meet the diverse accommodation 
and commercial needs of Juba and beyond. 


                   </p>
         </div>
       </div>


       <div className='w-full h-fit flex flex-col md:flex-row rounded  bg-gray-300 mt-3 md:w-[80%] md:ml-30 p-3 '>
                          
         <div className='flex-col w-full h-fit md:w-[30%] md:h-fit flex md:flex-col mt-2 items-center justify-center'>
          <div className='bg-gray-400 w-full h-fit rounded p-2 flex justify-center md:w-fit'>
                             <h1 className='text-4xl bold'> Our vision </h1>
                          </div>
         </div>

         <div className='h-fit w-full md:h-fit md:w-[60%] flex-col md:w-col'>
                   <p className='p-2 bg-white text-black text-xl rounded'>
    
We envision becoming South Sudan's leading digital property marketplace, 
improving real estate transparency, and showcasing South Sudanese-owned 
properties to local and global markets. Telesuk will drive urban transformation 
through access to verified property listings, digital marketing tools, and fair trade 
practices in property transactions. 


                   </p>
         </div>
       </div>



    </section>
  )
}

export default About;
