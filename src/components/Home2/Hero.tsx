import Image from "next/image";
import Circle from "@/assets/photos/Circle.png";
import HeroImage from "@/assets/photos/StudentPlatform.png";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto mb-[44px] pb-6 shadow-[0px_4px_15px_2px_#184E770D] lg:mb-7">
        <div className="mx-6 grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-end justify-start font-poppins">
            <div className="relative mx-auto flex max-w-[541px] flex-col lg:mb-[81px]">
              <h1 className="order-2 mb-[13px] text-center font-prosto text-xl text-primary lg:order-1 lg:mb-10 lg:text-start lg:text-[40px]">
                Find your Mentor
              </h1>

              <Image
                src={Circle}
                alt="Circle"
                className="absolute -top-[33%] right-[13%] hidden lg:block"
              ></Image>

              <div className="relative order-3 flex items-center justify-between lg:order-2 lg:px-0">
                <input
                  style={{ border: "1px solid #4B515559" }}
                  type="text"
                  placeholder="Search Anything"
                  className="border-1 w-full rounded border-[#] py-3 pl-4 text-[#4B51554D] outline-none placeholder:text-sm"
                />
                <button className="absolute bottom-0 right-0 top-0 rounded bg-[#1877F2] px-8 text-base font-semibold text-white">
                  Search
                </button>
              </div>

              <h6 className="order-1 mb-[6px] mt-[33px] text-center font-alkatra text-xs font-semibold text-[#4B5155BF] lg:order-3 lg:mb-0 lg:text-base">
                Study Smarter, Not Harder – Expert Mentors Are Just a Click
                Away!
              </h6>
            </div>
          </div>

          <div className="hidden w-full md:block">
            <Image src={HeroImage} alt="Hero Image"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
