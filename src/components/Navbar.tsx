"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className=" container fixed top-0 md:top-14 w-full items-center md:justify-between md:bg-[#e2e0e0] z-50 shadow-md mt-2">
      <div className="max-w-[1280px] h-[72px] mx-auto flex justify-between md:justify-between items-center px-4 md:h-20 ">
        <div className="flex shrink-0 items-center">
          <Image
            src={"/logo.png"}
            alt="img"
            width={150}
            height={30}
            className="mt-1"
          />
        </div>
        <div className="hidden md:flex gap-1items-center bg-white ml-0 w-auto md:flex-row rounded space-x-1 lg:gap-10 lg:py-0 lg:w-[810px]">
          <Link
            href={"#!"}
            className={`${
              activeLink === "home" ? "underline" : ""
            } text-black hover:bg-gray-200 px-1 py-3  rounded text-sm whitespace-nowrap`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <Link
            href={"#!"}
            className={`${
              activeLink === "cources" ? "underline" : ""
            } text-black hover:bg-gray-200 px-1.5 py-3  rounded text-sm whitespace-nowrap`}
            onClick={() => handleLinkClick("cources")}
          >
            Cources
          </Link>
          <Link
            href={"#!"}
            className={`${
              activeLink === "services" ? "underline" : ""
            } text-black hover:bg-gray-200 px-1.5 py-3 rounded text-sm whitespace-nowrap`}
            onClick={() => handleLinkClick("services")}
          >
            Services
          </Link>
          <Link
            href={"#!"}
            className={`${
              activeLink === "achievements" ? "underline" : ""
            } text-black hover:bg-gray-200 px-1.5 py-3  rounded text-sm whitespace-nowrap`}
            onClick={() => handleLinkClick("achievements")}
          >
            Achievements
          </Link>
          <Link
            href={"#!"}
            className={`${
              activeLink === "about" ? "underline" : ""
            } text-black hover:bg-gray-200 px-1.5 py-3  rounded text-sm whitespace-nowrap`}
            onClick={() => handleLinkClick("about")}
          >
            About us
          </Link>
          <Link
            href={"#!"}
            className={`${
              activeLink === "testimonial" ? "underline" : ""
            } text-black hover:bg-gray-200 px-1.5 py-3  rounded text-sm whitespace-nowrap`}
            onClick={() => handleLinkClick("testimonial")}
          >
            Testimonial
          </Link>
          <div className="flex space-x-1 ml-1 items-center">
          <button className="text-black bg-white border border-black px-2 py-1.5 rounded hover:bg-gray-100 whitespace-nowrap">
            Login
          </button>
          <button className="text-white bg-black border border-black px-2 py-1.5 rounded hover:bg-black whitespace-nowrap">
            Signup
          </button>
          </div>
        </div>
       
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Navbar */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-4">
            <Link
              href={"#"}
              className="text-black py-2"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
            <Link
              href={"#"}
              className="text-black py-2"
              onClick={() => handleLinkClick("home")}
            >
              Cources
            </Link>
            <Link
              href={"#"}
              className="text-black py-2"
              onClick={() => handleLinkClick("services")}
            >
              Services
            </Link>
            <Link
              href={"#"}
              className="text-black py-2"
              onClick={() => handleLinkClick("achievements")}
            >
              Achievements
            </Link>
            <Link
              href={"#"}
              className="text-black py-2"
              onClick={() => handleLinkClick("about")}
            >
              About us
            </Link>
            <Link
              href={"#"}
              className="text-black py-2"
              onClick={() => handleLinkClick("testimonial")}
            >
              Testimonial
            </Link>
            <button className="text-black bg-white border border-black px-4 py-2 rounded mt-2">
              Login
            </button>
            <button className="text-white bg-black border border-black px-4 py-2 rounded mt-2">
              Signup
            </button>
          </div>
        </div>
      )}

      {/* Underline navbar */}
      <div className="h-[1px] bg-black"></div>
    </div>
  );
};

export default Navbar;
