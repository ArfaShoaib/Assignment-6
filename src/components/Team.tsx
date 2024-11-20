import React from "react";
import Image from "next/image";



// Testimonial data array
const testimonials = [
  {
    id: 1,
    image: "/test.png",
    name: "James Nduku",
    role: "Marketing Coordinator",
    social: "/Social.png",
  },
  {
    id: 2,
    image: "/2.png",
    name: "Joseph Munyambu",
    role: "Nursing Assistant",
    social: "/Social.png",
  },
  {
    id: 3,
    image: "/3.png",
    name: "Joseph Ngumbau",
    role: "Medical Assistant",
    social: "/Social.png",
  },
  {
    id: 4,
    image: "/5.png",
    name: "Erick Kipkemboi",
    role: "Web Designer",
    social: "/Social.png",
  },
  {
    id: 5,
    image: "/6.png",
    name: "Stephen Kerubo",
    role: "President of Sales",
    social: "/Social.png",
  },
  {
    id: 6,
    image: "/4.png",
    name: "John Leboo",
    role: "Dog Trainer",
    social: "/Social.png",
  },
];

const Test = () => {
  return (
    <div className="container w-full bg-[#F7F7F7] py-10 mt-52">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold">Our Team</h1>
        <p className="text-gray-700 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-center items-center  p-5  rounded-md"
          >
            {/* Profile Image */}
            <Image
              src={testimonial.image}
              alt={`${testimonial.name}'s Image`}
              width={80}
              height={80}
              className="ml-4"
              
            />
            {/* Text Content */}
            <div className="ml-5">
              <h1 className="font-bold text-lg mt-6 text-center">{testimonial.name}</h1>
              <p className="text-gray-600 mt-2 text-center">{testimonial.role}</p>
            </div>
            {/* Social Icon */}
            <Image
              src={testimonial.social}
              alt={`${testimonial.name}'s Social Icon`}
              width={100}
              height={40}
              className="mt-20"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Test;
