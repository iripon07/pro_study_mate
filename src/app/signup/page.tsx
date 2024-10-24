import facebook from "@/assets/FacebookLogin.png";
import googleIcon from "@/assets/GoogleLogin.png";
import Image from "next/image";

const SignUp = () => {
  return (
    <div>
      <div style={{ border: "1px solid red" }} className="container mx-auto">
        <div
          style={{ border: "1px solid red" }}
          className="mx-auto my-14 max-w-[678px]"
        >
          <div>
            <h3 className="mb-[6px] text-center font-poppins text-[32px] font-medium text-grey">
              Please do Multi Step Form{" "}
            </h3>
            <h6 className="text-center font-prosto text-[13px] font-normal text-black">
              We're always looking for talented Mentors
            </h6>
          </div>

          <div className="mt-[26px] flex gap-4">
            <div className="flex w-full items-center justify-start rounded border-[1px] border-[#184E7780] py-[6px] pl-3">
              <div className="rounded-[10px] bg-[#E9EBED] px-3 py-[9px]">
                <Image src={facebook} alt="Facebook Icon"></Image>
              </div>
              <h6 className="ml-[22.5px] text-center text-base font-semibold text-blue">
                Continue with Facebook
              </h6>
            </div>

            <div className="flex w-full items-center rounded bg-blue text-base font-semibold text-white">
              <div className="ml-3 mr-6 rounded-2xl bg-white px-[9px] py-[4px]">
                <Image src={googleIcon} alt="Google Icon "></Image>
              </div>
              <h6>Continue with Google</h6>
            </div>
          </div>

          <div className="my-[36px] flex items-center justify-center">
            {/* <div className="border-[1.25px] border-[#4B51554D]"></div> */}
            <hr className="w-full border-[1.25px] border-[#4B51554D]" />
            <span className="px-3 font-poppins text-base font-[275] text-grey">
              OR
            </span>
            <hr className="w-full border-[1.25px] border-[#4B51554D]" />
          </div>

          <div className="flex w-full gap-[33px]">
            <div className="w-full">
              <label className="mb-2 block font-poppins text-[13px] font-medium text-grey">
                Given Name<span className="text-red">*</span>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                className="w-full rounded border-[1px] border-[#4B515580] py-4 pl-6 text-sm text-[#4B5155B3] outline-2 placeholder:text-[#4B515559] focus:outline-[#4B515559]"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block font-poppins text-[13px] font-medium text-grey">
                Surname<span className="text-red">*</span>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                className="w-full rounded border-[1px] border-[#4B515580] py-4 pl-6 text-sm text-[#4B5155B3] outline-2 placeholder:text-[#4B515559] focus:outline-[#4B515559]"
              />
            </div>
          </div>

          <div className="my-[36px] w-full">
            <label className="mb-2 block font-poppins text-[13px] font-medium text-grey">
              Email<span className="text-red">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter you email  address"
              className="w-full rounded border-[1px] border-[#4B515580] py-4 pl-6 text-sm text-[#4B5155B3] outline-2 placeholder:text-[#4B515559] focus:outline-[#4B515559]"
            />
          </div>

          <div className="w-full relative">
            <label className="mb-2 block font-poppins text-[13px] font-medium text-grey">
              Password<span className="text-red">*</span>
            </label>
            <input
              type="password"
              placeholder="Password (8 or more characters)"
              className="w-full rounded border-[1px] border-[#4B515580] text-sm py-4 pl-6 text-[#4B5155B3] outline-2 placeholder:text-[#4B515559] focus:outline-[#4B515559]"
            />
            <svg
              className="h-[13px] w-[13px] absolute right-[2%] cursor-pointer  top-[63%] text-[#4B5155BA]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
