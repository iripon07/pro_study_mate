import BannerImage from "@/assets/Mentorze/bannerImage.png";
import searchIcon from "@/assets/Mentorze/searchIcon.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div style={{ border: "1px solid red" }} className="container mx-auto">
      <div className="">
        <div className="relative flex">
          <div className="z-20">
            <p className="font-istok text-xl font-bold text-[#FB6107]">
              Get Started
            </p>
            <h1 className="font-rajdhani text-4xl font-bold text-[#1E1E1E]">
              A better way to tackle university challenges is coming
            </h1>
            <p className="font-poppins text-sm font-normal text-[#4B5155BF]">
              What challenge is blocking your success—assignment, course, CV, or
              skill ? Let us help you conquer it.
            </p>

            <div className="font-poppins text-base font-normal">
              <p>Searching Tips:</p>
            </div>
            <div className="mt-10 flex items-center justify-between rounded border-[1px] border-[#4B515559]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full pl-6 outline-none"
              />
              <button className="flex items-center justify-between rounded-r bg-[#FE696A] px-7 py-3 font-poppins text-xl font-semibold text-white">
                <Image className="mr-2" src={searchIcon} alt=""></Image> Search
              </button>
            </div>
          </div>

          <div style={{ border: "1px solid red" }}>
            <Image
              className="absolute z-10 right-0 bottom-0"
              src={BannerImage}
              alt="Banner Image"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
