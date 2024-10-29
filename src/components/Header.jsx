import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* <div className=" bg-transparent flex justify-between items-center p-5">
        <div className="">
          <h1 className="font-bold text-2xl">Finexo</h1>
        </div>
        <div className="">
          <ul className="flex gap-8 items-center tracking-wider">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>WHY US</li>
            <li>TEAM</li>
            <li className="flex items-center gap-2">
              LOGIN
              <FaUser />
            </li>
            <li>
              <FaSearch />
            </li>
          </ul>
        </div>
      </div> */}


      

<nav class=" border-gray-200 bg-transparent">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
        
        <span class="self-center text-2xl font-semibold whitespace-nowrap">Finexo</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
        <li>
          <a href="#" class="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">HOME</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">ABOUT</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">SERVICES</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">WHY US</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">TEAM</a>
        </li>
        <li className="flex items-center md:gap-3">
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">LOGIN
          </a>
          <FaUser />
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"> <FaSearch /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
};

export default Header;
