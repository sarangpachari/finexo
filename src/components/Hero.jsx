import React from "react";
import HeroImg from "../assets/hero-bg.png";
import sliderImg from "../assets/slider-img.png";

const Hero = () => {
  return (
    <>
      <div className="relative h-lvh">
        <img src={HeroImg}  className="w-full h-lvh" alt="" />
        <div className="absolute top-0 left-0 w-full">
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="w-full p-8 md:w-1/2 h-full flex flex-col gap-8 ">
              <div className="max-w-[440px] flex flex-col gap-6 mx-auto">
                <h1 className="text-3xl md:text-5xl leading-tight tracking-widest font-bold text-[#FFFFFF]">
                  CRYPTO CURRENCY
                </h1>
                <p className="text-[#FEFEFE] text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  voluptas debitis, qui molestias quidem reiciendis nisi nulla
                  dolor consequuntur, excepturi blanditiis, perspiciatis ducimus
                  dicta. Rem tempora magni odio asperiores illum.
                </p>
                <button className="bg-[#00bbf0] text-[#FFFFFF] w-max py-2 px-8 text-md">
                  Read More
                </button>
              </div>
            </div>
            <div className="w-1/2 h-full">
              <img src={sliderImg} className="max-w-[550px] w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
