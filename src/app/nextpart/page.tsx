"use client";

import downArrow from "@/assets/Chevron down.png";
import facebook from "@/assets/facebook.png";
import googleIcon from "@/assets/google.png";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


const NextPart = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="mx-auto my-14 w-[627px]">
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

              <div className="relative inline-block">
                <button className="bg-[#F5F5F5] px-6 py-2 text-black text-[8px]">
                  University Name
                </button>
                <IoCloseSharp className="absolute right-0 top-0 -translate-y-1/2 transform text-red" />
              </div>
            </div>

            <div className="mb-[46px] w-full">
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

            <div className="w-full">
              <label className="mb-[14px] text-[13px] font-medium text-grey">
                List Your Expertise Subjects
                <span className="text-[#FB6107]"> *</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Skilled Subject Areas "
                className="w-full rounded border-[1px] border-[#B3B3B3] px-[16px] py-[15px] text-[13px] font-light text-silver outline-none"
              />
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

export default NextPart;
