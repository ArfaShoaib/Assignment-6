import React from "react";
import Image from "next/image";

const Cources = () => {
  return (
    <div className="container w-full h-screen">
      <div className="flex flex-col justify-center items-center xs:items-center xs:justify-center xs:mt-40 xs:ml-[0px]">
        <h1 className="w-[299px] h-[84px] font-Roboto text-[20px] sm:text-[28px] md:text-[32px] leading-[32px] sm:leading-[38px] md:leading-[41px] max-w-[768px] font-bold  text-center xs:text-center xs:-mt-24 sm:text-center ">
          Explore Courses By Category
        </h1>
        <p className="xs:w-[300px] xs:h-[54px] font-Roboto text-[18px] sm:text-[16px] md:text-[18px] text-center leading-[24px] sm:leading-[27px] w-[90%]  xs:-mt-10  xs:text-center sm:ml-0 sm:text-center md:mt-10 md:w-[500px] ">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className="mt-40 xs:mt-9">
        <Image src={"/Content.png"} alt="img" width={1580} height={636} />
      </div>
      <div className="flex mt-14 justify-center md:justify-center lg:justify-center sm:justify-center xl:justify-center xl:ml-[450px]">
            <button className="font-Roboto text-[16px] leading-[24px] border border-black px-5 py-2 ">
              View All Courses
            </button>
          </div>
    </div>
  );
};

export default Cources;
