import React from 'react'

const GetStarted = () => {
  return (
    <section>

    <div className='container relative'>
        <div className=' bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[150px] rounded-[5px] element-center flex-col w-[865px] min-h-[260px] max-w-full text-white  text-center p-[30px]'>
            <h3 className=' text-[25px] md:text-[35px] font-semibold'>Get early access today</h3>
            <p className=' w-[670px] max-w-full mx-auto mb-[30px]'>

            It only takes minute to sign up and our free starter tier is extremely generous. If you have any
questions, our support team would be happy to help you.</p>
<form className=' w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px] ' action="">
<input className=' bg-white text-black w-full md:w-[300px] md:flex-1 h-[50px] text-sm font-medium border-none outline-none  pl-[30px] rounded-4xl ' type="email" placeholder='Johnappleseed#mall.com' />
<button className=' w-full md:w-[200px] h-[50px] btn md:h-[50px] rounded-4xl  ' type='submit'>Get Started For Free</button>

</form>

        </div>
      
    </div>
    </section>
  )
}

export default GetStarted
