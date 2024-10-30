import Link from "next/link";
import facebook from "@/assets/facebook.png";
import googleIcon from "@/assets/google.png";
import Image from "next/image";

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

          <form>
            <div className="mb-6 flex gap-[37px]">
              <div className="w-full">
                <label className="mb-[14px] text-[13px] font-medium text-black">
                  First Name<span className="text-[#FE696A]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
                />
              </div>

              <div className="w-full">
                <label className="mb-[14px] text-[13px] font-medium text-black">
                  First Name<span className="text-[#FE696A]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-none"
                />
              </div>
            </div>

            <div className="mb-[14px] w-full">
              <label className="mb-[14px] text-[13px] font-medium text-black">
                Email<span className="text-[#FE696A]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter email"
                className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-none"
              />
            </div>

            <div className="mb-2 w-full">
              <label className="mb-[14px] text-[13px] font-medium text-black">
                Password<span className="text-[#FE696A]">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter password "
                className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-none"
              />
            </div>

            <div className="mb-6 flex gap-[65px]">
              <div className="w-full">
                <label className="mb-2 text-[13px] font-medium text-grey">
                  Date of Birth<span className="text-[#FE696A]">*</span>
                </label>
                <input
                  type="date"
                  placeholder="dd - mm - yyyy"
                  className="w-full rounded-sm border-[1px] border-[#4B515580] py-[14px] pl-[13px] text-sm font-light text-[#4B515559] outline-none"
                />
              </div>
              <div className="w-full">
                <label className="mb-2 text-[13px] font-medium text-grey">
                  Gender<span className="text-[#FE696A]">*</span>
                </label>
                <select
                  className="w-full border-[0.5px] border-[#4B515580] py-4 pl-5 text-[#4B515559] text-sm font-normal outline-none "
                  name=""
                  id=""
                >
                  <option value="" disabled selected>
                    Gender
                  </option>{" "}
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <label className="mb-[14px] text-[13px] font-semibold text-black">
                Course Name<span className="text-[#FE696A]">*</span>
              </label>
              <input
                type="text"
                placeholder="Masters of computer science"
                className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-none"
              />
            </div>

            <div>
              <div>
                <input type="radio" />
                <label className="text-[13px] font-light text-black" htmlFor="">
                  I am a Student
                </label>
              </div>
              <div>
                <input type="radio" />
                <label className="text-[13px] font-light text-black" htmlFor="">
                  I am a Mentor
                </label>
              </div>
            </div>

            <div>
              <input type="radio" />
              <label className="text-xs font-normal text-black" htmlFor="">
                 I agree to the {" "}
                <Link className="underline" href="/terms">
                  Terms and Conditions
                </Link>
              </label>
            </div>

            <input
              className="w-full rounded-sm bg-[#FB6107] py-[6px] text-[25px] font-medium text-white"
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

export default SignUp;
