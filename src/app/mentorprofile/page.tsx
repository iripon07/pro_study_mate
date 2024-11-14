"use client";

import MentorAvatar from "@/assets/MentorAvatar.png";
import Image from "next/image";
import { CiCalendar, CiPaperplane } from "react-icons/ci";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

const MentorProfile = () => {
  return (
    <div className="container mx-auto mt-5 px-6">
      <h1>Hello Mentor</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 w-full">

          <div className="flex w-full mb-6 justify-between rounded-sm bg-white px-4 py-3">
            <div className="flex gap-[22px]">
              <Image src={MentorAvatar} alt="Mentor Avatar" />
              <div className="mb-[6px]">
                <div className="flex items-end gap-[22px]">
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
                  <div className="flex items-center gap-1">
                    <MdOutlineEmail className="h-4 w-5" />
                    <p>Demo@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-y-[6px]">
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

          <div className="bg-white mb-4 px-[18px] py-[17px]">
            <p className="mb-5 text-base font-medium text-black">My Activity</p>

            <div className="flex items-center justify-between text-center">
              <div>
                <div className="flex items-center gap-[9px]">
                  <CiCalendar className="h-4 w-4 text-[#FB6107]" />
                  <p className="text-xs font-light text-black">All Task</p>
                </div>
                <p className="text-xs font-light text-[#777777]">00</p>
              </div>

              <div>
                <div className="flex items-center gap-[9px]">
                  <GrWorkshop className="h-4 w-4 text-[#FB6107]" />
                  <p className="text-xs font-light text-black">All Workshop</p>
                </div>
                <p className="text-xs font-light text-[#777777]">00</p>
              </div>

              <div>
                <div className="flex items-center gap-[9px]">
                  <FaRegHeart className="h-4 w-4 text-[#FB6107]" />
                  <p className="text-xs font-light text-black">Favourites</p>
                </div>
                <p className="text-xs font-light text-[#777777]">00</p>
              </div>

              <div>
                <div className="flex items-center gap-[9px]">
                  <FaRegStar className="h-4 w-4 text-[#FB6107]" />
                  <p className="text-xs font-light text-black">Reviews</p>
                </div>
                <p className="text-xs font-light text-[#777777]">00</p>
              </div>

              <div>
                <div className="flex items-center gap-[9px]">
                  <RiGalleryLine className="h-4 w-4 text-[#FB6107]" />
                  <p className="text-xs font-light text-black">Gallery</p>
                </div>
                <p className="text-xs font-light text-[#777777]">00</p>
              </div>
            </div>
          </div>

          <div className="px-3 pt-[13px] pb-5 bg-white">
            <p className="text-base mb-[17px] font-medium text-black">About me </p>
            <div>
              <p className="font-prosto text-sm text-[#777777] px-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                reprehenderit, illo optio hic iure, tempore, veniam cumque
                corrupti esse veritatis voluptatum iusto temporibus aspernatur
                ex saepe molestiae nisi atque totam blanditiis eum harum quod!
                Repudiandae nihil aliquid beatae, sit veritatis consequuntur
                iure provident eaque! Repudiandae inventore dolores aut culpa?
                Repellendus nemo dolorem cumque voluptatibus recusandae ut <br /> <br />
                voluptate voluptatum in sit deserunt deleniti explicabo at illo
                soluta aut, tenetur architecto cum fugit. Adipisci ad voluptas
                corrupti consequatur! Error est vitae sint maiores fugiat vero
                inventore in ut beatae harum aspernatur suscipit officia
                accusantium corrupti, voluptatum deserunt ipsa aliquam. Libero,
                debitis sint architecto beatae tempora incidunt odio nobis esse
                placeat quis doloribus nam reiciendis iusto expedita adipisci
                obcaecati consequuntur porro, eum consequatur, nihil error? Eum
                a, quaerat ut explicabo cum, repudiandae amet laborum earum
                dolor reprehenderit voluptate vero minus magni laudantium
                molestiae quas, obcaecati corporis dolores! Quo quae libero
                deserunt maxime corporis!
              </p>
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
