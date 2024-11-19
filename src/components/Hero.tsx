import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-[800px] flex flex-col md:flex-row items-center justify-center gap-8 py-12">
        {/* Left Text Content */}
        <div className="w-full md:max-w-[500px] space-y-6 text-center md:text-left md:self-center mb-10 md:mb-[300px] my-48">
          <h1 className="text-4xl md:text-5xl lg:text-[66px] font-Roboto font-bold leading-tight lg:leading-[67px] max-w-[500px] mx-auto md:mx-0">
            Learn new skills online with ease
          </h1>
          <p className="text-lg font-Roboto leading-[27px] max-w-[500px] mx-auto md:mx-0">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Start Learning Now
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-white text-black border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full max-w-[600px] mx-auto h-[100px] md:h-[712px] mt-0 md:mt-4 ml-[195px]">
            <Image
              src="/image.png"
              alt="Learning illustration"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;