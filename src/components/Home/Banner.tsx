import BannerImage from "@/assets/bannerImage.png";
import { FaSearchPlus } from "react-icons/fa";
import playButton from "@/assets/play.png"
import Image from "next/image";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% cover",
        backgroundPosition: "right center",
      }}
      className="container relative mx-auto h-[700px] w-full"
    >
      
      <div style={{border:"1px solid red"}} className="relative z-20 flex h-[500px] w-[50%] items-center px-8">
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

    // <div className="container relative mx-auto flex w-full items-center justify-between">
    //   <div className="z-20 flex flex-col items-start overflow-auto">
    //     <div>
    //       <p className="font-istok text-xl font-bold text-[#FB6107]">
    //         Get Started
    //       </p>
    //       <h1 className="font-rajdhani text-4xl font-bold text-[#1E1E1E]">
    //         A better way to tackle university challenges is coming
    //       </h1>
    //       <p className="mt-4 font-poppins text-sm font-normal text-[#4B5155BF]">
    //         What challenge is blocking your success—assignment, course, CV, or
    //         skill? Let us help you conquer it.
    //       </p>
    //     </div>
    //     <div className="mt-6 font-poppins text-base font-normal">
    //       <p>Searching Tips:</p>
    //     </div>
    //     <div className="mt-6 flex w-full items-center rounded border border-[#4B515559]">
    //       <input
    //         type="text"
    //         placeholder="What are you looking for?"
    //         className="w-full py-3 pl-6 outline-none"
    //       />
    //       <button className="flex items-center rounded-r bg-[#FE696A] px-6 py-3 font-poppins text-xl font-semibold text-white">
    //         <FaSearchPlus className="mr-2" />
    //         Search
    //       </button>
    //     </div>
    //   </div>
    //   <div style={{ border: "2px solid green" }} className="z-10 w-full">
    //     <Image className="w-full" src={BannerImage} quality={100} alt="Banner Image"/>
    //   </div>
    // </div>
  );
};

export default Banner;


