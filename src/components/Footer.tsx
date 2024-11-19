import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white py-10 px-5">
      <div className="flex justify-between items-center">
        {/* Left side: Heading */}

        <div className="w-1/2 mt-44 ml-11">
          <h1 className="font-semibold text-[18px] leading-[27px]">
            Subscribe to our newsletter
          </h1>
          <p className="text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* Right side: Email input and Subscribe button */}
        <div className="w-1/2 flex flex-col mt-36 items-end mr-20">
          <div className="flex items-center ">
            <input
              type="email"
              placeholder="Your email"
              className=" w-60 border h-10 px-5 border-black outline-none"
            />
            <button className=" text-black border border-black  ml-2 py-2 px-4 rounded-r-lg">
              Subscribe
            </button>
          </div>
          {/* Privacy Policy Text */}
          <p className="text-sm text-gray-500 mt-3">
            By subscribing you agree to with our Privacy Policy
          </p>
        </div>
      </div>
      {/* Image below the Heading and Paragraph */}
      <div className="flex justify-center mt-32 mr-[1250px]">
        <Image src="/logo.png" alt="img" width={150} height={30} />
      </div>
      {/* New Sections (Courses, Services, About) */}
      <div className="mt-10 grid grid-cols-3 gap-10">
        {/* Courses Section */}
        <div className="flex flex-col">
      <h1 className="font-semibold text-[18px]">Cources</h1>
        <h6>111</h6>
        <h6>111</h6>
        <h6>111</h6>
        <h6>111</h6>
        <h6>111</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
