"use client";

import downArrow from "@/assets/Chevron down.png";
import facebook from "@/assets/facebook.png";
import googleIcon from "@/assets/google.png";
import Image from "next/image";
import Link from "next/link";

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
                <span className="text-[#FB6107]">*</span>
              </label>

              <div className="relative">
                <select
                  className="text-silver pointer-events:none w-full appearance-none rounded border-[0.5px] border-[#4B515580] px-4 py-[15px] text-[13px] font-medium outline-none"
                  name=""
                  id=""
                >
                  <option value="" disabled selected>
                    Choose your nationality
                  </option>{" "}
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
                <Image
                  className="absolute right-0 top-3"
                  width={28}
                  height={28}
                  src={downArrow}
                  alt="Down arrow"
                ></Image>
              </div>
            </div>

            <div className="mb-[25px] w-full">
              <label className="mb-2 text-[13px] font-medium text-grey">
                Choose your nationality<span className="text-[#FB6107]">*</span>
              </label>
              <select
                className="text-silver w-full rounded border-[0.5px] border-[#4B515580] px-4 py-[15px] text-[13px] font-medium outline-none"
                name=""
                id=""
              >
                <option value="" disabled selected>
                  Choose your nationality
                </option>{" "}
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>

            <div className="w-full">
              <label className="mb-[14px] text-[13px] font-medium text-grey">
                List Your Expertise Subjects
                <span className="text-[#FB6107]"> *</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Skilled Subject Areas "
                className="text-silver w-full rounded border-[1px] border-[#B3B3B3] px-[16px] py-[15px] text-[13px] font-light outline-none"
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
