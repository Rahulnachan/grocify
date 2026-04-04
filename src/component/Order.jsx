// src/page/Order.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const product = location.state?.product; 

  if (!product) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        No product found. <Link to="/" className="text-orange-500">Go Back</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Order placed for ${product.name}!`);
  };

  return (
    <section className="max-w-[600px] mx-auto py-10 px-5 bg-white shadow-md rounded-2xl ">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">
        Order {product.name}
      </h2>

      {/* Product Info */}
      <div className="text-center mb-8">
        <img
          src={product.img}
          alt={product.name}
          className="w-32 h-32 mx-auto object-contain mb-3"
        />
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-gray-600">Price: ₹{product.price.toFixed(2)}</p>
      </div>

      {/* Order Form */}
      <form onSubmit={handleSubmit} className="space-y-5 border p-3 rounded-2xl">
        <div>
          <label className="block mb-1 text-gray-600 font-medium">Full Name</label>
          <input
            type="text"
            required
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-600 font-medium">Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>
         <div>
          <label className="block mb-1 text-gray-600 font-medium">Contact Number</label>
          <input
            type="tel"
            required
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-600 font-medium">Address</label>
          <textarea
            required
            placeholder="Enter your address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-300 min-h-[100px]"
          />
        </div>

       

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Place Order
        </button>
      </form>

      <div className="text-center mt-6">
        <Link to="/" className="text-orange-500 hover:underline">← Back to Home</Link>
      </div>
    </section>
  );
};

export default Order;
