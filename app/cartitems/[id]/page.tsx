"use client"


import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, X, Plus, Minus, Trash } from "lucide-react";

export default function CartSection() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Helicopter A", price: 500000, quantity: 1 },
    { id: 2, name: "Helicopter B", price: 750000, quantity: 1 },
  ]);

  const increaseQuantity = (id : any) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id : any) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id: any) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <button onClick={() => setCartOpen(true)} className="fixed top-4 right-4 bg-yellow-400 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
        <ShoppingCart className="w-6 h-6 text-gray-900" />
      </button>

      {cartOpen && (
        <motion.div 
          initial={{ x: 300 }} 
          animate={{ x: 0 }} 
          exit={{ x: 300 }} 
          className="fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-lg p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-yellow-400">Your Cart</h2>
            <button onClick={() => setCartOpen(false)} className="text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="p-4 bg-gray-700 rounded-lg mb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    <p className="text-gray-300">${item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => decreaseQuantity(item.id)} className="bg-blue-400 p-2 rounded-full shadow-lg hover:bg-blue-500">
                        <Minus className="w-5 h-5 text-white" />
                      </button>
                      <span className="text-white font-bold">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)} className="bg-blue-400 p-2 rounded-full shadow-lg hover:bg-blue-500">
                        <Plus className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="bg-red-500 p-2 rounded-full shadow-lg hover:bg-red-600">
                    <Trash className="w-5 h-5 text-white" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">Your cart is empty.</p>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
