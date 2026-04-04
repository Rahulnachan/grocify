import React from "react";
import Heading from "./Heading";
import Basket from "../assets/full-basket-vegetable.png";
import { FaRegHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";

const values = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaRegHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];

const Values = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-16 px-6">
      {/* Heading */}
      <Heading highlight="Our " heading="Values" />

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-10 items-center mt-10">
        {/* Left column */}
        <div className="space-y-20 ">
          {values.slice(0, 2).map((item) => (
            <div key={item.id} className="flex items-center gap-5">
              <div className="bg-orange-500 text-white text-2xl h-12 w-12 flex rounded-full justify-center items-center shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
                <p className="text-gray-500 text-sm max-w-[250px]">{item.para}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center image */}
        <div className="flex justify-center">
          <img
            src={Basket}
            alt="Basket"
            className="w-[280px] md:w-[350px] lg:w-[420px] object-contain"
          />
        </div>

        {/* Right column */}
        <div className="space-y-20">
          {values.slice(2, 4).map((item) => (
            <div key={item.id} className="flex items-center gap-5">
              <div className="bg-orange-500 text-white text-2xl h-12 w-12 flex rounded-full justify-center items-center shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
                <p className="text-gray-500 text-sm max-w-[250px]">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
