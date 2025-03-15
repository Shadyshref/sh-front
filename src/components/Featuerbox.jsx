import React from 'react'

const Featuerbox = ({icon,desc,title}) => {
  return (
    <div className='text-white element-center flex-col text-center'>
        <img className='w-[80px] h-[80px] object-contain' src={icon} alt="" />
        <h4 className='text-lg font-semibold my-[15px]'>{title}</h4>
        <p className=' font-normal text-sm'>{desc}</p>
    </div>
  )
}

export default Featuerbox