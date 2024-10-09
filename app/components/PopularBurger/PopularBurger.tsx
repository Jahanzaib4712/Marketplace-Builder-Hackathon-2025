"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,  // Reduce this to 3 items to prevent overlap
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,  // 1 item for mobile to avoid overlap
      slidesToSlide: 1,
    },
  };



  const PopularBurger = () => {
    return (
        <div className="pt-[3rem] pb-[3rem] text-center">
    <h1 className="heading">
      Our Popular <span className="text-red-600">Burger</span>
    </h1>
    <div className="w-[80%] mt-[4rem] mx-auto">
      <Carousel 
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
        showDots={false}
      >
        <BurgerCard title="Beefy Bite" image="/images/b1.png" reviews="6" price="10.88$"/>
        <BurgerCard title="Cheesy Delight" image="/images/b2.png" reviews="8" price="12.50$" />
        <BurgerCard title="Spicy Inferno" image="/images/b3.png" reviews="5" price="11.25$" />
        <BurgerCard title="Chicken Crunch" image="/images/b4.png" reviews="7" price="9.99$" />
        <BurgerCard title="Vegan Burger" image="/images/b5.png" reviews="4" price="8.50$" />
        <BurgerCard title="BBQ Bacon" image="/images/b6.png" reviews="9" price="13.00$" />
        <BurgerCard title="Classic Cheeseburger" image="/images/b7.png" reviews="10" price="10.00$" />
        <BurgerCard title="Mushroom Swiss" image="/images/b8.png" reviews="3" price="11.50$" />
        <BurgerCard title="Crispy Chicken" image="/images/b9.png" reviews="12" price="12.00$" />
      </Carousel>
    </div>
</div>
    );
};
export default PopularBurger;
