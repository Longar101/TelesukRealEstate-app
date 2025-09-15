import React from 'react'
 import Agent1 from "/src/photo/Agent1.png"
 import Agent2 from "/src/photo/Agent2.png"
 import Agent3 from "/src/photo/Agent3.png"
 import Agent4 from "/src/photo/Agent4.png"
 import Agent5 from "/src/photo/Agent5.png"
 import Agent6 from "/src/photo/Agent6.png"
function Agent() {

     const Agent = [

                         {
                             id:1,
                             image:Agent1,
                             details:"Belinda Wallis – Rental Specialist at Telesuk Company With a sharp eye for value and a deep understanding of the local market, Belinda brings professionalism and warmth to every rental transaction. Whether you're seeking a family home or a commercial space, she ensures your property journey is smooth, informed, and tailored to your needs",
                            name:"Belinde sky",
                            contact:"0946464688"
                         },
                         {
                             id:2,
                             image:Agent2,
                             details:"Deng – Apartment Rental Specialist at Telesuk Company With a sharp understanding of urban living and tenant needs, Deng brings clarity and confidence to the apartment rental process. At Telesuk Company, he focuses on matching clients with well-maintained, strategically located apartments—whether you're a first-time renter or seeking a long-term lease. Known for his professionalism and local insight, Deng ensures every rental experience is smooth, transparent, and tailored to your lifestyle.",
                            name:"Deng",
                            contact:"096398*****"
                         },
                         {
                             id:3,
                             image:Agent3,
                             details:"Samuel – Commercial Property Specialist at Telesuk Company Focused on retail and business spaces, Samuel helps entrepreneurs and shop owners find the perfect location to grow their ventures. At Telesuk Company, he’s known for his deep market insight, responsive service, and ability to match clients with high-traffic, well-maintained commercial properties. Whether you're launching a new store or expanding your footprint, Samuel ensures your leasing journey is smooth, strategic, and aligned with your business goals.",
                            name:"Samuel hey",
                            contact:"0946565**"
                         },
                         {
                             id:4,
                             image:Agent4,
                             details:"Achai – Property Maintenance Expert at Telesuk Company Achai brings precision, reliability, and hands-on expertise to every property under her care. At Telesuk Company, she specializes in maintaining residential and commercial spaces—from routine inspections and repairs to emergency fixes and tenant-ready upgrades. Known for her proactive approach and attention to detail, Achai ensures that every property remains safe, functional, and visually appealing. Whether it's plumbing, electrical, or structural upkeep, she’s the go-to agent for hassle-free, high-quality maintenance solutions.",
                            name:"Achai",
                            contact:"0988**49475"
                         },
                         {
                             id:5,
                             image:Agent5,
                             details:"Nyamum – Land Leasing Consultant at Telesuk Company Nyamum is your go-to expert for securing prime land through flexible leasing solutions. At Telesuk Company, she specializes in connecting clients with plots suited for agriculture, development, or commercial use. With a deep understanding of lease terms, zoning regulations, and location strategy, Nyamum ensures every deal is transparent, cost-effective, and aligned with long-term goals. Whether you're expanding a business or launching a new project, she makes land access simple, strategic, and stress-free.",
                            name:"Nyamum",
                            contact:"0956565***"
                         },
                              {
                             id:6,
                             image:Agent6,
                             details:"Reymon – Relocation Services Specialist at Telesuk Company Reymon is the trusted guide for clients navigating the complexities of moving and settling into new spaces. At Telesuk Company, he focuses on relocation support—helping individuals and families transition smoothly by coordinating housing, logistics, and personalized property solutions. Whether it's finding the right rental, managing move-in timelines, or ensuring comfort in a new environment, Reymon combines efficiency with empathy to make relocation feel effortless and well-managed.",
                            name:"Reymon",
                            contact:"0956575**"
                         }

     ]




  return (
  <section className='w-full h-fit md:w-full md:h-fit flex flex-col rounded p-2 '>
     <div className='bg-gray-200 flex flex-col md:flex-col rounded p-2 w-full h-fit md:w-[70%] md:h-fit md:ml-40'>
             <h1 className='text-6xl  p-3 mt-2 text-center uppercase bold rounded text-black'>welcome to our Agency Team</h1>
     </div>

     <div className=' w-full h-fit rounded md:w-[70%] md:h-fit p-2 bg-gray-500 flex flex-col md:flex-col mt-2 md:ml-40'>
        <p className='p-2 bg-white rounded w-fit text-xl'>
          At telesuk we not only deal with propertie but also provide opportunities to team member to scale there marketing ability 
          and experice the device world of business with us, we are provide Agency service to our client, either on property ownership
          maintainace, land leasing, land buying and rental of property, we strive daily to ensure that our client relaxe while we at telesuk 
          put in more effort to render the services on there behaves, trust is one of our core value and we tresure it at our company
          glade to have you visite our Agents Team page, and experince with us the greate world of Real Estate.
         
        </p>
         
          <span className='text-xl uppercase p-3 bg-amber-200 rounded mt-2 md:w-fit'>meet some of our Agent members</span>
     </div>

          
          <div className='w-full h-fit rounded md:w-[80%] md:h-fit p-2 bg-gray-300 flex flex-col md:flex-row gap-6 mt-3 flex-wrap md:ml-30'>

                  {
                    Agent.map(({id,image,details,name,contact})=>{
                          return (
                 <div className='w-full h-fit flex flex-col space-y-2 rounded md:w-[30%] md:h-fit bg-slate-200 p-3 md:ml-4' key={id}>
                  <img src={image} alt="Agent Logo"  className='w-40 h-40 object-center rounded-full'/>

                    <div className='w-full h-fit bg-slate-400 rounded flex flex-col float-left p-2'>
                       <p className='text-xl text-black w-full md:w-full h-fit p-2'>{details}</p>
                    </div>

                    <div className='w-full h-fit gap-2 md:w-full md:h-fit rounded flex flex-col mt-2'>
                      <span className='rounded p-2 text-xl mt-1 bg-gray-400'>{name}</span>
                      <span className='rounded p-2 text-xl mt-1 bg-gray-500'>{contact}</span>
                    </div>
                </div>

                          )
                    })
                  }
              

          </div>



  </section>
  )
}

export default Agent;
