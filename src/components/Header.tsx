"use client"

import logo from "@/assets/Mentorze/logo.png"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
     const pathname = usePathname();
  return (
    <div className="shadow-[0px_5px_15px_2px_#184E770D]">
      <div className="container mx-auto flex h-[108px] items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="Logo"></Image>
        </Link>
        <div className="flex space-x-6 text-xl font-semibold text-[#4B5155BF]">
          <Link
            className={
              pathname == "/task"
                ? "text-primary underline"
                : "duration-300 hover:text-primary hover:underline"
            }
            href="/task"
          >
            Task
          </Link>
          <Link
            className={
              pathname == "/workshop"
                ? "text-primary underline"
                : "duration-300 hover:text-primary hover:underline"
            }
            href="/workshop"
          >
            Workshop
          </Link>
          <Link
            className={
              pathname == "/studentroom"
                ? "text-primary underline"
                : "duration-300 hover:text-primary hover:underline"
            }
            href="/studentroom"
          >
            Student Room
          </Link>
        </div>
        <div className="flex space-x-4 text-center text-sm font-semibold">
          <Link
            className={
              pathname == "/signup"
                ? "min-w-[115px] rounded border-none bg-[#FE696A] py-2 text-white"
                : "block min-w-[115px] rounded border-2 border-primary py-2 text-primary duration-300 hover:border-none hover:bg-[#FE696A] hover:text-white"
            }
            href="/signup"
          >
            Sign Up
          </Link>
          <Link
            className={
              pathname == "/login"
                ? "min-w-[115px] rounded border-none bg-[#FE696A] py-2 text-white"
                : "block min-w-[115px] rounded border-2 border-primary py-2 text-primary duration-300 hover:border-none hover:bg-[#FE696A] hover:text-white"
            }
            href="/login"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header