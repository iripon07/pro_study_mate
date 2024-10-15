import Image from "next/image";
import HeroImage from "../../../assets/StudentPlatform.png";
import SearchIcon from "../../../assets/SearchIcon.png"
import Mentor from "../../../assets/Circle.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 shadow-[0px_4px_15px_2px_#184E770D]">
        <div
          className="flex items-end justify-start"
          style={{ border: "1px solid green" }}
        >
          <div className="mb-[101px] ml-[70px] max-w-[541px]">
            <h1 className="font-prosto text-[40px] text-primary">
              Find your Mentor
            </h1>

            <div className="relative flex">
              <input
                style={{ border: "1px solid #4B515559" }}
                type="text"
                placeholder="Search Anything"
                className="border-1 w-full rounded border-[#] py-3 pl-4 outline-none"
              />
              <button className="absolute right-0 bg-[#1877F2] text-base font-semibold text-white max-w-[174px]">Search</button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Image src={HeroImage} alt="Hero Image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
