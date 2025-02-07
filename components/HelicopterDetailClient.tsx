"use client";
import { useCart } from "./CardContext";
import { Helicopter } from "@/app/types";

interface HelicopterDetailClientProps {
  helicopter: Helicopter;
}

const HelicopterDetailClient = ({ helicopter }: HelicopterDetailClientProps) => {
  const { addToCart } = useCart();

  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <button onClick={() => addToCart(helicopter)} className="w-[240px] h-10 font-bold bg-white text-black rounded hover:bg-slate-600">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default HelicopterDetailClient;