import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="h-full bg-[#00204A] text-white mt-20 px-5 py-20">
        <div className="flex lg:flex-row flex-col justify-center gap-10">
          {/* SECTION 1 */}
          <div className="flex flex-col gap-3 w-64">
            <h1 className="text-2xl font-medium">Address</h1>
            <h2 className="flex items-center gap-2">
              <FaLocationDot />
              Location
            </h2>
            <h2 className="flex items-center gap-2">
              <FaPhone />
              Call +01 1234567890
            </h2>
            <h2 className="flex items-center gap-2">
              <IoMail />
              demo@gmail.com
            </h2>
            <div className="flex gap-5 mt-4">
              <FaFacebookF className="text-2xl" />
              <FaLinkedinIn className="text-2xl" />
              <FaXTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
            </div>
          </div>
          {/* SECTION 2 */}
          <div className="flex flex-col gap-3 w-64">
            <h1 className="text-2xl font-medium">Info</h1>
            <h2 className="">
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful
            </h2>
          </div>
          {/* SECTION 3 */}
          <div className="flex flex-col gap-3 w-64">
            <h1 className="text-2xl font-medium">Links</h1>
            <ul className="flex flex-col gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Why Us</li>
              <li>Team</li>
            </ul>
          </div>
          {/* SECTION 4 */}
          <div className="flex flex-col gap-3 w-64">
            <h1 className="text-2xl font-medium">Subscribe</h1>
            <input
              type="text"
              placeholder="Enter email"
              className="border-t-0 border-x-0 text-white bg-transparent border-b-slate-50"
            />
            <button className="bg-[#00bbf0] text-[#FFFFFF]  py-2 w-full text-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-blue-950 text-xs lg:text-sm px-5 py-6">
        <p>&copy; 2024 Designed and Developed By Sarang P Achari</p>
      </div>
    </>
  );
};

export default Footer;
