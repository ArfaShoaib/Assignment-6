import React from 'react'
import Image from 'next/image'

const Cources = () => {
  return (
    <div className='w-full h-screen'>
      <div className='w-[768px] h-[109px] mt-20 ml-[400px]'>
        <h1 className='font-Roboto text-[48px] font-bold'>Explore Courses By Category</h1>
        <p className='font-Roboto text-[18px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>
      <div className='mt-16'>
        <Image
        src={"/Content.png"}
        alt='img'
        width={1580}
        height={636}

        />
      </div>
      <div className='ml-[700px] mt-14'>
        <button className='font-Roboto text-[16px] leading-[24px] border border-black px-5 py-2 '>View All Cources</button>
      </div>
    </div>
  )
}

export default Cources
