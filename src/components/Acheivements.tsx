import React from "react";

const Achievements = () => {
  return (
    <div className="container w-full">
      {/* Header Section */}
      <div className="flex flex-col w-full items-center justify-center xs:justify-center xs:items-center sm:mt-40 xs:-mt-24">
        <h1 className="font-Roboto font-bold text-[32px] leading-[41px] text-black text-center xs:text-center xs:-ml-1 sm:ml-0 sm:mt-10">
          Our Achievements
        </h1>
        <p className="font-Roboto text-[18px] leading-[27px] w-[90%] max-w-[362px] mt-4 text-center xs:text-center xs:-ml-1 sm:ml-0 sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>

      {/* Achievements Section */}
      <div className="flex flex-wrap justify-center xs:mt-8 sm:mt-20 xs:ml-20 sm:gap-20 lg:gap-40">
        <div className="text-black xs:mb-6 sm:mb-0 xs:w-1/2 sm:w-auto">
          <h1 className="font-Roboto font-bold text-[32px] leading-[41px] xs:text-[20px] xs:leading-[28px] lg:text-[40px] lg:leading-[48px] lg:font-semibold lg:-ml-4 ">
            +200
          </h1>
          <p className="font-Roboto text-[16px] leading-[24px] lg:mr-5 lg:text-[16px] lg:leading-[24px] lg:mt-5">Courses</p>
        </div>
        <div className="text-black xs:mb-6 sm:mb-0 xs:w-1/2 sm:w-auto">
          <h1 className="font-Roboto font-bold text-[32px] leading-[41px] xs:text-[20px] xs:leading-[28px] lg:text-[40px] lg:leading-[48px] lg:font-semibold">
            5K
          </h1>
          <p className="font-Roboto text-[16px] leading-[24px] lg:mr-5 lg:text-[16px] lg:leading-[24px] lg:mt-5">Members</p>
        </div>
        <div className="text-black xs:mb-6 sm:mb-0 xs:w-1/2 sm:w-auto">
          <h1 className="font-Roboto font-bold text-[32px] leading-[41px] xs:text-[20px] xs:leading-[28px] lg:text-[40px] lg:leading-[48px] lg:font-semibold">
            370K
          </h1>
          <p className="font-Roboto text-[16px] leading-[24px] lg:mr-5 lg:text-[16px] lg:leading-[24px] lg:mt-5">Students</p>
        </div>
        <div className="text-black xs:w-1/2 sm:w-auto">
          <h1 className="font-Roboto font-bold text-[32px] leading-[41px] xs:text-[20px] xs:leading-[28px] lg:text-[40px] lg:leading-[48px] lg:font-semibold">
            100+
          </h1>
          <p className="font-Roboto text-[16px] leading-[24px] lg:mr-5 lg:text-[16px] lg:leading-[24px] lg:mt-5">Recognition</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
