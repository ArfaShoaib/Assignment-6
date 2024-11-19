"use client";
import React, { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarSFill,
} from "react-icons/ri";
import Image from "next/image";

const Customer = [
  {
    id: 1,
    image: "/3.png",
    name: "James Nduku",
    profession: "Software Developer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 2,
    image: "/test.png",
    name: "Erick Kipkemboi",
    profession: "Scrum Master",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 3,
    image: "/4.png",
    name: "Stephen Kerubo",
    profession: "UI/UX Designer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 4,
    image: "/6.png",
    name: "James Nduku",
    profession: "Software Developer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 5,
    image: "/test.png",
    name: "Erick Kipkemboi",
    profession: "Scrum Master",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 6,
    image: "/2.png",
    name: "Stephen Kerubo",
    profession: "UI/UX Designer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 7,
    image: "/5.png",
    name: "James Nduku",
    profession: "Software Developer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 8,
    image: "/3.png",
    name: "Erick Kipkemboi",
    profession: "Scrum Master",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 9,
    image: "/test.png",
    name: "Stephen Kerubo",
    profession: "UI/UX Designer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 10,
    image: "/3.png",
    name: "James Nduku",
    profession: "Software Developer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 11,
    image: "/6.png",
    name: "Erick Kipkemboi",
    profession: "Scrum Master",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 12,
    image: "/4.png",
    name: "Stephen Kerubo",
    profession: "UI/UX Designer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 13,
    image: "/test.png",
    name: "James Nduku",
    profession: "Software Developer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 14,
    image: "/3.png",
    name: "Erick Kipkemboi",
    profession: "Scrum Master",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 15,
    image: "/4.png",
    name: "Stephen Kerubo",
    profession: "UI/UX Designer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

const Testinomials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next set of cards
  const Nextslide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= Customer.length ? 0 : prevIndex + 3
    );
  };
  // Navigate to the previous set of cards
  const Prevslide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= Customer.length ? 0 : prevIndex - 3
    );
  };

  return (
    <div className="w-full bg-[#F7F7F7] py-10 px-5">
      {/* HEADER */}
      <div className="mt-20 text-black ml-12">
        <h1 className="font-bold text-[48px] leading-[57px]">Customer testimonials</h1>
        <p className="text-[18px] leading-[27px] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      
      {/* TESTIMONIALS CARDS */}
      <div className="relative mt-32">
        <div className="flex justify-center items-center gap-5 flex-wrap">
          {Customer.slice(currentIndex, currentIndex + 3).map((Customer) => (
            <div
              key={Customer.id}
              className="border border-black shadow-md p-5 w-full sm:w-[362px] h-[321px] text-center mb-6"
            >
              {/* STARS */}
              <div className="flex justify-center mb-7 -ml-44">
                {[...Array(5)].map((_, i) => (
                  <RiStarSFill key={i} className="text-black text-[30px]" />
                ))}
              </div>
              {/* FEEDBACK */}
              <p className="text-[18px] leading-[27px] w-[270px] text-justify mx-auto">
                &quot;{Customer.feedback}&quot;
              </p>
              {/* Image, Name, and Profession */}
              <div className="flex items-center justify-center mt-5">
                <Image
                  src={Customer.image}
                  alt={Customer.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4 text-left">
                  <h3 className="font-semibold mt-6">{Customer.name}</h3>
                  <p className="text-gray-500 text-sm">{Customer.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Navigation Buttons */}
        <div className="relative">
          <button
            onClick={Prevslide}
            className="absolute right-[70px] top-[50%] transform -translate-y-[50%] bg-gray-200 p-2 rounded-full shadow-md"
          >
            <RiArrowLeftSLine size={30} />
          </button>
          <button
            onClick={Nextslide}
            className="absolute right-0 top-[50%] transform -translate-y-[50%] bg-gray-200 p-2 rounded-full shadow-md"
          >
            <RiArrowRightSLine size={30} />
          </button>
        </div>
  
        {/* Slider Dots */}
        <div className="flex justify-center mt-20">
          {[...Array(Math.ceil(Customer.length / 3))].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === Math.floor(currentIndex / 3) ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
  
  
};

export default Testinomials;
