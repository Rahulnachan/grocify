import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaRegHeart, FaPlus } from "react-icons/fa";

const AllProduct = () => {
  const location = useLocation();
  const products = location.state?.products || [];

  return (
    <section className="max-w-[1200px] mx-auto py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-md p-5 text-center hover:shadow-lg transition"
            >
              {/* Heart Icon */}
              <button className="absolute top-3 left-3 text-red-500 text-lg">
                <FaRegHeart />
              </button>

              {/* Plus Icon */}
              <button className="absolute top-3 right-3 bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600">
                <FaPlus />
              </button>

              {/* Product Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-28 h-28 object-contain mx-auto mb-4"
              />

              {/* Product Details */}
              <h3 className="text-lg font-semibold text-gray-800 capitalize">{item.name}</h3>
              <p className="text-gray-600 mb-4">₹{item.price.toFixed(2)}</p>

              {/* Shop Now Button */}
              <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-full w-full hover:bg-orange-600 transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <Link
          to="/"
          className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default AllProduct;
