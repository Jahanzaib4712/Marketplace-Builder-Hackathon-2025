import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HelicopterCard from "@/components/helicoptercard";
import { client } from '@/sanity/lib/client';
import { Helicopter } from '@/app/types';

const PopularHelicopters = () => {
  const [helicopters, setHelicopters] = useState<Helicopter[]>([]);

  useEffect(() => {
    const fetchHelicopters = async () => {
      try {
        const data = await client.fetch(`*[_type == "helicopter"]`);
        setHelicopters(data);
      } catch (error) {
        console.error("Error fetching helicopters:", error);
      }
    };

    fetchHelicopters();
  }, []);

  return (
    <div className="pt-[3rem] pb-[3rem] text-center">
      <h1 className="heading">
        <span className="text-blue-400">
        Our Popular </span> <span className="text-yellow-400">Helicopters</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3, slidesToSlide: 1 },
            tablet: { breakpoint: { max: 1324, min: 764 }, items: 2, slidesToSlide: 1 },
            mobile: { breakpoint: { max: 764, min: 0 }, items: 1, slidesToSlide: 1 },
          }}
          itemClass="item"
          showDots={false}
        >
          {helicopters.map((helicopter) => (
            <HelicopterCard key={helicopter._id} helicopter={helicopter} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularHelicopters;
