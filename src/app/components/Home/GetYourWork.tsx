import Image from "next/image";
import React from "react";
import Working from "../../../assets/Working.png";

const GetYourWork = () => {
  return (
    <div
      className="container mx-auto mt-12"
    >
      <div  className="flex justify-between">
        <div >
          <Image src={Working} alt="Get Your Work" className="w-full" quality={100}></Image>
        </div>
        <div  className="">
          <h1 className="mb-4 font-poppins text-5xl font-bold text-primary">
            Get your work done!
          </h1>
          <h6 className="mb-[36px] font-poppins text-xl font-semibold text-[#4B5155BF]">
            Maximize your productivity in a fast-paced world
          </h6>
          <ul className="list-disc space-y-[36px] pl-5 text-sm text-[#4B5155] marker:text-[#4B5155]">
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
