"use client";

import graduatedCap from "@/assets/graduatedCap.png";
import MentorAvatar from "@/assets/MentorAvatar.png";
import MentorWorkshop from "@/assets/MentorWorkshop.png";
import Okay from "@/assets/Okay.png";
import Review from "@/assets/Review.png";
import Image from "next/image";
import { CiCalendar, CiPaperplane } from "react-icons/ci";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { IoClipboardOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import dynamic from "next/dynamic";

const MentorProfile = () => {
  return (
    <div className="bg-gray-100 pt-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 w-full">
            <div className="mb-6 flex w-full justify-between rounded-sm bg-white px-4 py-3 font-inter">
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

            <div className="mb-4 bg-white px-[18px] py-[17px]">
              <p className="mb-5 text-base font-medium text-black">
                My Activity
              </p>

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
                    <p className="text-xs font-light text-black">
                      All Workshop
                    </p>
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

            <div className="bg-white px-3 pb-5 pt-[13px]">
              <p className="mb-[17px] text-base font-medium text-black">
                About me{" "}
              </p>
              <div>
                <p className="px-1 font-prosto text-sm text-[#777777]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen boo k. It has survived not only five centuries
                  <br /> <br />
                  voluptate voluptatum in sit deserunt deleniti explicabo at
                  illo soluta aut, tenetur architecto cum fugit. Adipisci ad
                  voluptas corrupti consequatur! Error est vitae sint maiores
                  fugiat vero inventore in ut beatae harum aspernatur suscipit
                  officia accusantium corrupti, voluptatum deserunt ipsa
                  aliquam. Libero, debitis sint architecto beatae tempora
                </p>
              </div>
            </div>

            <div className="mt-[9px] bg-white p-4">
              <div className="flex items-center justify-start gap-x-[6px]">
                <Image src={graduatedCap} alt="Graduated Cap" quality={100} />
                <p className="font-prosto text-black">
                  Universities I Work With
                </p>
              </div>
              <div className="mt-3 flex gap-x-4 pl-1 font-poppins text-sm font-normal text-[#4585F4]">
                <p>University of Wollongong, Australia, </p>
                <p>University of Wollongong, Australia, </p>
                <p>University of Sydney</p>
              </div>
            </div>
            <div className="mb-7 mt-[14px] bg-white p-2">
              <div className="flex items-center justify-start gap-x-[6px]">
                <IoClipboardOutline className="mr-2 h-[25px] w-7 text-black" />
                <p className="font-prosto text-base font-medium text-[#1E1E1E]">
                  My Expertise
                </p>
              </div>
              <div className="mt-6 flex gap-x-4 font-prosto text-xs text-[#777777]">
                <button className="rounded-sm bg-[#E9EBED] px-3 py-1 duration-300 hover:opacity-80">
                  Subject name
                </button>
                <button className="rounded-sm bg-[#E9EBED] px-3 py-1">
                  Subject name
                </button>
                <button className="rounded-sm bg-[#E9EBED] px-3 py-1">
                  Subject name
                </button>
                <button className="rounded-sm bg-[#E9EBED] px-3 py-1">
                  Subject name
                </button>
                <button className="rounded-sm bg-[#E9EBED] px-3 py-1">
                  Subject name
                </button>
                <button className="rounded-sm bg-[#E9EBED] px-3 py-1">
                  Subject name
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-5 w-full">
            <p className="text-base mb-4 font-poppins mt-3 font-medium text-black">
              Up Coming Workshop
            </p>

            <div className="">
              <div className="mb-4 flex gap-4 bg-[#FFFFFF] p-2 font-prosto">
                <Image src={MentorWorkshop} alt="Mentor Workshop" />

                <div className="flex w-full justify-between">
                  <div>
                    <p className="mb-2 text-2xs text-[#C55818]">
                      SUN NOV 3,2024, 12.30 PM
                    </p>
                    <div>
                      <p className="text-xs text-black">
                        CSE 101 Workshop: Exam Topic Cover
                      </p>
                      <p>$30</p>
                    </div>
                    <p className="text-2xs text-[#4B5155BF]">
                      Organised by: Riaz Uddin
                    </p>

                    <Image src={Review} alt="Review" />
                    <div className="flex items-center gap-[11px]">
                      <Image
                        src={Okay}
                        alt="Okay"
                        className="h-[18px] w-[18px]"
                      />
                      <p className="text-2xs text-[#4B5155BF]">
                        5 Students Booked
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-rows-[1fr_auto] p-4">
                    <div>
                      <p className="font-prosto text-xs text-black">$30</p>
                    </div>
                    <button className="font-poppins text-xs font-medium text-[#098C00] duration-300 hover:opacity-80">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 bg-[#FFFFFF] p-2 font-prosto">
                <Image src={MentorWorkshop} alt="Mentor Workshop" />

                <div className="flex w-full justify-between">
                  <div>
                    <p className="mb-2 text-2xs text-[#C55818]">
                      SUN NOV 3,2024, 12.30 PM
                    </p>
                    <div>
                      <p className="text-xs text-black">
                        CSE 101 Workshop: Exam Topic Cover
                      </p>
                      <p>$30</p>
                    </div>
                    <p className="text-2xs text-[#4B5155BF]">
                      Organised by: Riaz Uddin
                    </p>

                    <Image src={Review} alt="Review" />
                    <div className="flex items-center gap-[11px]">
                      <Image
                        src={Okay}
                        alt="Okay"
                        className="h-[18px] w-[18px]"
                      />
                      <p className="text-2xs text-[#4B5155BF]">
                        5 Students Booked
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-rows-[1fr_auto] p-4">
                    <div>
                      <p className="font-prosto text-xs text-black">$30</p>
                    </div>
                    <button className="font-poppins text-xs font-medium text-[#098C00] duration-300 hover:opacity-80">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default dynamic(() => Promise.resolve(MentorProfile), { ssr: false });
