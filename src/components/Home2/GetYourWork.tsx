import Image from "next/image";
import React from "react";
import Working from "@/assets/photos/Working.png";

const GetYourWork = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4">

        <div className="flex justify-center items-center border-1 border-primary w-full lg:w-[30%]">
          <Image
            src={Working}
            alt="Get Your Work"
            className="w-full"
            quality={100}
          ></Image>
        </div>
        
        <div className='lg:w-[200px] md:w-[100px] hidden md:block'></div>

        <div
          className="mt-4 text-start md:mt-0"
        >
          <h1 className="mb-2 text-center font-poppins text-[30px] md:text-xl font-bold text-primary md:mb-4 lg:text-5xl">
            Get your work done!
          </h1>
          <h6 className="mb-6 text-center font-poppins text-sm font-semibold text-[#4B5155BF] lg:mb-[36px] lg:text-xl">
            Maximize your productivity in a fast-paced world
          </h6>
          <ul className="list-disc space-y-2 text-xs text-[#4B5155] marker:text-[#4B5155] lg:space-y-[36px] lg:text-sm px-5 lg:px-10">
            <li>
              Connect with writers who bring diverse expertise to your projects
            </li>
            <li>
              Connect with writers who bring diverse expertise to your projects
            </li>
            <li>
              Connect with writers who bring diverse expertise to your projects
            </li>
            <li>
              Connect with writers who bring diverse expertise to your projects
            </li>
            <li>
              Connect with writers who bring diverse expertise to your projects
            </li>
            <li>
              Connect with writers who bring diverse expertise to your projects
            </li>
          </ul>
        </div>


        
      </div>
    </div>
  );
};

export default GetYourWork;
