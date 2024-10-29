import Mentorze from "@/assets/Mentorze/Mentorze.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="container mx-auto mt-[128px]">
          <div
            className="flex items-center justify-between"
          >
            <div>
              <Image src={Mentorze} alt="Mentorze" quality={100}></Image>
            </div>

            <div>
              <p className="mb-4 text-2xl font-normal text-black">Mentor</p>
              <Link
                className="text-[15px] font-medium text-[#777777BF]"
                href="/link1"
              >
                link1
              </Link>
              <Link
                className="text-[15px] font-medium text-[#777777BF]"
                href="/link1"
              >
                link2
              </Link>
            </div>
            <div>
              <p className="mb-4 text-2xl font-normal text-black">Student</p>
              <Link
                className="text-[15px] font-medium text-[#777777BF]"
                href="/link1"
              >
                link1
              </Link>
              <Link
                className="text-[15px] font-medium text-[#777777BF]"
                href="/link1"
              >
                link2
              </Link>
            </div>

            <div>
              <p className="mb-3 text-2xl font-normal text-black">Contact Us</p>
              <p className="text-[15px] font-medium text-[#777777BF]">
                Collin Street West, Victor 6007, Australia. <br /> +1
                246-345-0695 <br /> info@Zobstar123.com
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-[#242425]">
        <div className="container mx-auto">
          <p className="py-[18px] text-center text-2xl font-normal text-white">
            Copyright 2021 © Mentorze.com, All Rights Reserved.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
