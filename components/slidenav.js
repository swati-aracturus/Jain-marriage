"use client";
import Link from "next/link";
import cn from "classnames";
import Image from "next/image";
import { useState } from "react";

function Slide() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="desktop">
        <header className="bg-[#080A52] text-white px-16 ">
          <div className="flex items-center justify-between lg:container py-3 mx-auto px-6">
            {/* Left side options */}
            <div className="flex items-center  md:space-x-4">
              {/* Home, About, Membership, Contact, Matches links */}
              <nav className="hidden lg:flex space-x-8 ">
                <a href="#" className="hover:text-gray-300 ">
                  Home
                </a>
                <a href="#" className="hover:text-gray-300 ">
                  About
                </a>
                <a href="#" className="hover:text-gray-300 ">
                  Membership
                </a>
                <a href="#" className="hover:text-gray-300 ">
                  Contact
                </a>
                <a href="#" className="hover:text-gray-300 ">
                  Matches
                </a>
              </nav>

              {/* Search bar */}
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search"
                  className=" placeholder-gray-200 py-2 px-6 sew rounded-full bg-[#4a5c85] focus:outline-none focus:ring focus:ring-[#809cdf] text-2xl md:text-base  text-fuchsia-400"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-200"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>
              </div>
          
               <button
                className="w-28 py-1 rounded-full bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 text-lg"
                onClick={() => console.log("Register")}
              >
                Register
              </button>
              <button
                className="w-28 py-1 rounded-full bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 text-lg"
                onClick={() => console.log("Login")}
              >
                Login
              </button>
              
            </div>
          </div>
        </header>
      </div>
      <div className="mobile">
      <nav className="flex items-center justify-between flex-wrap bg-[#080A52] py-2 px-6 ps:!py-0.5">
          <div className="flex items-center flex-shrink-0 text-white mr-6 ">
            <Image
              src="/logo 1.png"
              height={30}
              width={30}
              priority
              alt="Tailwind CSS logo"
            />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleNavbar}
              className="flex items-center  px-3 py-2 ps:!p-1 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  className="toggle"
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow">
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 text-center text-lg"
              >
                Home
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 text-center text-lg"
              >
                About Us
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 text-center text-lg"
              >
                Membership
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 text-center text-lg"
              >
                Contact
              </a>
              <a
                href="#"
                className=" block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 text-center text-lg"
              >
                Matches
              </a>
            </div>
            <div className="space-x-2 pt-4">
              <button
                className="w-28 py-1 text-white rounded-full bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 "
                onClick={() => console.log("Register")}
              >
                Register
              </button>
              <button
                className="w-28 py-1 text-white rounded-full bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 "
                onClick={() => console.log("Login")}
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Slide;
