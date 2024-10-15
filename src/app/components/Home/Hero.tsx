import Image from "next/image";
import hero from "../../../assets/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-platform-e-learning-platform-online-teaching-concept 1.png";
import Mentor from "../../../assets/pngwing.com (10) 1.png"


const Hero = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex w-full items-end justify-center">
          <div style={{ border: "1px solid red" }} className="relative">
            <div className="z-10 mb-[87px] w-[541px]">
              <h3 className="font-prosto text-[40px] text-primary">
                Find your Mentor
              </h3>
              <div className="flex">
                <input
                  style={{ border: "1px solid #4B515559" }}
                  type="text"
                  placeholder="Search Anything"
                  className="w-full rounded-l text-sm text-[#4B51554D] outline-none"
                />
                <button className="h-[43.04px] w-[174.86px] rounded bg-[#1877F2] font-poppins text-base font-semibold text-white">
                  Search
                </button>
              </div>
              <p className="mt-4 font-poppins text-base font-semibold text-[#4B5155BF]">
                Study Smarter, Not Harder – Expert Mentors Are Just a Click
                Away!
              </p>
            </div>
            <Image
              className="absolute right-0 top-0"
              src={Mentor}
              alt="Mentor Photo"
            ></Image>
          </div>
        </div>
        <Image src={hero} alt="Hero Image" className="w-full"></Image>
      </div>
    </div>
  );
};

export default Hero;
