import React from 'react'
import img1 from "../../assets/pngwing.com (16) 1.png"
import img2 from "../../assets/pngwing.com (14) 1.png"
import img3 from "../../assets/pngwing.com (13) 1.png"
import img4 from "../../assets/pngwing.com (12) 1.png"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-[#184E77] py-10">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-4 gap-6 text-[#FFFFFF] text-sm font-semibold">
          <div>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
          <div>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
          <div>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
          <div className="text-end">
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
        </div>
      </div>
      <div className="max-w-[1196px] mx-auto mt-10">
        <div  className="text-xs text-[#FFFFFF] font-bold flex justify-between items-center">
          <h6>Copyright © 2024 Pro Study Mate. All rights reserved.</h6>
          <div className="flex gap-6">
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
          <h6>Terms of use / Privacy policy</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer