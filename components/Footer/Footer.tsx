import React from 'react';
import { FaHelicopter, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
      <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1
      md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start'>
        {/* 1st part */}
        <div>
          {/* HeliRoyale logo */}
          <div className='flex items-center text-white space-x-2'>
            <FaHelicopter className='w-[1.7rem] h-[1.7rem] text-blue-500' />
            <h1 className='text-xl sm:text-3xl font-bold text-white'>HeliRoyale</h1>
          </div>
          <p className='text-white text-opacity-60 mt-[0.4rem]'>
            Experience the thrill of premium helicopter rides with HeliRoyale. Luxury, comfort, and safety in the skies.
          </p>
          <p className='mt-[1rem] text-white'>contact@heliroyale.com</p>
          <p className='text-blue-300 text-[19px] font-bold'>+92-325-8908030</p>
        </div>
        {/* 2nd part */}
        <div>
          <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Services</h1>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-blue-300 transition-all duration-200 cursor-pointer w-fit'>Luxury Rides</p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-blue-300 transition-all duration-200 cursor-pointer w-fit'>Aerial Tours</p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-blue-300 transition-all duration-200 cursor-pointer w-fit'>Corporate Travel</p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-blue-300 transition-all duration-200 cursor-pointer w-fit'>VIP Transport</p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-blue-300 transition-all duration-200 cursor-pointer w-fit'>Emergency Evacuation</p>
        </div>
        {/* 3rd part */}
        <div>
          <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Quick Links</h1>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-blue-300 transition-all duration-200 cursor-pointer w-fit'>Home</p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-blue-300 transition-all duration-200 cursor-pointer w-fit'>About Us</p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-blue-300 transition-all duration-200 cursor-pointer w-fit'>Fleet</p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-blue-300 transition-all duration-200 cursor-pointer w-fit'>Booking</p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-blue-300 transition-all duration-200 cursor-pointer w-fit'>Contact</p>
        </div>
        {/* 4th part */}
        <div>
          <h1 className='text-[23px] font-semibold mb-[2rem] uppercase text-white'>Operating Hours</h1>
          <p className='text-white text-[18px]'>
            Monday - Friday : <span className='text-blue-300'>8 AM - 6 PM</span>
          </p>
          <p className='text-white text-[18px]'>
            Saturday - Sunday : <span className='text-blue-300'>9 AM - 10 PM</span>
          </p>
          {/* Social Icons */}
          <div className='flex mt-[2rem] items-center space-x-6'>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='w-[1.5rem] h-[1.5rem] text-blue-500' />
            </a>
            <a href='https://www.instagram.com/__shahzaib_47__/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='w-[1.5rem] h-[1.5rem] text-red-400' />
            </a>
            <a href='https://github.com/Jahanzaib4712' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='w-[1.5rem] h-[1.5rem] text-gray-300' />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright text */}
      <p className='text-center text-white opacity-50 mt-[1.5rem]'>
        Copyright © 2024 <span className='text-yellow-400'>Created by Shahzaib Nadeem</span>. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;