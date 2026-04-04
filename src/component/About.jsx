import React from "react";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">
        About Us
      </h1>
      <p className="text-gray-700 leading-relaxed text-lg">
        Welcome to <span className="font-semibold text-orange-500">Rahul Grocfiy</span> — 
        your trusted online grocery store! 🍅🥬🥛
      </p>

      <p className="mt-4 text-gray-600">
        We deliver the freshest fruits, vegetables, dairy products, and seafood 
        straight from farms and trusted suppliers. Our mission is to make 
        healthy and quality products accessible to everyone with fast delivery 
        and affordable prices.
      </p>

      <p className="mt-4 text-gray-600">
        Thank you for choosing us! ❤️
      </p>
    </section>
  );
};

export default About;
