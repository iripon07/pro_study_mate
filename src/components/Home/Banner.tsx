import BannerImage from "@/assets/bannerImage.png";
import playButton from "@/assets/play.png";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% cover",
        backgroundPosition: "right center",
      }}
      className="container relative mx-auto h-[693px] w-full"
    >
      <div
        style={{ border: "1px solid red" }}
        className="flex flex-col items-start px-4 pt-[166px]"
      >
        <div>
          <p className="font-istok text-xl font-bold text-[#FB6107]">
            Get Started
          </p>
          <h1 className="font-rajdhani text-4xl font-bold text-[#1E1E1E]">
            A better way to tackle university challenges <br /> is coming
          </h1>
          <p className="mt-4 font-poppins text-sm font-normal text-[#4B5155BF]">
            What challenge is blocking your success—assignment, course, CV, or
            skill? Let us help you conquer it.
          </p>
        </div>

        <div className="mt-6 flex flex-row gap-x-4 font-poppins text-base font-normal">
          <p>Searching Tips:</p>

          <div className="flex space-x-3">
            <button className="rounded-sm bg-[#FFD271] px-3 py-[3px] text-base font-normal text-grey duration-300 hover:opacity-80">
              University name
            </button>{" "}
            <button className="rounded-sm bg-[#FFD271] px-3 py-[3px] text-base font-normal text-black duration-300 hover:opacity-80">
              Mentor name
            </button>
            <button className="rounded-sm bg-[#FFD271] px-3 py-[3px] text-base font-normal text-[#4B5155BF] duration-300 hover:opacity-80">
              Course title
            </button>
          </div>
        </div>

        <div className="mt-6 flex w-full items-center rounded border border-[#4B515559] xl:w-[40%]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full py-3 pl-6 outline-none"
          />
          <button className="flex items-center rounded-r bg-[#FE696A] px-6 py-3 font-poppins text-xl font-semibold text-white duration-300 hover:opacity-80">
            <FaSearchPlus className="mr-2" />
            Search
          </button>
        </div>

        <div className="mt-16 flex items-center gap-6">
          <div>
            <Image
              src={playButton}
              className="h-[117px] w-[114px]"
              alt="Play button"
            />
          </div>
          <div>
            <p className="mb-3 text-2xl text-black">Watch Demo</p>
            <p className="text-xl text-[#4B5155BF]">Jump start your journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
