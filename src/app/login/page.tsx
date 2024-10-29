import emailIcon from "@/assets/emailIcon.png";
import passwordIcon from "@/assets/passwordIcon.png";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/Mentorze/facebook.png";
import googleIcon from "@/assets/Mentorze/google.png";


const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">

        <div className="bg-whiteSmoke w-[819px] rounded-[5px] px-[117px] py-11 font-poppins">

          <div>
            <p className="text-center text-2xl font-semibold text-black">
              Sign in to Mentorze
            </p>

            <div className="mx-auto mb-[60px] mt-4 w-[125.1px] border-2 border-[#FB6107]" />
          </div>

          <form action="" className="w-full">
            <div className="">
              <label className="mb-[10px] text-base font-light text-black">
                Email address *
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-[2px] border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-none"
              />
            </div>
            <div className="my-6">
              <label className="mb-[10px] text-base font-light text-black">
                Password *
              </label>
              <input
                type="password"
                placeholder="Enter password "
                className="w-full rounded-[2px] border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-none"
              />
            </div>

            <input
              type="submit"
              value="SIGN IN NOW"
              className="w-full rounded-[2px] cursor-pointer bg-[#FB6107] py-[10px] text-xl font-medium text-white"
            />
          </form>

          <div className="my-[50px] grid grid-cols-2 gap-6 text-xs font-normal">
            <div className="flex items-center justify-start rounded cursor-pointer bg-[#4585F4] pl-4 text-white">
              <Image
                className="mr-[5px]"
                src={googleIcon}
                alt="Google Icon"
              ></Image>
              <p className="py-[10px]">Sign in with Google</p>
            </div>
            <div className="flex items-center cursor-pointer justify-start rounded border-[1px] border-primary pl-4 text-black">
              <Image
                className="mr-[10px]"
                src={facebook}
                width={38}
                height={38}
                alt="Google Icon"
              ></Image>
              <p className="py-[10px]">Sign in with facebook</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xl font-medium text-black">
              Need an account ?
              <span className="text-[#FB6107]">
                <Link href="signup"> Join us Now </Link>
              </span>
            </p>
            <Link
              className="text-xs font-light text-black"
              href="/forgotpassword"
            >
              Forgot Password ?{" "}
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
