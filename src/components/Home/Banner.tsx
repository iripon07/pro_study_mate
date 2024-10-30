import BannerImage from "@/assets/bannerImage.png";
import { FaSearchPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      style={{ border: "2px solid red" }}
      className="container relative mx-auto"
    >
      <div
        className="absolute h-full w-full border-2 border-green-600 bg-right"
        style={{
          backgroundImage: `url(${BannerImage.src})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative z-20 flex h-[500px] items-center px-8">
        <div className="flex flex-col items-start">
          <p className="font-istok text-xl font-bold text-[#FB6107]">
            Get Started
          </p>
          <h1 className="font-rajdhani text-4xl font-bold text-[#1E1E1E]">
            A better way to tackle university challenges is coming
          </h1>
          <p className="mt-4 font-poppins text-sm font-normal text-[#4B5155BF]">
            What challenge is blocking your success—assignment, course, CV, or
            skill? Let us help you conquer it.
          </p>
          <div className="mt-6 font-poppins text-base font-normal">
            <p>Searching Tips:</p>
          </div>
          <div className="mt-6 flex w-full items-center rounded border border-[#4B515559]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-3 pl-6 outline-none"
            />
            <button className="flex items-center rounded-r bg-[#FE696A] px-6 py-3 font-poppins text-xl font-semibold text-white">
              <FaSearchPlus className="mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
