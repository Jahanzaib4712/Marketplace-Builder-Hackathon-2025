"use client";

import React from 'react';
import { Helicopter } from '../app/types';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

interface HelicopterCardProps {
  helicopter: Helicopter;
}

const HelicopterCard = ({ helicopter }: HelicopterCardProps) => {
  // Check if the image exists before calling urlFor
  const imageUrl = helicopter.image ? urlFor(helicopter.image).url() : '';

  return (
    <div className="border p-6 rounded-lg h-[470px] w-[492px] m-10 shadow-lg hover:shadow-2xl ">
      <div className="w-full h-64 overflow-hidden rounded-md">
        {imageUrl ? (
          <img src={imageUrl} alt={helicopter.name} className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full flex justify-center items-center bg-gray-200 text-gray-600">
            No Image Available
          </div>
        )}
      </div>
      
      {/* Helicopter Details */}
      <div className="mt-4">
        <h2 className="text-xl font-bold">{helicopter.name}</h2>
        <p className="text-gray-600 text-sm mt-2">{helicopter.description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-green-500 font-semibold">${helicopter.price}</p>
          <span className="text-orange-500 font-medium">for Rent $500 / Hour</span>
        </div>
        <Link href={`/post/${helicopter._id} `}>
          <p className="block mt-4 text-blue-600 hover:underline">View Details</p>
        </Link>
      </div>
    </div>
  );
};

export default HelicopterCard;
