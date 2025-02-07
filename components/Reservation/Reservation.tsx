"use client";


import React, { useState, useEffect } from 'react';
import { BiPhone } from 'react-icons/bi';
import { MdOutlineFlightTakeoff } from 'react-icons/md';
// import { GiHelicopter } from 'react-icons/gi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { client } from '@/sanity/lib/client';
import { Helicopter } from '@/app/types';
import HelicopterCard from '@/components/helicoptercard';







const Reservation = () => {
  const [hours, setHours] = useState(1);
  const ratePerHour = 500;
  const totalAmount = hours * ratePerHour;
  const [helicopters, setHelicopters] = useState<Helicopter[]>([]);



  useEffect(() => {
    client.fetch(`*[_type == "helicopter"]`).then((data) => {
      setHelicopters(data);
    });
  }, []);


  return (
    <div className="pt-[5rem] bg-center bg-cover relative mt-[2rem] pb-[5rem] mb-[3rem] bg-[url('/images/heliroyale-bg.jpg')] text-blue-400">
      {/* Overlay */}
      <div className='absolute w-full h-full bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 opacity-80 top-0 left-0'></div>

      {/* Helicopter Showcase */}
      <div className='relative z-20 max-w-5xl mx-auto mt-10'>
        <h2 className='text-center text-[40px] font-bold text-yellow-400 mb-6'>Our Premium Helicopters</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 2,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className='w-full'
        >
          {helicopters.map((helicopter, index) => (
            <SwiperSlide key={index} className='flex justify-center mb-[88px]'>
              <div className='w-[400px] h-[530px] bg-yellow-400 text-yellow-400 rounded-xl shadow-xl flex flex-col items-center p-4'>
                <div className='w-[490px] h-[500px] pb-4 bg-gray-900 text-yellow-400 rounded-xl shadow-xl flex flex-col items-center mb-4 p-4'>               
                    <HelicopterCard key={helicopter._id} helicopter={helicopter} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Booking Section */}
      <div className='w-[90%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem] p-[3rem] border border-yellow-400 rounded-2xl shadow-2xl backdrop-blur-xl bg-gray-900 bg-opacity-85 mt-10'>
        {/* Text Content */}
        <div>
          <h1 className='text-[36px] md:text-[50px] lg:text-[60px] text-yellow-400 font-extrabold leading-[4rem] md:leading-[4.5rem] tracking-wider'>
            Premium Helicopter Rental
          </h1>
          <p className='text-[18px] md:text-[20px] mt-[1.5rem] text-gray-300 leading-relaxed'>
            Elevate your experience with our luxurious helicopter rentals. Whether for business or leisure, enjoy top-tier service and safety.
          </p>
          <div className='flex mt-[2rem] md:mt-[3rem] items-center space-x-6'>
            <div className='w-[4rem] h-[4rem] md:w-[4.5rem] md:h-[4.5rem] bg-blue-400 rounded-full flex items-center justify-center shadow-xl'>
              <BiPhone className='w-[2rem] h-[2rem] md:w-[2.2rem] md:h-[2.2rem] text-white' />
            </div>
            <div>
              <h1 className='text-[22px] md:text-[24px] text-yellow-400 font-semibold'>24/7 VIP Bookings</h1>
              <h1 className='text-blue-400 text-[28px] md:text-[32px] font-extrabold'>+92-325-8908030</h1>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className='bg-gray-800 p-[2.5rem] md:p-[3rem] rounded-2xl shadow-xl w-full border border-blue-400'>
          <h2 className='text-[28px] md:text-[30px] font-bold text-yellow-400 mb-[1.5rem]'>Book Your Helicopter</h2>
          <label className='text-[16px] md:text-[18px] font-semibold text-gray-300'>Select Hours:</label>
          <input
            type='number'
            min='1'
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className='w-full p-3 mt-2 border rounded-md text-gray-900 bg-yellow-400 focus:ring-2 focus:ring-blue-400 focus:outline-none'
          />
          <h3 className='mt-[1.5rem] text-[20px] md:text-[22px] font-semibold text-gray-300'>Total Rent: <span className='text-blue-400 font-bold'>${totalAmount}</span></h3>
          <button className='mt-[2rem] w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-bold hover:bg-blue-500 transition flex items-center justify-center space-x-2 shadow-lg'>
            <MdOutlineFlightTakeoff className='text-[22px] md:text-[24px]' />
            <span>Reserve Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
