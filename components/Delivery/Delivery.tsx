import Image from 'next/image'
import React from 'react'
import HelicopterImg1 from '@/public/images/helicopterImage1.jpg';
import { RiEBike2Fill } from "react-icons/ri";
import { IoMdAirplane } from "react-icons/io";
import { BiSolidDoorOpen } from 'react-icons/bi';

const Delivery = () => {
  return (
    <div className='pt-[8rem] pb-[3rem] bg-[#0A0F1F] text-white'>
      <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
        {/* Image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <Image src={HelicopterImg1} alt='Helicopter Service 'className='rounded-lg' />
        </div>
        {/* Text Content */}
        <div>
            <h1 className='text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem]
            md:leading-[4rem] text-blue-400'>
              Your <span className='text-yellow-400'>Elite Helicopter</span> Experience
            </h1>
            <p className='mt-[2rem] text-gray-300 text-[17px]'>
                Experience the fastest and most luxurious air transport with <b>HeliRoyale</b>. 
                Our helicopters ensure <b>on-time, safe, and comfortable</b> travel for business executives, VIPs, 
                and travelers who value <b>efficiency and excellence</b>.
            </p>
            <div className='flex items-center space-x-3 mt-[2rem]'>
                <IoMdAirplane className='w-[2rem] h-[2rem] text-yellow-400' />
                <h1 className='text-[18px] font-medium'>Premium Air Transport Service</h1>
            </div>
            <div className='flex items-center space-x-3 mt-[1rem]'>
                <RiEBike2Fill className='w-[2rem] h-[2rem] text-yellow-400' />
                <h1 className='text-[18px] font-medium'>Swift Travel with VIP Comfort</h1>
            </div>
            <div className='flex items-center space-x-3 mt-[1rem]'>
                <BiSolidDoorOpen className='w-[2rem] h-[2rem] text-yellow-400' />
                <h1 className='text-[18px] font-medium'>Direct Landing at Exclusive Locations</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
