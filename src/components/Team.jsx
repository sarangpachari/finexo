import React from "react";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <div className="h-full bg-[#00204A] py-20 px-5">
        {/* HEADING */}
        <div className="flex flex-col justify-center items-center gap-3 ">
          <h1 className="text-white text-center text-2xl md:text-4xl tracking-tight font-semibold">
            Our <span className="text-[#00bbf0]">Team</span>
          </h1>
        </div>
        {/* TEAM MEMBERS FULL DIV */}
        <div className="w-full flex justify-center items-center py-10">
          {/* TEAM CARDS DIV */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
            {/* TEAM CARD */}
            <div className="bg-[#2a6bc12b] flex flex-col gap-5 justify-center items-center w-max p-8">
              {/* IMAGE AND TEXTS */}
              <div className=" flex flex-col justify-center items-center">
                <img
                  src={team1}
                  width={"120px"}
                  className="border-4 rounded-full"
                  alt=""
                />
                <p className="text-[#00BBF0] text-xl font-medium mt-8">Joseph Brown</p>
                <p className="text-white mt-1">Marketing Head</p>
              </div>
              {/* CARD ICONS */}
              <div className="flex w-full gap-8 justify-center mt-3">
                <FaFacebookF className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaLinkedinIn className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaXTwitter className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaInstagram className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaYoutube className="text-white text-2xl hover:text-[#00BBF0]" />
              </div>
            </div>
            {/* TEAM CARD */}
            <div className="bg-[#2a6bc12b] flex flex-col gap-5 justify-center items-center w-max p-8">
              {/* IMAGE AND TEXTS */}
              <div className=" flex flex-col justify-center items-center">
                <img
                  src={team2}
                  width={"120px"}
                  className="border-4 rounded-full"
                  alt=""
                />
                <p className="text-[#00BBF0] text-xl font-medium mt-8">Nancy White</p>
                <p className="text-white mt-1">Marketing Head</p>
              </div>
              {/* CARD ICONS */}
              <div className="flex w-full gap-8 justify-center mt-3">
                <FaFacebookF className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaLinkedinIn className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaXTwitter className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaInstagram className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaYoutube className="text-white text-2xl hover:text-[#00BBF0]" />
              </div>
            </div>
            {/* TEAM CARD */}
            <div className="bg-[#2a6bc12b] flex flex-col gap-5 justify-center items-center w-max p-8">
              {/* IMAGE AND TEXTS */}
              <div className=" flex flex-col justify-center items-center">
                <img
                  src={team3}
                  width={"120px"}
                  className="border-4 rounded-full"
                  alt=""
                />
                <p className="text-[#00BBF0] text-xl font-medium mt-8">Earl Martinez</p>
                <p className="text-white mt-1">Marketing Head</p>
              </div>
              {/* CARD ICONS */}
              <div className="flex w-full gap-8 justify-center mt-3">
                <FaFacebookF className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaLinkedinIn className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaXTwitter className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaInstagram className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaYoutube className="text-white text-2xl hover:text-[#00BBF0]" />
              </div>
            </div>
            {/* TEAM CARD */}
            <div className="bg-[#2a6bc12b] flex flex-col gap-5 justify-center items-center w-max p-8">
              {/* IMAGE AND TEXTS */}
              <div className=" flex flex-col justify-center items-center">
                <img
                  src={team4}
                  width={"120px"}
                  className="border-4 rounded-full"
                  alt=""
                />
                <p className="text-[#00BBF0] text-xl font-medium mt-8">Josephine Allard</p>
                <p className="text-white mt-1">Marketing Head</p>
              </div>
              {/* CARD ICONS */}
              <div className="flex w-full gap-8 justify-center mt-3">
                <FaFacebookF className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaLinkedinIn className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaXTwitter className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaInstagram className="text-white text-2xl hover:text-[#00BBF0]" />
                <FaYoutube className="text-white text-2xl hover:text-[#00BBF0]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
