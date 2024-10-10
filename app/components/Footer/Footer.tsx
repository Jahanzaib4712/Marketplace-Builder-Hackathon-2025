import React from 'react'
import { FaBurger, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
      <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1
      md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start'>
        {/* 1st part */}
        <div>
            {/* burger logo */}
          <div className="flex items-center text-white space-x-2">
            <FaBurger className="w-[1.7rem] h-[1.7rem] sm:w-[1.7rem] sm:h-[1.7rem] text-orange-500" />
            <h1 className="text-xl sm:text-3xl font-bold text-white">BurgerBite</h1>
          </div>
          <p className='text-white text-opacity-60 mt-[0.4rem]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et cumque perspiciatis aut! Laudantium nam ea quisquam,
              aspernatur placeat?
             </p>
             <p className='mt-[1rem] text-white'>shahzaibnadeem521@gmail.com</p>
             <p className='text-red-300 text-[19px] font-bold'>+92-325-8908030</p>
        </div>
        {/* 2nd part */}
        <div>
            <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Products</h1>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit'>Chicken Burger</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit'>Beef Burger</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit'>Crispy Burger</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit'>Classic Burger</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit'>Delight Burger</p>
        </div>
        {/* 3rd part */}
        <div>
            <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Quick Link</h1>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit'>Home</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit'>About</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit'>Menu</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit'>Products</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit'>NewsLetter</p>
        </div>
        {/* 4th Part */}
        <div>
           <h1 className='text-[23px] font-semibold mb-[2rem] uppercase text-white'>
            Opening Hours
            </h1 >
            <p className='text-white text-[18px]'>
                Monday - Friday : <span className='text-yellow-300'>8am - 4pm</span>
                </p>
            <p className='text-white text-[18px]'>
                Saturday : <span className='text-yellow-300'>8am - 12am</span>
                </p>
                {/* social icons */}
                <div className='flex mt-[2rem] items-center space-x-6'> 
                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                       <FaFacebook className='w-[1.5rem] h-[1.5rem] text-blue-400'/>
                     </a>
                      <a href="https://www.instagram.com/__shahzaib_47__/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='w-[1.5rem] h-[1.5rem] text-red-400'/>
                      </a>
                     <a href="https://github.com/Jahanzaib4712" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='w-[1.5rem] h-[1.5rem] text-blue-300'/>
                     </a>
                </div>
        </div>
      </div>
      {/* copyright text */}
      <p className='text-center text-white opacity-50 mt-[1.5rem]'>
        Copyright © 2024 <span className='text-yellow-300'>Created by Shahzaib Nadeem</span>. All rights reserved
      </p>
    </div>
  )
}

export default Footer
