import Image from "next/image";
import Circle from "../../../assets/Circle.png";
import HeroImage from "../../../assets/StudentPlatform.png";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto mb-7 pb-5 shadow-[0px_4px_15px_2px_#184E770D]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="flex items-end justify-start font-poppins"
            style={{ border: "1px solid green" }}
          >
            <div
              style={{ border: "1px solid red" }}
              className="relative mx-auto mb-[81px] max-w-[541px]"
            >
              <h1 className="mb-10 font-prosto text-[40px] text-primary">
                Find your Mentor
              </h1>
              <Image
                src={Circle}
                alt="Circle"
                className="absolute -top-[20%] right-[13%] rotate-[-4.70deg]"
              ></Image>

              <div className="relative flex items-center justify-between">
                <input
                  style={{ border: "1px solid #4B515559" }}
                  type="text"
                  placeholder="Search Anything"
                  className="border-1 w-full rounded border-[#] py-3 pl-4 outline-none"
                />
                <button className="absolute bottom-0 right-0 top-0 rounded bg-[#1877F2] px-8 text-base font-semibold text-white">
                  Search
                </button>
              </div>
              <h6 className="mt-[33px] text-base font-semibold text-[#4B5155BF]">
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
