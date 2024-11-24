import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex flex-col md:flex-row items-center justify-center gap-8 mb-5 mt-12 md:mt-0 py-12 md:py-24">
        {/* Left Text Content */}
        <div className="w-full space-y-6 xs:text-left xs:self-start xl:mt-44 md:mt-40">
          <h1 className="text-[24px] xs:text-[30px] sm:text-[40px] md:text-[48px]  md:leading-[50px] md:tracking-tight lg:text-[56px] font-Roboto font-bold leading-[32px] xs:leading-[40px] sm:leading-[48px] lg:leading-[57px]">
            Learn new skills
            <br /> online with ease
          </h1>
          <p className="text-sm xs:text-base sm:text-lg font-Roboto leading-[24px] xs:leading-[27px] md:text-[16px] md:max-w-[400px] md:leading-[26px] md:tracking-tight">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex flex-row gap-4 xs:justify-start">
            <button className="px-5 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Start Learning Now
            </button>
            <button className="px-5 py-2 text-sm font-medium bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="w-full flex justify-center xs:w-full sm:w-3/4 md:w-1/2 md:justify-end md:-ml-20">
          <div className="relative w-full xs:max-w-[428px] sm:max-w-[350px] md:w-[350px] h-[250px] xs:h-[390px] sm:h-[400px] md:h-[500px] lg:h-[600px] lg:w-[640px] mb-5 ">
            <Image src="/Image.png" alt="Learning illustration" fill priority className="object-contain lg:object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
