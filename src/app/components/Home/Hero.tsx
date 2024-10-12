import Image from "next/image";
import hero from "../../../assets/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-platform-e-learning-platform-online-teaching-concept 1.png";
import Mentor from "../../../assets/pngwing.com (10) 1.png"

const Hero = () => {
  return (
    <div style={{ border: "1px solid red" }} className="flex justify-between">
      <div
        style={{ border: "1px solid red" }}
        className="flex w-full items-center justify-center"
      >
        <div className="relative">
          <div style={{ border: "1px solid red" }} className="z-10 w-[541px]">
            <h3 className="text-primary font-prosto text-[40px]">
              Find your Mentor
            </h3>
            <div className="flex">
              <input
                style={{ border: "1px solid #4B515559" }}
                type="text"
                placeholder="Search Anything"
                className="w-full rounded-l text-sm text-[#4B51554D] outline-none"
              />
              <button
                style={{ border: "1px solid #4B515559" }}
                className="font-poppins h-[43.04px] w-[174.86px] rounded bg-[#1877F2] text-base font-semibold text-white"
              >
                Search
              </button>
            </div>
            <p className="font-poppins mt-4 text-base font-semibold text-[#4B5155BF]">
              Study Smarter, Not Harder – Expert Mentors Are Just a Click Away!
            </p>
          </div>
          <Image className="absolute top-0 right-0" src={Mentor} alt="Mentor Photo"></Image>
        </div>
      </div>
      <Image src={hero} alt="Hero Image" className="w-full"></Image>
    </div>
  );
};

export default Hero;
