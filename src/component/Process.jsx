import React from "react";
import Heading from "./Heading";
import { FaLeaf } from "react-icons/fa";
import { 
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled 
} from "react-icons/tb";
import { PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

export const rahul = [
  {
    id: 1,
    Number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    disription: "It is a long established fact that a reader.",
    icon: <FaLeaf />,
  },
  {
    id: 2,
    Number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    disription: "It is a long established fact that a reader.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    Number: <TbCircleNumber3Filled />,
    title: "Quality Check",
    disription: "It is a long established fact that a reader.",
    icon: <SlBadge />,
  },
  {
    id: 4,
    Number: <TbCircleNumber4Filled />,
    title: "Delivery",
    disription: "It is a long established fact that a reader.",
    icon: <BsTruck />,
  },
];

const Process = () => {
  const renderSteps = rahul.map((item) => {
    return (
      <div
        key={item.id}
        className={`flex-1  ${item.id % 2===0 ?'md:-mt-100': ''}`}
      >
        <span className=" flex justify-center items-center mx-auto rounded-full text-white text-6xl mb-4 w-15 h-15 bg-gray-800 outline outline-3px outline-gray-500 outline-offset-6 outline-dashed">{item.Number}</span>

        <div className="flex  items-center mt-10 gap-x-5">
          <span className=" flex text-orange-600 text-3xl mb-3 justify-center
           items-center">{item.icon}</span>
           <div className=" flex-1">
          <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
          <p className="text-gray-600 mt-2">{item.disription}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-[1400px] mx-auto py-20">
        <div className="w-fit mr-auto mb-10">
          <Heading highlight="Our" heading="Process" />
        </div>

<div className="flex flex-col sm:flex-row flex-wrap md:mt-20 mt-10 items-center md:pt-40 gap-y-10">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;
