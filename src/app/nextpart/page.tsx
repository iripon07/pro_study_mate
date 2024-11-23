"use client";

import facebook from "@/assets/facebook.png";
import googleIcon from "@/assets/google.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";

const NextPart = () => {

  return (
    <div>
      <div className="container mx-auto px-6">

        <div className="mx-auto my-14 max-w-[627px]">

          <div className="mb-10 text-center">
            <p className="mb-6 text-[32px] font-semibold text-black">
              Let's create your account!
            </p>
            <p className="text-[15px] font-light text-[#777777]">
              Already have an account? 
              <Link className="text-[#FB6107] underline" href="/login">
                &nbsp;Log In!
              </Link>
            </p>
          </div>

          <form>


            <div className="mb-[46px] w-full">
              <label className="mb-2 text-[13px] font-medium text-[#4B5155]">
                Universities You’ll Mentor
              </label>
              <div className="relative w-full">
                <select
                  className="w-full appearance-none rounded-sm border-[1px] border-[#B3B3B3] px-6 py-4 text-sm font-light text-[#4B515559] outline-gray-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    University Name
                  </option>
                  <option value="X">X</option>
                  <option value="Y">Y</option>
                  <option value="Y">Y</option>
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#777777]">
                  <FaChevronDown />
                </div>
              </div>

              <div className="mt-4 flex gap-5">
                <div className="relative">
                  <button className="block rounded-sm bg-[#F5F5F5] py-1 pl-[10px] pr-[30px] text-[8px] font-light text-black">
                    Networking Strategy
                  </button>
                  <IoCloseSharp className="absolute right-0 top-[15%] h-[10px] w-[10px] -translate-y-1/2 transform text-red" />
                </div>
                <div className="relative">
                  <button className="block rounded-sm bg-[#F5F5F5] py-1 pl-[10px] pr-[30px] text-[8px] font-light text-black">
                    Networking Strategy
                  </button>
                  <IoCloseSharp className="absolute right-0 top-[15%] h-[10px] w-[10px] -translate-y-1/2 transform text-red" />
                </div>
                <div className="relative">
                  <button className="block rounded-sm bg-[#F5F5F5] py-1 pl-[10px] pr-[30px] text-[8px] font-light text-black">
                    Networking Strategy
                  </button>
                  <IoCloseSharp className="absolute right-0 top-[15%] h-[10px] w-[10px] -translate-y-1/2 transform text-red" />
                </div>
                <div className="relative">
                  <button className="block rounded-sm bg-[#F5F5F5] py-1 pl-[10px] pr-[30px] text-[8px] font-light text-black">
                    Networking Strategy
                  </button>
                  <IoCloseSharp className="absolute right-0 top-[15%] h-[10px] w-[10px] -translate-y-1/2 transform text-red" />
                </div>
              </div>
            </div>

            <div className="mb-6 w-full">
              <label className="mb-3 text-[13px] font-medium text-grey">
                Profile pic <span className="text-red">*</span>
              </label>

              <div className="relative w-full border-[1px] border-dashed border-[#B3B3B3] py-4 pl-10 pr-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <LuUpload className="h-5 w-5 text-black" />
                    <div className="text-[#777777]">
                      <p className="mb-[1px] text-xs font-medium">
                        Drag & drop your profile picture or upload
                      </p>
                      <p className="text-2xs font-light">
                        Accepted file types : JPEG, PNG, GIF
                      </p>
                    </div>
                  </div>

                  <button className="border-[1px] border-[#4585F4] px-4 py-1 text-[#4585F4] duration-300 hover:opacity-80">
                    Upload
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-6 w-full">
              <label className="mb-2 text-[13px] font-medium text-grey">
                Choose your nationality
                <span className="text-[#FB6107]"> *</span>
              </label>
              <div className="relative w-full">
                <select
                  className="w-full appearance-none rounded-sm border-[1px] border-[#B3B3B3] px-6 py-4 text-sm font-light text-[#4B515559] outline-gray-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose your nationality
                  </option>
                  <option value="X">X</option>
                  <option value="Y">Y</option>
                  <option value="Y">Y</option>
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#777777]">
                  <FaChevronDown />
                </div>
              </div>
            </div>

            <div className="mb-6 w-full">
              <label className="mb-2 text-[13px] font-medium text-grey">
                Mentor Bio<span className="text-[#FB6107]"> *</span>
              </label>
              <textarea
                className="block w-full border-[0.5px] border-[#4B515580] px-5 py-3 text-[13px] font-medium text-[#B3B3B3] outline-gray-400"
                name=""
                id=""
                placeholder="Write about your self"
              ></textarea>
            </div>

            <div className="mb-12 w-full">
              <label className="mb-2 text-[13px] font-medium text-grey">
                List Your Expertise Subjects
                <span className="text-[#FB6107]"> *</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Skilled Subject Areas "
                className="w-full rounded border-[1px] border-[#B3B3B3] px-[16px] py-[15px] text-[13px] font-medium text-silver outline-gray-400"
              />

              <div className="mt-[17px] flex gap-1">
                <div className="relative">
                  <button className="block rounded-sm bg-[#F5F5F5] py-1 pl-[10px] pr-[30px] text-[8px] font-light text-black">
                    Networking Strategy
                  </button>
                  <IoCloseSharp className="absolute right-0 top-[15%] h-[10px] w-[10px] -translate-y-1/2 transform text-red" />
                </div>
                <div className="relative">
                  <button className="block rounded-sm bg-[#F5F5F5] py-1 pl-[10px] pr-[14px] text-[8px] font-light text-black">
                    Networking Strategy
                  </button>
                  <IoCloseSharp className="absolute right-0 top-[15%] h-[10px] w-[10px] -translate-y-1/2 transform text-red" />
                </div>
                <div className="relative">
                  <button className="block rounded-sm bg-[#F5F5F5] py-1 pl-[10px] pr-[14px] text-[8px] font-light text-black">
                    Networking Strategy
                  </button>
                  <IoCloseSharp className="absolute right-0 top-[15%] h-[10px] w-[10px] -translate-y-1/2 transform text-red" />
                </div>
                <div className="relative">
                  <button className="block rounded-sm bg-[#F5F5F5] py-1 pl-[10px] pr-[14px] text-[8px] font-light text-black">
                    Networking Strategy
                  </button>
                  <IoCloseSharp className="absolute right-0 top-[15%] h-[10px] w-[10px] -translate-y-1/2 transform text-red" />
                </div>
                <div className="relative">
                  <button className="block rounded-sm bg-[#F5F5F5] py-1 pl-[10px] pr-[14px] text-[8px] font-light text-black">
                    Networking Strategy
                  </button>
                  <IoCloseSharp className="absolute right-0 top-[15%] h-[10px] w-[10px] -translate-y-1/2 transform text-red" />
                </div>
                <div className="relative">
                  <button className="block rounded-sm bg-[#F5F5F5] py-1 pl-[10px] pr-[14px] text-[8px] font-light text-black">
                    Networking Strategy
                  </button>
                  <IoCloseSharp className="absolute right-0 top-[15%] h-[10px] w-[10px] -translate-y-1/2 transform text-red hover:opacity-80" />
                </div>
              </div>
            </div>

            <input
              className="w-full rounded-sm bg-[#FB6107] py-[6px] text-[25px] font-medium text-white hover:opacity-80"
              type="submit"
              value="Continue"
            />
          </form>

          <div className="my-[50px] grid grid-cols-2 gap-6 text-xs font-normal">
            <div className="flex cursor-pointer items-center justify-start rounded bg-[#4585F4] pl-4 text-white">
              <Image
                className="mr-[5px]"
                src={googleIcon}
                alt="Google Icon"
              ></Image>
              <h6 className="py-[10px]">Sign in with Google</h6>
            </div>
            <div className="flex cursor-pointer items-center justify-start rounded border-[1px] border-primary pl-4 text-black">
              <Image
                className="mr-[10px]"
                src={facebook}
                width={38}
                height={38}
                alt="Google Icon"
              ></Image>
              <h6 className="py-[10px]">Sign in with facebook</h6>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


export default dynamic(() => Promise.resolve(NextPart), { ssr: false });