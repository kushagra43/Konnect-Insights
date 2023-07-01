import React from "react";

const Integrations = () => {
  const imageSrc = [
    "Rectangle 39",
    "Rectangle 40",
    "Rectangle 41",
    "Rectangle 42",
    "Rectangle 43",
    "Rectangle 44",
    "Rectangle 46",
    "Rectangle 49",
    "Rectangle 50",
    "Rectangle 51",
    "Rectangle 52",
    "Rectangle 53",
    "Image 12",
    "Image 13",
    "Image 14",
    "Image 15",
    "Image 16",
    "Image 17",
    "Image 18",
  ];

  return (
    <div className="overflow-hidden bg-[#F4F4F4] pt-10 pb-5">
      <h3 className="font-medium text-center px-5 text-sm md:text-base uppercase">
        3000+ Integrations & 100% Data Coverage Across the Internet!
      </h3>
      <div className="flex gap-x-11 w-[4012px] animated-loop mt-5">
        <div className="flex gap-x-11 items-center justify-between">
          {imageSrc.map((item, index) => (
            <img src={`/Slider/${item}.png`} key={index}></img>
          ))}
        </div>
        <div className="flex gap-x-11 items-center justify-between">
          {imageSrc.map((item, index) => (
            <img src={`/Slider/${item}.png`} key={index}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;
