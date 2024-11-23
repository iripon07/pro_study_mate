"use client";

import facebook from "@/assets/facebook.png";
import googleIcon from "@/assets/google.png";
import SignUpForm from "@/components/Forms/SignUpForm/SignUpForm";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";


const SignUp = () => {
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

          <SignUpForm />

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

        <div className="mb-[50px] text-center">
          <h2 className="text-[32px] font-medium text-black">
            Choose Your Perfect Necessity
          </h2>

          <p className="text-xs font-normal text-[#777777]">
            Select the study support and skill-building essentials that empower
            you to reach new heights in your academic and personal growth.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-12">
          <button className="rounded-[50px] border-[1px] border-[#777777] px-12 py-[18px] text-base font-normal text-black">
            Assignment Help
          </button>
          <button className="rounded-[50px] border-[1px] border-[#777777] px-12 py-[18px] text-base font-normal text-black">
            Course Masterclass
          </button>{" "}
          <button className="rounded-[50px] border-[1px] border-[#777777] px-12 py-[18px] text-base font-normal text-black">
            Skill Development
          </button>
          <button className="rounded-[50px] border-[1px] border-[#777777] px-12 py-[18px] text-base font-normal text-black">
            Research
          </button>
          <button className="rounded-[50px] border-[1px] border-[#777777] px-12 py-[18px] text-base font-normal text-black">
            CV
          </button>
          <button className="rounded-[50px] border-[1px] border-[#777777] px-12 py-[18px] text-base font-normal text-black">
            Job Preparation
          </button>
          <button className="rounded-[50px] border-[1px] border-[#777777] px-12 py-[18px] text-base font-normal text-black">
            Others
          </button>
          <button className="rounded-[50px] border-[1px] border-[#777777] px-12 py-[18px] text-base font-normal text-black">
            Job Preparation
          </button>
          <button className="rounded-[50px] border-[1px] border-[#777777] px-12 py-[18px] text-base font-normal text-black">
            Skill Development
          </button>
        </div>
      </div>
    </div>
  );
};


export default dynamic(() => Promise.resolve(SignUp), { ssr: false });
