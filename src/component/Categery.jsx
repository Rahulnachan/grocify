import React from "react";
import Heading from "./Heading";
import { categories } from "../category";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <Heading highlight="Shop" heading="by Category" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {categories.slice(0, 3).map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-3 p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Category;