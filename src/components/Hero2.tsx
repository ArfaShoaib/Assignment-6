import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <div className=" container w-full bg-[#dad8d8] mt-[-73px] py-4">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        <h1 className="text-center lg:text-left font-Roboto text-xl sm:text-2xl lg:text-[24px] font-bold leading-tight 
          w-full lg:w-[320px] max-w-md">
          Trusted by 2000+ companies worldwide.
        </h1>
        
        <div className="w-full max-w-xl lg:ml-auto">
          <Image 
            src="/logos.png" 
            alt="Company Logos" 
            width={600} 
            height={100} 
            className="w-full h-auto object-contain"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;