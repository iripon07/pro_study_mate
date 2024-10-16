import Image from "next/image";
import Facebook from "../../assets/facebook.png";
import Gmail from "../../assets/gmail.png";
import Google from "../../assets/google.png";
import Instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="bg-primary px-[53px] py-[58px] lg:py-10">
      <div className="mx-auto hidden container md:block">
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

      <div className="mx-auto mt-10 container">
        <div className="flex flex-col items-center justify-between font-poppins text-xs font-bold text-[#FFFFFF] lg:flex-row">
          <h6 className="order-2 lg:order-1 text-center">
            Copyright © 2024 Pro Study Mate. All rights reserved.
          </h6>

          <div
            className="order-1 mb-4 flex gap-6 lg:order-2 lg:mb-0"
          >
            <a href="https://www.google.com/" target="_blank">
              <Image
                src={Google}
                width={36}
                height={36}
                alt="social icon of Google"
              ></Image>
            </a>
            <Image
              src={Facebook}
              className=""
              width={47}
              height={36}
              alt="social icon of Facebook"
            ></Image>
            <Image
              src={Gmail}
              width={36}
              height={36}
              alt="social icon of Gmail"
            ></Image>
            <Image
              src={Instagram}
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
};

export default Footer;
