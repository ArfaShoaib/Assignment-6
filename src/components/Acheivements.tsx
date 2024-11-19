import React from "react";

const Acheivements = () => {
  return (
    <div className="w-full ">
      <div className="w-[1580px] h-[488px] flex flex-col justify-center items-center mt-48">
        <h1 className="font-Roboto font-bold text-[48px] leading-[57px] text-black">
          Our Achivements
        </h1>
        <p className="font-Roboto text-[20px] leading-[27px] w-[1099px]  h-[54px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.{" "}
        </p>
      </div>
      <div className="text-black  ml-[250px]">
        <h1 className="font-Roboto font-bold text-[40px] leading-[48px] mt-[-80px]">+200</h1>
        <p className="font-Roboto text-[16px] leading-[24px] ml-4">Cources</p>
      </div>
      <div className="text-black  ml-[498px]">
        <h1 className="font-Roboto font-bold text-[40px] leading-[48px] mt-[-75px] ml-5">5K</h1>
        <p className="font-Roboto text-[16px] leading-[24px] ml-4">Members</p>
      </div>
      <div className="text-black  ml-[800px]">
        <h1 className="font-Roboto font-bold text-[40px] leading-[48px] mt-[-75px]">370K</h1>
        <p className="font-Roboto text-[16px] leading-[24px] ml-4">Students</p>
      </div>
      <div className="text-black  ml-[1099px]">
        <h1 className="font-Roboto font-bold text-[40px] leading-[48px] mt-[-75px] ml-4">100+</h1>
        <p className="font-Roboto text-[16px] leading-[24px] ml-4">Recognition</p>
      </div>

    </div>
  );
};

export default Acheivements;
