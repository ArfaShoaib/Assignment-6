import Image from "next/image";

const Header = () => {
  return (
    <div className="container hidden sm:block border-b border-[#676767] bg-[#d9d5d5] w-full">
      <div className="h-[49px] flex flex-col sm:flex-row items-center justify-between mx-auto max-w-[1280px] px-4">
        {/* Left Section - Stacked on mobile, inline on larger screens */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-2 sm:mb-0">
          <div className="flex items-center gap-4">
            <h1 className="font-Roboto text-[14px] font-normal leading-[21px] text-center sm:text-left">
              Phone Number: 956 742 455 678
            </h1>
            <div className=" h-5 w-[1px] bg-black"></div>
          </div>
          <h1 className="font-Roboto text-[14px] font-normal leading-[21px] text-center sm:text-left">
            Email: info@ddsgnr.com
          </h1>
        </div>

        {/* Right Section (Image) - Hide on mobile screens */}
        <div>
          <Image 
            src="/sl.png" 
            alt="img" 
            width={132} 
            height={200} 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;