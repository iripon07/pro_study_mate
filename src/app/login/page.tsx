"use client";

import facebook from "@/assets/facebook.png";
import googleIcon from "@/assets/google.png";
import { loginSchema } from "@/components/schemas/loginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";import { FaAngleDoubleRight } from "react-icons/fa";

interface ILoginData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: ILoginData) => {
    console.log("Hello Login Data", data);
    reset();
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <div className="w-[819px] rounded-[5px] bg-whiteSmoke md:px-[117px] px-4 py-11 font-poppins">
          <div>
            <p className="text-center text-2xl font-semibold text-black">
              Sign in to Mentorze
            </p>

            <div className="mx-auto mb-[60px] mt-4 w-[125.1px] border-2 border-[#FB6107]" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="">
              <label className="mb-[10px] text-base font-light text-black">
                Email address *
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter email address"
                className="w-full rounded-[2px] border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
              />
              {errors?.email && (
                <p className="text-xs text-red">{errors.email.message}</p>
              )}
            </div>
            <div className="my-6">
              <label className="mb-[10px] text-base font-light text-black">
                Password *
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter password "
                className="w-full rounded-[2px] border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
              />
              {errors?.password && (
                <p className="text-xs text-red">{errors.password.message}</p>
              )}
            </div>

            <input
              type="submit"
              value="SIGN IN NOW"
              className="w-full cursor-pointer rounded-[2px] bg-[#FB6107] py-[10px] text-xl font-medium text-white hover:opacity-90"
            />
          </form>

          <div className="my-[50px] grid md:grid-cols-2 grid-cols-1  gap-6 text-xs font-normal">
            <div className="flex cursor-pointer items-center justify-start rounded bg-[#4585F4] pl-4 text-white">
              <Image
                className="mr-[5px]"
                src={googleIcon}
                alt="Google Icon"
              ></Image>
              <p className="py-[10px]">Sign in with Google</p>
            </div>
            <div className="flex cursor-pointer items-center justify-start rounded border-[1px] border-primary pl-4 text-black">
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
            <p className="flex md:text-xl text-sm font-medium text-black">
              Need an account ?
              <span className="text-[#FB6107]">
                <Link className="flex" href="/signup">
                  Join us Now
                  <FaAngleDoubleRight className="ml-1 h-auto text-center" />
                </Link>
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
