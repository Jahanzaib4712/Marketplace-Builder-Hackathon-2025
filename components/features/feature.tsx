import React from "react";
import Img1 from "@/public/images/helicopters224.jpeg";
import Img2 from "@/public/images/helicopters225.jpeg";
import Img3 from "@/public/images/helicopters226.jpg";
import Image from "next/image";
const Feature = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-[#23272A]">
            {/* Heading */}
            <h1 className="heading">
                <span className="text-blue-400">
            FLY WITH  <br /> CONFIDENCE & </span>
                <span className="text-yellow-400"> CONTROL</span> {/* Optional styling */}
            </h1>
            {/* Cards */}
            <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
                {/* 1st Card */}
                <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                    <div className="p-6 bg-black hover:bg-blue-600 rounded-lg transition-all duration-200">
                        <Image src={Img1} alt="burger" className="rounded-3xl" /> 
                        <h1 className="mt-[1.5rem] text-center text-[24px] text-white font-semibold">Our Helicopters</h1>
                        <p className="mt-[0.2rem] text-white text-opacity-60 text-center ">
                        Discover a fleet of state-of-the-art helicopters designed for speed, safety, and efficiency. Whether for personal luxury, business, or adventure, our helicopters ensure top-tier performance and comfort.
                        </p>
                    </div>
                </div>
                {/* 2nd Card */}
                <div 
                data-aos="zoom-in" 
                data-aos-delay="200" 
                data-aos-anchor-placement="top-center">
                    <div className="p-6 bg-black hover:bg-blue-600 lg:translate-y-[3rem] rounded-lg transition-all duration-200">
                        <Image src={Img2} alt="burger" className="rounded-3xl" />
                        <h1 className="mt-[1.5rem] text-center text-[24px] text-white font-semibold">
                        Your Opinion Matters
                        </h1>
                        <p className="mt-[0.2rem] text-white text-opacity-60 text-center ">
                        We believe in innovation driven by customer feedback. Customize your helicopter with cutting-edge technology, premium interiors, and advanced safety features tailoblue 4o your needs.
                        </p> 
                    </div>
                </div>
                {/* 3rd Card */}
                <div 
                data-aos="fade-right" 
                data-aos-delay="400" 
                data-aos-anchor-placement="top-center">
                    <div className="p-6 bg-black hover:bg-blue-600 rounded-lg transition-all duration-200">
                        <Image src={Img3} alt="burger" className="rounded-3xl" />
                        <h1 className="mt-[1.5rem] text-center text-[24px] text-white font-semibold">
                        Special Editions
                        </h1>
                        <p className="mt-[0.2rem] text-white text-opacity-60 text-center ">
                        Explore our exclusive collection of high-performance helicopters with limited edition designs, enhanced aerodynamics, and futuristic cockpit controls for the ultimate flying experience.
                        </p> 
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Feature;



