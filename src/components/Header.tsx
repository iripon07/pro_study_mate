"use client";

import logo from "@/assets/logo.png";
import mobileLogo from "@/assets/logoMobile.png";
import searchIcon from "@/assets/searchIconMobile.png";
import userIcon from "@/assets/userIconMobile.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {

  const pathname = usePathname();
  const [open, setOpen] = useState(false);


  return (
    <nav className="shadow-[0px_5px_15px_2px_#184E770D]">
      <div className="hidden md:block">
        <div className="container mx-auto flex h-[108px] items-center justify-between">
          <div>
            <Link href="/">
              <Image src={logo} alt="Logo"></Image>
            </Link>
          </div>

          <div className="flex items-center justify-between space-x-[80px]">
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
                    ? "min-w-[115px] rounded bg-[#FE696A] py-2 text-white hover:border-2 hover:border-transparent"
                    : "block min-w-[115px] rounded border-2 border-primary py-2 text-primary duration-300 hover:border-2 hover:border-transparent hover:bg-[#FE696A] hover:text-white"
                }
                href="/signup"
              >
                Sign Up
              </Link>
              <Link
                className={
                  pathname == "/login"
                    ? "min-w-[115px] rounded bg-[#FE696A] py-2 text-white hover:border-2 hover:border-transparent"
                    : "block min-w-[115px] rounded border-2 border-primary py-2 text-primary duration-300 hover:border-2 hover:border-transparent hover:bg-[#FE696A] hover:text-white"
                }
                href="/login"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ border: "1px solid green" }}
        className="container mx-auto block md:hidden"
      >
        <div className="flex h-[68px] items-center justify-between">
          <div className="flex items-center text-4xl font-extrabold text-primary">
            <div onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </div>

            <Link href="/">
              <Image
                src={mobileLogo}
                className="h-[33px] w-[62px]"
                alt="Logo for mobile"
              ></Image>
            </Link>
          </div>

          <div className="flex items-center">
            <Image
              src={searchIcon}
              width={36}
              height={36}
              className="mr-7"
              alt="Search icon"
            ></Image>
            <Image
              src={userIcon}
              className="h-[46px] w-[46px]"
              alt="User Icon"
            ></Image>
          </div>

          <div
            className={`absolute z-50 flex w-full flex-col bg-primary text-xl font-semibold text-white duration-300 ${open ? "top-[68px]" : "-top-[150px]"} `}
          >
            <Link
              className="border-b-[1px] border-white py-2 text-center"
              href="/task"
            >
              Task
            </Link>
            <Link
              className="border-b-[1px] border-white py-2 text-center"
              href="/workshop"
            >
              Workshop
            </Link>
            <Link
              className="border-b-[1px] border-white py-2 text-center"
              href="/studentroom"
            >
              Student Room
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
