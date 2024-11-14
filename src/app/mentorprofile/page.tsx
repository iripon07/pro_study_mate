"use client";

import MentorAvatar from "@/assets/MentorAvatar.png";
import Image from "next/image";
import { CiCalendar, CiPaperplane } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const MentorProfile = () => {
  return (
    <div className="container mx-auto mt-5 px-6">
      <h1>Hello Mentor</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 w-full">
          <div className="flex w-full justify-between rounded-sm bg-white">
            <div
              style={{ border: "1px solid red" }}
              className="flex gap-[22px]"
            >
              <Image src={MentorAvatar} alt="Mentor Avatar" />
              <div className="mb-[6px]">
                <div className="flex items-center gap-[22px]">
                  <p className="text-xl text-black">B H M Riaz Uddin</p>
                  <p className="font-prosto text-xs text-[#777777]">
                    $45 / Session
                  </p>
                </div>
                <p className="text-xs text-[#777777]">
                  University of Wollongong
                </p>

                <div className="my-2 flex items-center gap-4 text-xs text-[#777777]">
                  <div className="flex items-center gap-1">
                    <TbWorld className="h-4 w-4" />
                    <p>Bangladesh</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoLocationOutline className="h-4 w-4" />

                    <p>live in australia </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineEmail className="h-4 w-5" />
                  <p>Demo@gmail.com</p>
                </div>
              </div>
            </div>

            <div style={{ border: "1px solid red" }} className="gap-y-[6px]">
              <button className="flex min-w-[152px] items-center rounded-sm bg-[#007AFF] py-[6px] pl-4 text-white duration-300 hover:opacity-80">
                <CiPaperplane className="mr-2 h-[30px] w-[30px]" />
                Text Me
              </button>
              <button className="mt-[6px] flex min-w-[152px] items-center rounded-sm bg-[#FB6107] py-[6px] pl-4 text-white duration-300 hover:opacity-80">
                <CiCalendar className="mr-2 h-[30px] w-[30px]" />
                Book Me
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-green-600">
          <h1>Mentor</h1>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
