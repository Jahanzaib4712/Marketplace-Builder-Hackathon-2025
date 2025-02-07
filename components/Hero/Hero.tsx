"use client"

import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import helicopterImage1 from "@/public/images/pexels-mickael-o-neill-412105556-17751809.jpg";
import Image from "next/image";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dark Overlay */}
      <div 
        className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${isHovered ? "bg-black/60" : "bg-black/40"} z-10`}
      ></div>
      
      <Image
        src={helicopterImage1}
        width={1400}
        height={600}
        alt="helicopter-back-img"
        className="w-full h-screen object-cover transition-all duration-500"
      />

      {/* Headlights Effect */}
      <div
        className={`absolute top-[42%] left-[46%] w-12 h-12 bg-yellow-400 opacity-0 blur-md rounded-full transition-opacity duration-500 ${isHovered ? "opacity-90" : "opacity-0"} z-20`}
      ></div>
      <div
        className={`absolute top-[42%] left-[54%] w-12 h-12 bg-yellow-400 opacity-0 blur-md rounded-full transition-opacity duration-500 ${isHovered ? "opacity-90" : "opacity-0"} z-20`}
      ></div>
    </div>
  );
};

export default Hero;
