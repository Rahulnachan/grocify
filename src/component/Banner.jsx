import React from "react";

const Banner = ({ title }) => {
  return (
    <div className="bg-orange-500 text-white py-12 mt-20 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
};

export default Banner;
