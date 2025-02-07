import React from "react";
import Link from "next/link";
import { BiCycling, BiShoppingBag } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import HeliRoyaleLogo from "@/public/images/single.svg";



export default function Nav() {


  return (
    <div className="h-[12vh] bg-white relative">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <Image src={HeliRoyaleLogo} alt="helicopter logo" className="w-[240px] h-[240px] sm:w-[240px] sm:h-[240px]" />
          <h1 className="text-l sm:text-3xl font-bold text-black-600">HeliRoyale.</h1>
        </div>
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[20px] font-medium hover:text-red-600"><Link href="/">Home</Link></li>
          <li className="text-[20px] font-medium hover:text-red-600"><Link href="/">Shop</Link></li>
          <li className="text-[20px] font-medium hover:text-red-600"><Link href="/">Menu</Link></li>
          <li className="text-[20px] font-medium hover:text-red-600"><Link href="/">Blog</Link></li>
          <li className="text-[20px] font-medium hover:text-red-600"><Link href="/">Contact</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 sm:px-6 sm:py-3 text-[12px] sm:text-[16px] bg-blue-400 transition-all duration-200 hover:bg-blue-600 flex items-center rounded-md space-x-2 text-white">
            <BiCycling className="w-[1.2rem] h-[1.3rem] sm:w-[1.5rem] sm:h-[1.5rem]" />
            <span className="font-bold">Order Now</span>
          </button>
          <button className="px-4 py-2 sm:px-6 sm:py-3 hover:bg-yellow-700 transition-all duration-200 bg-yellow-400 flex items-center rounded-md text-white relative z-20">
            <BiShoppingBag className="w-[1.2rem] h-[1.2rem] sm:w-[1.5rem] sm:h-[1.5rem]" />
          </button>
          <HiBars3BottomRight  className="lg:hidden w-[2rem] h-[2rem] text-black" />
        </div>
      </div>
    </div>
  );
}


