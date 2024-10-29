import Image from "next/image"
import BannerImage from "@/assets/Mentorze/bannerImage.png"
import searchIcon from "@/assets/Mentorze/searchIcon.png"


const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div>
          <h6 className="font-istok text-xl font-bold text-[#FB6107]">
            Get Started
          </h6>
          <h1 className="font-rajdhani text-4xl font-bold text-[#1E1E1E]">
            A better way to tackle university challenges is coming
          </h1>
          <p className="font-poppins text-sm font-normal text-[#4B5155BF]">
            What challenge is blocking your success—assignment, course, CV, or
            skill ? Let us help you conquer it.
          </p>

          <div className="text-base font-poppins font-normal">
            <h5>Searching Tips:</h5>
          </div>
          <div className="rounded border-[1px] mt-10 border-[#4B515559] flex justify-between items-center">
            <input type="text" placeholder="What are you looking for?" className="pl-6 w-full outline-none" />
            <button className="bg-[#FE696A] px-7 text-xl font-semibold font-poppins rounded-r flex justify-between py-3  items-center text-white">
              {" "}
              <Image className="mr-2" src={searchIcon} alt=""></Image> Search
            </button>
          </div>
        </div>
        <div>
          <Image src={BannerImage} alt="Banner Image"></Image>
        </div>
      </div>
    </div>
  );
}

export default Banner