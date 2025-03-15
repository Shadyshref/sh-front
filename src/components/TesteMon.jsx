import React, { useState } from 'react'
import TesteMonbox from './TesteMonbox'

const TesteMon = () => {
    const[data,setData]=useState([
        {
            id:1,
            title:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            image:"images/profile-1.jpg",
            name:"Satish Patel",
            position:"Founder & CEO, Huddle"

        },
        {
            id:2,
            title:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            image:"images/profile-2.jpg",
            name:"Bruce McKenzie",
            position:"Founder & CEO, Huddle"

        },
        {
            id:3,
            title:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            image:"images/profile-3.jpg",
            name:"Iva Boyd",
            position:"Founder & CEO, Huddle"

        },

    ])
  return (
    <section className='pb-[150px]'>
        <div className='container relative '>
            <div className=' absolute left-[20px] top-[-35px]'>
                <img  src="images/bg-quotes.png" alt="" />

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10'>    
                {data.map((item)=>(
                    <TesteMonbox key={item.id} title={item.title} image={item.image} name={item.name} position={item.position} />

                ))}
            </div>

        </div>
    </section>
    
    
  )
}

export default TesteMon


