import Image from "next/image";
import React from "react";
import Working from "../../../assets/Working.png";

const GetYourWork = () => {
  return (
    <div className="container mx-auto mt-12 px-8">
      <div className="flex flex-col justify-between sm:flex-row">
        <div>
          <Image
            src={Working}
            alt="Get Your Work"
            className="w-full"
            quality={100}
          ></Image>
        </div>
        <div className="lg:mt-0 mt-4">
          <h1 className="md:mb-4 mb-2 font-poppins text-center md:text-5xl text-[30px]  font-bold text-primary">
            Get your work done!
          </h1>
          <h6 className="md:mb-[36px] text-center mb-6 font-poppins md:text-xl text-sm font-semibold text-[#4B5155BF]">
            Maximize your productivity in a fast-paced world
          </h6>
          <ul className="list-disc md:space-y-[36px] px-4 space-y-2 md:text-sm text-xs text-[#4B5155] marker:text-[#4B5155]">
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
