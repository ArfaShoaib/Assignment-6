import React from "react";
import Link from "next/link";
import Image from "next/image";

const Clists = () => {
  return (
    <div className="container w-screen overflow-x-hidden">
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold font-Roboto text-[32px] leading-[41px] mt-20 md:mt-52">
            Courses
          </h1>
          <p className="font-Roboto text-[18px] leading-[27px] mt-4">
            Your Ultimate Guide to learning
          </p>
        </div>

        {/* Links Section */}
        <div className="font-Roboto text-[16px] leading-[24px] flex flex-row justify-center items-center mt-14 gap-7">
          <Link href={"#!"}>Popular</Link>
          <Link href={"#!"}>Recommended</Link>
          <Link href={"#!"}>Best Price</Link>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10 px-2 md:px-0 mr-1 md:-mr-1 ml-1 md:ml-0">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-[#d9d5d5] w-full md:max-w-[399px] md:-[500px] p-4"
            >
              <Image
                src={"/ui.png"}
                alt="image"
                width={500}
                height={200}
                className="w-full"
              />
              <div className="flex flex-row mt-3">
                <h1 className="font-Roboto font-bold">Design</h1>
                <h1 className="ml-auto font-Roboto font-bold">5.0</h1>
              </div>
              <h2 className="font-bold mt-3">UI/UX Design 201</h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex flex-row items-center mt-6">
                <button className="text-blank border border-black px-4 py-1  md:w-auto">
                  Enroll Now
                </button>
                <p className="ml-auto font-Roboto font-bold">$400</p>
              </div>
            </div>
          ))}
          <div className="flex mt-12 justify-center md:justify-center md:ml-[400px] lg:justify-center lg:ml-[750px]">
            <button className="font-Roboto text-[16px] leading-[20px] border border-black px-5 py-2 flex items-center justify-center text-center whitespace-nowrap">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clists;
