import React from 'react'

const Landing = () => {
  return (
    <section  className='bg-[#1c2230]'>
        <div className='container  '> 
          <div className=' element-center flex-col pt-[200px] '>
          <div className='w-[750px] max-w-full' >
                <img src="images/illustration-intro.png " alt=""  className='w-full h-fit'/>
            </div>

            <div className='text-white text-center'>
                <h1 className='text-[30px] font-semibold mb-[15px] md:text-[40px]'>
                All your files in one secure location,
                <br />
                accessible anywhere.
                </h1>
                <p className='font-normal text-lg px-[15px] md:w-[600px] max-w-full  pb-[15px]'>
                Fylo stores all your most important files in one secure location.
Access them wherever you need, share and collaborate with
friends family, and co-workers.
                </p>
            </div >
            <a className=' element-center btn w-[280px] h-[60px] rounded-[30px] text-white font-medium' href="">Get started</a>
          </div>

           

           
            </div>
            <div className='w-full h-[300px]'>
              
              <img className='w-full h-full' src="images/bg-curvy-mobile.svg" alt="" />
            </div>
        
    </section>
  )
}

export default Landing