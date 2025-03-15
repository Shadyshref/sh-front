import React from 'react'

const TesteMonbox = ({title, image, name, position}) => {
  return (
    <div className='text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c2230]'>
        <div>
          <p className='text-sm font-normal tracking-[0.8px] mb-[30px]'>{title}</p>  
        </div>
        <div className=' flex items-center gap-[15px]'>
            <img className='w-[50px] h-[50px] object-contain rounded-full' src={image} alt="" />
            <div>
                <strong className=' block mb-[5px]'>{name}</strong>
                <p className=' font-normal text-sm'>{position}</p>
            </div>
        </div>
      
    </div>
  )
}

export default TesteMonbox
