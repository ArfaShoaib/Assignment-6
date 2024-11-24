import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container bg-white py-10 px-5 mt-40">
    {/* Newsletter Section */}
    <div className="flex justify-between items-start flex-wrap">
      {/* Left side: Heading */}
      <div className="w-full md:w-auto mt-10 md:mt-0">
        <h1 className="font-semibold text-[18px] leading-[27px] text-center md:text-left">
          Subscribe to our newsletter
        </h1>
        <p className="text-[16px] leading-[24px] text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/* Right side: Email input and Subscribe button */}
      <div className="w-full md:w-auto flex flex-col items-center md:items-start mt-6 md:mt-0 ">
        <div className="flex flex-col md:flex-row w-full md:w-auto sm:justify-center sm:w-[300px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-auto border h-10 px-4 border-black outline-none mb-3 md:mb-0 sm:text-start "
          />
          <button className="w-full md:w-auto text-black border border-black md:ml-2 py-2 px-8 ">
            Subscribe
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          By subscribing you agree to with our Privacy Policy
        </p>
      </div>
    </div>

    {/* Logo and Footer Links Section */}
    <div className="mt-32 mb-20">
      {/* Logo */}
      <div className="mb-16 flex justify-center md:justify-start">
        <Image src={"/logo.png"} alt="img" width={150} height={30}/>
      </div>

      {/* Footer Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:-mt-28 md:ml-24 text-center">
        {/* Courses Section */}
        <div>
          <h2 className="font-semibold mb-4 text-[16px] leading-[24px]">Courses</h2>
          <ul className="space-y-5">
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Programming</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="font-semibold mb-4 mt-10 md:mt-0 text-[16px] leading-[24px]">Resources</h2>
          <ul className="space-y-3">
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interview Preparation</li>
            <li>Jobs</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h2 className="font-semibold mb-4 text-[16px] leading-[24px] mt-10 md:mt-0">About Us</h2>
          <ul className="space-y-3">
            <li>Contact</li>
            <li>Help/Support</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="border-t border-black pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2023 Ddsgnr. All right reserved.</p>
        
        {/* Footer Links */}
        <div className="flex flex-row md:flex-row gap-5 md:space-y-0 md:space-x-6 my-4 md:my-0">
          <a href="#" className="text-sm">Privacy Policy</a>
          <a href="#" className="text-sm">Terms of Service</a>
          <a href="#" className="text-sm">Cookies Settings</a>
        </div>
        
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
