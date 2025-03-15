import React from 'react'

const StayPro = () => {
  return (
    <section className='pb-[150px]'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center'>
            <div>

            <img src="images/illustration-stay-productive.png" alt="staypro-img" />
            </div>
        <div className='text-white'>

            <h3 className='font-medium text-[35px] leading-[50px]' >
            Stay productive,
            <br />
            wherever you are
            </h3>
        <div className='my-[15px] font-normal text-sm tracking-[0.8px]'>
            <p className='mb-[15px]'>Never let location be an issue when accessing your files. Fylo has you
                <br />
            covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live
                <br />
            collaboration. No email attachments required.</p>
        </div>
        <a  className='text-drimar   hover:text-[#54ddeb] transition-colors decoration-200 border-b-2 border-drimar border-solid pb-[5px]  flex items-center gap-[15px] w-fit' href="">See how fylo works
            <img  className='animate-change w-[20px] h-[20px] object-contain' src="images/icon-arrow.svg" alt="" />
        </a>

        </div>
        </div>

        
    </section>
  )
}

export default StayPro