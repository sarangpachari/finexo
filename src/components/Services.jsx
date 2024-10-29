import React from "react";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

const Services = () => {
  return (
    <>
      <div className="p-5 mt-5 md:mt-10">
        {/* HEADING */}
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-[#0C0C0C] text-center text-2xl md:text-4xl tracking-tight font-semibold">
            Our <span className="text-[#00bbf0]">Services</span>
          </h1>
          <p className="text-center text-lg font-normal tracking-tight">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
        {/* SERVICES CARDS */}
        <div className="w-full flex justify-center items-center py-16">
          <div className="flex gap-8 flex-col md:flex-row">
            <div className="max-w-96 flex flex-col justify-center items-center gap-3 p-8 bg-[#F8F8F9] ">
              <img src={s1} width={"75px"} alt="" />
              <p className="font-bold text-xl text-center">CURRENT WALLET</p>
              <p className="text-center">
                fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using
              </p>
              <button>Read More</button>
            </div>
            <div className="max-w-96 flex flex-col justify-center items-center gap-3 p-8 bg-[#F8F8F9] ">
              <img src={s2} width={"75px"} alt="" />
              <p className="font-bold text-xl text-center">SECURITY STORAGE</p>
              <p className="text-center">
                fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using
              </p>
              <button>Read More</button>
            </div>
            <div className="max-w-96 flex flex-col justify-center items-center gap-3 p-8 bg-[#F8F8F9] ">
              <img src={s3} width={"75px"} alt="" />
              <p className="font-bold text-xl text-center">EXPERT SUPPORT</p>
              <p className="text-center">
                fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
        {/* VIEW ALL BUTTON */}
        <div className="text-center">
          <button className="bg-[#00bbf0] text-[#FFFFFF] w-max py-3 px-10 text-md">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
