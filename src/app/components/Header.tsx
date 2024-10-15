"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo.png";
import User from "../../assets/User.png"
import Hamburger from "../../assets/Hambruger.png"
// import jobImage from "../../assets/job.png"

const Header = () => {
  const pathname = usePathname();
  console.log("Path name ", pathname);
  return (
    <nav
      style={{ boxShadow: "0px 4px 15px 2px rgba(24, 78, 119, 0.05)" }}
      className="mx-auto max-w-[1512px]"
    >
      <div className="flex h-[160px] items-center justify-between px-6">
        <Image
          src={Hamburger}
          alt="Hamburger"
          className="block md:hidden"
        ></Image>

        <Link href="/" className="">
          <Image
            src={logo}
            alt="Pro Study Mate Logo"
            width={178}
            height={63}
          ></Image>
        </Link>
        <div className="md:flex gap-6 font-poppins text-base font-semibold text-[#4B5155BF] hidden">
          <Link
            className={`link ${pathname === "/" ? "text-primary" : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`link ${pathname === "/job" ? "text-[17px] text-primary" : ""}`}
            href="/job"
          >
            Job
          </Link>
          <Link href="/student">Student Room</Link>
          <Link href="/workshop">Workshop</Link>
          <Link href="/">About Us</Link>
        </div>
       

        <div className="flex gap-6 text-center">
          <Link
            href="/sign"
            className="md:block hidden min-w-[115px] rounded  border-2 border-primary bg-primary px-4 py-2 text-sm font-semibold text-[#FFFFFF]"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="md:block hidden min-w-[115px] rounded border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white"
          >
            Log In
          </Link>
          <Image src={User} alt="User" className="md:hidden block"></Image>
        </div>
      </div>
    </nav>
  );
};

export default Header;
