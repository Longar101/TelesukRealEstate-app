import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot,faHouse,faPhone,faBars,faX } from '@fortawesome/free-solid-svg-icons'
import logo from "/src/photo/telesuklogo.png"
 
export default function Header() {
    
  const [menu,setMenu]= useState(false)

  const  displayLogo = [{
       id:1,
       imageUrl:logo
   }]

   const NavLinks = [  {
                id:1,
                 link:<Link to="/Home" className='p-2.5'>
                   
                         <FontAwesomeIcon icon={faHouse} /></Link>
                    },
                         {
                id:2,
                 link: <Link to="/About" className='p-2.5'>
              
                         About</Link>
                    },
                    {
                id:3,
                 link: <Link to="/Services" className='p-2.5'>
              
                         Services</Link>
                    },
                    {
                id:4,
                 link: <Link to="/property" className='p-2.5'> 
                
                    Properties </Link>
  
                    },
                    {
                id:5,
                 link:   <Link to="/Agent" className='p-2.5'>
                     
                    ourAgent </Link>
                    },
                    {
                id:6,
                 link:<Link to="/Contact" className='p-2.5'>
                    <FontAwesomeIcon icon={faPhone} />
                  </Link>
                    },
                     {
                id:7,
                 link:  <Link to="/testimonies" className='p-2.5'> 
                 Testimonies</Link>
                    }

]

 const siteLinks = [
                  {
     id:1,
     links: <Link to="/partnerwithtelesuk">PartnerWithTelesuk</Link>
        
                    },
                        {
     id:2,
     links: <Link to="/advert">Advertise with us</Link>
        
                    },
     
     {
     id:3,
     links: <Link to="/signup">signup </Link>
        
                    },
                    {
     id:4,
     links:<Link to="/login"> login</Link>
        
                    },
                    {
     id:5,
     links: <Link to="/location"> <FontAwesomeIcon icon={faLocationDot} /></Link>
        
                    }


]



  return (
   <header className='w-full h-full md:w-full md:h-[30%] bg-blue-200 flex flex-col md:flex-row  justify-evenly items-center flex-wrap '>
      {/* logo */}
      <div className=' w-full h-fit md:w-[20%]  '>
        {
          displayLogo.map(({id,imageUrl})=>{
               return(
                      <img src={imageUrl} alt="" key={id} className=' flex  md:h-fit md:w-[20%] rounded ml-1 ' sizes={30}/>
               )
          })
        }
      </div>

      <nav className=' bg-white w-full h-fit md:h-fit md:w-[80%] flex flex-col md:flex-row justify-between items-center mt-0 rounded gap-1'>
        
        <ul  className=' hidden w-full h-fit md:flex space-x-2 space-y-2 md:w-[50%] p-2 mt-1.5 rounded m-2'>
             {
               NavLinks.map(({id,link})=>{
                    return(
                         <li className='p-2 w-full h-fit md:w-fit md:h-fit hover:scale-105 duration-200 hover:text-shadow-indigo-200' key={id}>{link}</li>    
                    )
               })
             }
        </ul >

          <div className='flex flex-col justify-start items-start md:hidden mt-2 hover:bg-slate-300 cursor-pointer hover:scale-110 duration-300' onClick={()=>{
                  setMenu(!menu)
          }}>
             {
                    menu ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />
             }
          </div>

          {
                menu && (
                      <ul className='w-full h-fit flex flex-col md:flex-row space-x-2 ml-3 space-y-2 md:w-[50%] p-2 mt-1.5 rounded m-2'>
             {
               NavLinks.map(({id,link})=>{
                    return(
                         <li className='text-red-700  md:text-red-700 p-2 w-full h-fit md:w-fit md:h-fit hover:scale-105 duration-200 hover:text-shadow-indigo-200' key={id}>{link}</li>    
                    )
               })
             }
        </ul >
                )

          }

     


        <ul className='w-full h-fit flex flex-col md:flex-row space-x-2 space-y-2 md:w-1/2 justify-evenly p-2 ml-3  mt-1.5 rounded m-2'>
        
{
       siteLinks.map(({id,links})=>{
              return  (
                    <li className='p-2 w-full h-fit md:w-fit md:h-fit hover:scale-105 duration-200 hover:text-white' key={id}>{links}</li>
                )
       })
}

        </ul>
      </nav>
   </header>
  )
}
