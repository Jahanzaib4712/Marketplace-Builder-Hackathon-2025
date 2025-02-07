"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AddToCart() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">Checkout - Secure Your Helicopter</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium">Full Name</label>
            <input type="text" name="fullName" onChange={handleChange} className="w-full mt-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block text-lg font-medium">Email</label>
            <input type="email" name="email" onChange={handleChange} className="w-full mt-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block text-lg font-medium">Phone Number</label>
            <input type="tel" name="phone" onChange={handleChange} className="w-full mt-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block text-lg font-medium">Address</label>
            <input type="text" name="address" onChange={handleChange} className="w-full mt-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium">City</label>
              <input type="text" name="city" onChange={handleChange} className="w-full mt-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div>
              <label className="block text-lg font-medium">ZIP Code</label>
              <input type="text" name="zip" onChange={handleChange} className="w-full mt-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-400" required />
            </div>
          </div>
          <button type="submit" className="w-full p-3 mt-4 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
            Complete Purchase
          </button>
        </form>
      </div>
      {showPopup && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.8 }} 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="bg-white text-black p-8 rounded-lg shadow-lg text-center flex flex-col items-center"
          >
            <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
            <h2 className="text-xl font-bold">Successfully Added to Cart</h2>
            <p className="mt-2">Your helicopter has been added to your cart.</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
