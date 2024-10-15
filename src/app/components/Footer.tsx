import React from 'react'
import img1 from "../../assets/pngwing.com (16) 1.png"
import img2 from "../../assets/pngwing.com (14) 1.png"
import img3 from "../../assets/pngwing.com (13) 1.png"
import img4 from "../../assets/pngwing.com (12) 1.png"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-primary px-[53px] py-[58px] lg:py-10">
      <div className="mx-auto hidden max-w-[1160px] md:block">
        <div className="flex justify-between text-sm font-semibold text-white">
          <div className="space-y-4">
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
          <div className="space-y-4">
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
          <div className="space-y-4">
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
          <div className="space-y-4">
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
          <div className="space-y-4">
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 h-auto max-w-[1196px]">
        <div className="flex flex-col items-center justify-between font-poppins text-xs font-bold text-[#FFFFFF] lg:flex-row">
          <h6 className="order-2 lg:order-1">
            Copyright © 2024 Pro Study Mate. All rights reserved.
          </h6>
          <div className="order-1 mb-4 flex gap-6 lg:order-2 lg:mb-0">
            <a href="https://www.google.com/" target="_blank">
              <Image
                src={img1}
                width={36}
                height={36}
                alt="social icon of Google"
              ></Image>
            </a>
            <Image
              src={img2}
              width={36}
              height={36}
              alt="social icon of Facebook"
            ></Image>
            <Image
              src={img3}
              width={36}
              height={36}
              alt="social icon of Gmail"
            ></Image>
            <Image
              src={img4}
              width={36}
              height={36}
              alt="social icon of Instagram"
            ></Image>
          </div>
          <h6 className="order-3">Terms of use / Privacy policy</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer