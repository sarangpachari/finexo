import React from "react";
import aboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <>
      <div className="bg-[#00204A] p-5 xl:h-lvh h-full py-20">
        {/* HEADING */}
        <div className="flex flex-col justify-center items-center gap-3 my-10">
          <h1 className="text-white text-center text-2xl md:text-4xl tracking-tight font-semibold">
            About <span className="text-[#00bbf0]">Us</span>
          </h1>
          <p className="text-white text-center text-lg font-normal tracking-tight">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
        {/*ABOUT CONTENTS */}
        <div className="flex w-full md:flex-row flex-col gap-10 mt-10">
          {/* IMAGE */}
          <div className="md:w-1/2 flex justify-end">
            <img src={aboutImg} className="md:max-w-[580px] w-full" alt="" />
          </div>
          {/* TEXT CONTENT */}
          <div className="md:w-1/2 flex gap-5 flex-col justify-center items-start ">
            <p className="text-white text-3xl font-semibold">We Are Finexo</p>
            <p className="md:w-3/4 text-white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <p className="md:w-3/4 text-white">
              Molestiae odio earum non qui cumque provident voluptates,
              repellendus exercitationem, possimus at iste corrupti officiis
              unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab
              omnis quasi expedita.
            </p>
            <button className="bg-[#00bbf0] text-[#FFFFFF] w-max py-2 px-10 text-md">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
