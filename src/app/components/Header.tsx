"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/Pro_Study_Mate-removebg-preview 1.png";

const Header = () => {
  return (
    <div className="mx-auto max-w-[1512px]">
      <div
        className="flex h-[160px] items-center justify-between"
      >
        <Link href="/">
          <Image
            src={logo}
            alt="Pro Study Mate Logo"
            width={178}
            height={63}
          ></Image>
        </Link>
        <div className="space-x-8 text-base text-[#4B5155BF]">
          <Link href="/">Home</Link>
          <Link href="/job">Job</Link>
          <Link href="/store">Store</Link>
          <Link href="/workshop">Workshop</Link>
          <Link href="/">About Us</Link>
        </div>
        <div className="space-x-6">
          <Link
            href="/sign"
            className="rounded bg-[#184E77] px-4 py-2 text-sm font-semibold text-[#FFFFFF]"
          >
            Sign Up
          </Link>
          <Link
            style={{ border: " 2px solid #184E77" }}
            href="/login"
            className="rounded px-4 py-2 text-sm font-semibold text-[#184E77]"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
