import Image from "next/image";
import React from "react";
import Working from "../../../assets/Working.png";

const GetYourWork = () => {
  return (
    <div className="container mx-auto mt-12 px-8">
      <div className="flex flex-col justify-between sm:flex-row">
        <div style={{ border: "1px solid green" }}>
          <Image
            src={Working}
            alt="Get Your Work"
            className="w-full"
            quality={100}
          ></Image>
        </div>
        <div
          style={{ border: "1px solid green" }}
          className="mt-4 text-start lg:mt-0"
        >
          <h1 className="mb-2 text-center font-poppins text-[30px] font-bold text-primary md:mb-4 md:text-5xl">
            Get your work done!
          </h1>
          <h6 className="mb-6 text-center font-poppins text-sm font-semibold text-[#4B5155BF] md:mb-[36px] md:text-xl">
            Maximize your productivity in a fast-paced world
          </h6>
          <ul className="list-disc space-y-2 px-4 text-xs text-[#4B5155] marker:text-[#4B5155] md:space-y-[36px] md:text-sm">
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
