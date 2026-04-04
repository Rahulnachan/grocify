import React, { useState } from 'react';
import Heading from './Heading';
import { FaHeart, FaRegHeart, FaPlus } from "react-icons/fa";
import products from '../Product';
import { Link } from 'react-router-dom';
import Button from './Button';

const Products = () => {
  const Categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [active, setActive] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // 👈 Pagination control

  // Filter products by category
  const filteredProducts =
    active === "All"
      ? products
      : products.filter((item) => item.category === active);

  // Pagination slice
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Toggle favorite
  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-[1400px] mx-auto py-20 px-5">
      <Heading highlight="Our" heading="Products" />

      {/* Category Tabs */}
      <div className="flex gap-4 justify-center flex-wrap mt-20">
        {Categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActive(category);
              setVisibleCount(8); // Reset count when category changes
            }}
            className={`text-lg px-5 py-2 rounded-lg transition ${active === category
              ? "bg-orange-500 text-white"
              : "bg-gray-100 hover:bg-orange-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 items-center justify-center">
        {visibleProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-6 text-center relative hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between h-full"
          >
            {/* Heart Icon */}
            <button
              onClick={() => toggleFav(item.id)}
              className="absolute top-4 left-4 text-red-500"
            >
              {favorites.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
            </button>

            {/* Plus Icon */}
            <button className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-md">
              <FaPlus />
            </button>

            {/* Product Image with Lazy Loading */}
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"  // 👈 Lazy loading added
              className="w-28 h-28 mx-auto object-contain mt-6"
            />

            {/* Name & Price */}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {item.name}
            </h3>
            <p className="text-gray-600 font-medium">₹{item.price.toFixed(2)}</p>

            {/* Button */}
            <Link
              to="/Order"
              state={{ product: item }}
              className="bg-orange-500 rounded-full px-6 py-2 font-bold text-white text-lg hover:scale-105 transition"
            >
              Shop Now
            </Link>          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredProducts.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount(visibleCount + 8)} // 👈 Load next 8
            className="bg-orange-400 rounded-full px-6 py-2 font-bold text-white text-lg hover:scale-105 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* View All Button */}
      <div className="mt-14 mx-auto w-fit">
        <Link
          to="/Allproduct"
          state={{ products: filteredProducts }}
          className="bg-orange-500 rounded-full px-6 py-2 font-bold text-white text-lg hover:scale-105 transition"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Products;
