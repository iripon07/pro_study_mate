import emailIcon from "@/assets/emailIcon.png";
import passwordIcon from "@/assets/passwordIcon.png";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/FacebookLogin.png"
import googleIcon from "@/assets/GoogleLogin.png"

const Login = () => {
  return (
    <div className="flex items-center justify-center my-12">
      <div className="h-[752px] w-[588px] px-[130px] pt-12 font-poppins shadow-[0px_5px_15px_2px_#184e7726]">
        <h6 className="text-grey mb-[38px] text-center text-2xl font-medium">
          Log in
        </h6>

        <form action="" className="w-full">
          <div className="mb-[14px] flex items-center rounded border-[0.5px] border-[#4b51557f] py-4 pl-5">
            <Image src={emailIcon} className="mr-6" alt="Email Icon"></Image>
            <input
              type="email"
              placeholder="Email"
              className="text-sm text-[#4B515566] outline-none"
            />
          </div>
          <div className="flex items-center rounded border-[0.5px] border-[#4b51557f] py-4 pl-5">
            <Image
              src={passwordIcon}
              className="mr-6"
              alt="Password Icon"
            ></Image>
            <input
              type="password"
              placeholder="Password"
              className="text-sm text-[#4B515566] outline-none"
            />
          </div>

          <Link
            href=""
            className="mb-[18px] block text-end text-[13px] font-normal text-primary underline"
          >
            Forgot Password?
          </Link>
          <input
            type="submit"
            value="Continue"
            className="bg-secondary w-full rounded py-[13px] text-base font-semibold text-white duration-300 hover:bg-[#4585F4]"
          />
        </form>

        <div className="my-[38px] flex items-center justify-center">
          {/* <div className="border-[1.25px] border-[#4B51554D]"></div> */}
          <hr className="w-full border-[1.25px] border-[#4B51554D]" />
          <span className="text-grey px-3 text-base">OR</span>
          <hr className="w-full border-[1.25px] border-[#4B51554D]" />
        </div>

        <div className="bg-blue flex items-center rounded py-[6px] mb-[18px] text-base font-semibold text-white">
          <div className="ml-3 mr-6 rounded-2xl bg-white px-[9px] py-[4px]">
            <Image src={googleIcon} alt="Google Icon "></Image>
          </div>
          <h6>Continue with Google</h6>
        </div>

        <div className="flex items-center justify-start border-[1px] mb-[68px] rounded border-[#184E7780] py-[6px] pl-3">
          <div className="rounded-[10px] bg-[#E9EBED] px-3 py-[9px]">
            <Image src={facebook} alt="Facebook Icon"></Image>
          </div>
          <h6 className="text-blue ml-[22.5px] text-center text-base font-semibold">
            Continue with Facebook
          </h6>
        </div>

        {/* <div className="my-[38px] flex items-center justify-center"> */}
        {/* <div className="border-[1.25px] border-[#4B51554D]"></div> */}
        {/* <hr className="border-[1.25px] w-full border-[#4B51554D]" /> */}
        <h6 className="text-grey text-center text-[13px] font-medium">
          Don’t have an account?
        </h6>
        {/* <hr className="border-[1.25px] w-full border-[#4B51554D]" /> */}
        {/* </div> */}
        <div className="mt-[18px] flex items-center justify-center">
          <Link
            href=""
            className="rounded-lg border-[1.25px] border-primary px-[56px] py-[6px] text-primary duration-300 hover:bg-primary hover:text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
