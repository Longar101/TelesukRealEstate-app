import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight,faMagnifyingGlass,faHouse, faLocationDot, faFaceLaughBeam,faArrowTrendUp} from '@fortawesome/free-solid-svg-icons'
import HomeImage from "/src/photo/bgimage.png"
import Apartment from '../pages/Apartment';
import Advert from './Advert';


function Home() {

     const propertyDocs = [
              {
                   id:1,
                   property:<FontAwesomeIcon icon={faHouse}/>,
                   number:" +1350",
                   item: "property listed"
              },

               {
                   id:2,
                   property:<FontAwesomeIcon icon={faFaceLaughBeam} />,
                   number:' +1200',
                   item:"happy client"
              },
             {
                   id:3,
                   property:<FontAwesomeIcon icon={faArrowTrendUp} />,
                   number: '+850',
                   item:"successfull sales"
              },
               {
                   id:4,
                   property:<FontAwesomeIcon icon={faLocationDot}/>,
                   number: '+350',
                   item:"location"
              }
              
     ]




  return (
    <>
   <section className=' w-full h-[130vh]  flex flex-col md:flex-row bg-center bg-[url(/src/photo/bgimage.png)] bg-cover mt-2 rounded m-2 ' >
     <div className=' md:w-[40%] md:h-fit w-full h-full flex flex-col mt-3 ml-1  rounded'>
        <div className='bg-blue-500 p-2 flex justify-center item-center rounded'>
            <h1 className='uppercase bold text-black bg-white p-2 rounded text-6xl'> Find your Dream Home with Us</h1>
        </div>
        
        <div className='flex w-full h-fit flex-col bg-blue-400 p-2 rounded mt-4 '>
           <p className=' text-2xl p-1 mt-2 bg-white rounded'>
            At telesuk we bring technology to your door step,
             just with click of button your can find your dream Home,
             your can rent an apartment, sale property, meet buyers and event Advertise your rentals

      
            </p> 
             <div className='flex justify-end mt-2 items-end bg-yellow-300 w-fit p-2 rounded hover:scale-105 duration-300 hover:bg-blue-50 cursor-pointer '>
                 <Link to="/properties" className='flex justify-end'>
                 <button type='button'  className='text-sm'>get started <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
               </div>
        
               <div className='w-full h-fit md:h-fit mt-2 rouneded flex flex-col md:flex-row items-center'>
                <img src={HomeImage} alt="home property" className='w-[100%] h-fit md:h-[30%] rounded' />
                </div> 
       
               <div className='flex justify-end md:mt-0 bg-blue-800 mt-1 w-fit p-2 rounded hover:scale-105 duration-300 hover:bg-blue-50 cursor-pointer '>
                 <Link to="/latest properties">
                 <button type='button'  className='text-white-400'>latest properties <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
               </div>
        </div>
     </div>

   {/*section for search bar*/}
   <div className=' flex flex-col space-y-2 w-full h-screen  md:w-[60%] mt-34 items-center md:mt-1'>

   <div className=' bg-blue-600 w-full h-fit md:w-[60%] md:h-fit flex flex-col md:flex-row rounded p-3 items-center justify-center ml-4 mt-2 '>
     <form action="" type="form" className='w-full h-fit justify-between flex flex-row md:flex-row flex-wrap'>
      <input type="text" placeholder='search by location eg.Hai-cinema ' className='bg-white text-slate-800 p-2 w-[80%] rounded focus:outline-0 hover:scale-105 duration-200 hover:text-blue-600' /> 
      <button className='p-2 bg-gray-200 w-fit h-fit rounded cursor-pointer hover:scale-105 duration-150 hover:bg-blue-600'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
     </form>
   </div>

    <div className=' w-full h-fit flex md:flex-row justify-evenly items-center bg-blue-400 flex-wrap rounded p-3  md:w-[60%] ml-3 mt-8' >

        {
            propertyDocs.map(({id,property,number,item})=>{
                return(

                     <div className='w-[35%] h-fit bg-gray-100 items-center p-2 flex flex-col gap-3 rounded mt-2' key={id}>
                      <span className='p-1'> {property}</span>
                       <span className='p-1'> {number}</span>
                    <span className='p-1'>{item}</span>
                   </div>
                )
            })
        }
  
    </div>

    <div className=' w-full h-fit md:w-1/2 md:h-1/2 rounded flex flex-col  flex-wrap p-2 justify-center md:items-start'> 
      <h1 className='uppercase text-blue-700 bold p-2 rounded text-2xl md:w-fit bg-white'>interested in knowing more About us</h1>
      <div className='flex flex-row gap-2 justify-evenly md:w-full mt-3'>
        <div className='flex justify-end mt-0 bg-yellow-400 w-fit p-2 rounded hover:scale-105 duration-300 hover:bg-blue-50 cursor-pointer '>
                 <Link to="/about">
                 <button type='button'  className='text-white-400'>learn more <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
               </div>

              <div className='flex justify-end mt-0 bg-blue-700 w-fit p-2 rounded hover:scale-105 duration-300 hover:bg-blue-50 cursor-pointer '>
                 <Link to="/latest properties">
                 <button type='button'  className='text-white-400'>tour with us<FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
               </div>  
 </div>
    </div>

    </div>
    
   </section>
   <Apartment/>
   <Advert/>

     </>
   
  )
}

export default Home;
