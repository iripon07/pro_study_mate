import BannerImage from "@/assets/bannerImage.png";
import playButton from "@/assets/play.png";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";
import styles from "./Banner.module.css";
import "./Banner.module.css"

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% cover",
        backgroundPosition: "right center",
      }}
      className="bannerContainer container mx-auto h-[693px] w-full"
    >
      <div className="flex flex-col items-start px-4 pt-[166px]">
        <div>
          <p className="font-istok text-sm font-bold text-[#FB6107] md:text-base lg:text-lg xl:text-xl">
            Get Started
          </p>
          <h1 className="font-rajdhani text-[22px] font-bold text-[#1E1E1E] md:text-2xl lg:text-3xl xl:text-4xl">
            A better way to tackle university challenges is coming
          </h1>
          <p className="mt-4 font-poppins text-xs font-normal text-[#4B5155BF] lg:text-sm">
            What challenge is blocking your success—assignment, course, CV, or
            skill? Let us help you conquer it.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-x-4 font-poppins text-base font-normal md:flex-row">
          <div>
            <p>Searching Tips:</p>
          </div>

          <div className="flex flex-row space-x-3">
            <button className="rounded-sm bg-[#FFD271] px-3 py-[3px] text-xs font-normal text-grey duration-300 hover:opacity-80 md:text-sm lg:text-base">
              University name
            </button>{" "}
            <button className="rounded-sm bg-[#FFD271] px-3 py-[3px] text-xs font-normal text-black duration-300 hover:opacity-80 md:text-sm lg:text-base">
              Mentor name
            </button>
            <button className="rounded-sm bg-[#FFD271] px-3 py-[3px] text-xs font-normal text-[#4B5155BF] duration-300 hover:opacity-80 md:text-sm lg:text-base">
              Course title
            </button>
          </div>
        </div>

        <div className="mt-6 flex w-full items-center rounded border border-[#4B515559] text-xs md:text-sm lg:text-base xl:w-[40%] xl:text-xl">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full py-3 pl-6 outline-none"
          />
          <button className="flex items-center rounded-r bg-[#FE696A] px-6 py-3 font-semibold text-white duration-300 hover:opacity-80">
            <FaSearchPlus className="mr-2" />
            Search
          </button>
        </div>

        <div className="mt-16 flex items-center gap-6">
          <div>
            <Image
              src={playButton}
              className="h-[53px] w-[52px] lg:h-[117px] lg:w-[114px]"
              alt="Play button"
            />
          </div>
          <div>
            <p className="mb-3 text-base text-black md:text-lg lg:text-xl xl:text-2xl">
              Watch Demo
            </p>
            <p className="text-xs text-[#4B5155BF] md:text-base lg:text-lg xl:text-xl">
              Jump start your journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
