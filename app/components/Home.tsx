"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Feature from "./features/feature";
import PopularBurger from "./PopularBurger/PopularBurger";
import Delivery from "./Delivery/Delivery";
import Team from "./Team/Team";
import Reservation from "./Reservation/Reservation";
import NewsLetter from "./Newsletter/NewsLetter";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Home = () => {

    useEffect(() => {

        const initAOS = async ()=> {
            await import('aos');
            AOS.init({
                duration:1000,
                easing:'ease',
                once:true,
                anchorPlacement: "top-center",
            }

            )
        
        }
        initAOS();
        
    },[]);




    return (
        <div className="overflow-hidden">
            <Hero/>
            <Feature/>
            <PopularBurger/>
            <Delivery/>
            <Team/>
            <Reservation/>
            <NewsLetter/>
        </div>
    )
}
export default Home;