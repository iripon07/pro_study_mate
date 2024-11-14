import { DatePicker } from "@/components/ui/date-picker";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Input from "../Input/Input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");

  return (
    <form>
      <div className="mb-6 flex gap-[37px]">
        {/* <div className="w-full">

          <label className="mb-[14px] text-[13px] font-medium text-black">
            First Name<span className="text-[#FE696A]">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter first name"
            className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
          />
        </div> */}
        <Input type="First Name" setFirstName={setFirstName} />

        <div className="w-full">
          <label className="mb-[14px] text-[13px] font-medium text-black">
            First Name<span className="text-[#FE696A]">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
          />
        </div>
      </div>

      <div className="mb-[14px] w-full">
        <label className="mb-[14px] text-[13px] font-medium text-black">
          Email<span className="text-[#FE696A]">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
        />
      </div>

      <div className="mb-2 w-full">
        <label className="mb-[14px] text-[13px] font-medium text-black">
          Password<span className="text-[#FE696A]">*</span>
        </label>
        <input
          type="password"
          placeholder="Enter password "
          className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
        />
      </div>

      <div className="mb-6 flex gap-[65px]">
        <div className="w-full">
          <label className="mb-[14px] text-[13px] font-medium text-black">
            Date of Birth<span className="text-[#FE696A]">*</span>
          </label>
          <DatePicker />
        </div>

        <div className="w-full">
          <label className="mb-[14px] text-[13px] font-medium text-black">
            Gender<span className="text-[#FE696A]">*</span>
          </label>

          <div className="relative w-full">
            <select
              className="w-full appearance-none rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
              defaultValue=""
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[14px] flex gap-6">
        <div className="w-full">
          <label className="mb-[14px] text-[13px] font-medium text-black">
            Gender<span className="text-[#FE696A]">*</span>
          </label>

          <div className="relative w-full">
            <select
              className="w-full appearance-none rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
              defaultValue=""
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FaChevronDown />
            </div>
          </div>
        </div>

        <div className="w-full">
          <label className="mb-2 text-[13px] font-medium text-grey">
            Your University or Institution
            <span className="text-[#FA171B]"> *</span>
          </label>
          <div className="relative w-full">
            <select
              className="w-full appearance-none rounded-sm border-[1px] border-[#B3B3B3] px-6 py-[14px] text-sm font-light text-[#4B515559] outline-gray-400"
              defaultValue=""
            >
              <option value="" disabled>
                University Name
              </option>
              <option value="X">X</option>
              <option value="Y">Y</option>
            </select>

            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 w-full">
        <label className="mb-[13px] text-[13px] font-semibold text-black">
          Course Name<span className="text-[#FE696A]">*</span>
        </label>
        <input
          type="text"
          placeholder="Masters of computer science"
          className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
        />
      </div>

      <div className="flex gap-x-20">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">I am a Student</Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">I am a Mentor</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <input
          type="radio"
          className="h-4 w-4 appearance-none rounded-full border-2 border-[#4B515559]"
        />
        <label className="text-xs font-normal text-black" htmlFor="">
           I agree to the {" "}
          <Link className="underline" href="/terms">
            Terms and Conditions
          </Link>
        </label>
      </div>

      <input
        className="w-full rounded-sm bg-[#FB6107] py-[6px] text-[25px] font-medium text-white hover:opacity-80"
        type="submit"
        value="Continue"
      />
    </form>
  );
};

export default SignUpForm;
