import bigStock from "@/assets/Mentorze/bigStock.png"
import Image from "next/image";
import profile from "@/assets/Mentorze/profile.png"
import { GoClock } from "react-icons/go";

const Workshop = () => {
  return (
    <div className="bg-whiteSmoke">
      <div className="container mx-auto py-9">
        <div className="mb-[110px] text-center">
          <h2 className="text-[40px] font-medium text-[#1E1E1E]">
            Latest Workshop
          </h2>
          <p className="text-xl font-normal text-[#4B5155BF]">
            Join Our Interactive Workshops for Skills, Strategies, and Success
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[86px]">
          
          <div className="rounded-b-[5px] rounded-t-[20px] bg-white">
            <Image className="w-full" src={bigStock} alt="Big Stock"></Image>
            <p className="mt-3 pl-4 text-base font-normal text-black">
              #CSCIT883, Computer Vision and algorithm eiuye ertie tieye teit
              yerte ..
            </p>

            <div className="bg-whiteSmoke my-5 ml-[46px] flex items-center justify-start rounded-l-full py-2 pl-4 text-[15px] font-normal text-[#FB6107]">
              <GoClock />
              <p className="ml-2">12 PM, November , 29, 2024 </p>
            </div>

            <div className="flex items-center justify-between pb-6 pl-4 pr-[22px]">
              <div className="flex gap-2">
                <Image src={profile} alt="Profile"></Image>
                <div className="">
                  <p className="text-[15px] text-[#4B5155]">B h m riaz uddin</p>
                  <p>Reviews</p>
                </div>
              </div>
              <p className="text-xl font-normal text-black">$ 10</p>
            </div>
          </div>

          <div className="rounded-b-[5px] rounded-t-[20px] bg-white">
            <Image className="w-full" src={bigStock} alt="Big Stock"></Image>
            <p className="mt-3 pl-4 text-base font-normal text-black">
              #CSCIT883, Computer Vision and algorithm eiuye ertie tieye teit
              yerte ..
            </p>

            <div className="bg-whiteSmoke my-5 ml-[46px] flex items-center justify-start rounded-l-full py-2 pl-4 text-[15px] font-normal text-[#FB6107]">
              <GoClock />
              <p className="ml-2">12 PM, November , 29, 2024 </p>
            </div>

            <div className="flex items-center justify-between pb-6 pl-4 pr-[22px]">
              <div className="flex gap-2">
                <Image src={profile} alt="Profile"></Image>
                <div className="">
                  <p className="text-[15px] text-[#4B5155]">B h m riaz uddin</p>
                  <p>Reviews</p>
                </div>
              </div>
              <p className="text-xl font-normal text-black">$ 10</p>
            </div>
          </div>

          <div className="rounded-b-[5px] rounded-t-[20px] bg-white">
            <Image className="w-full" src={bigStock} alt="Big Stock"></Image>
            <p className="mt-3 pl-4 text-base font-normal text-black">
              #CSCIT883, Computer Vision and algorithm eiuye ertie tieye teit
              yerte ..
            </p>

            <div className="bg-whiteSmoke my-5 ml-[46px] flex items-center justify-start rounded-l-full py-2 pl-4 text-[15px] font-normal text-[#FB6107]">
              <GoClock />
              <p className="ml-2">12 PM, November , 29, 2024 </p>
            </div>

            <div className="flex items-center justify-between pb-6 pl-4 pr-[22px]">
              <div className="flex gap-2">
                <Image src={profile} alt="Profile"></Image>
                <div className="">
                  <p className="text-[15px] text-[#4B5155]">B h m riaz uddin</p>
                  <p>Reviews</p>
                </div>
              </div>
              <p className="text-xl font-normal text-black">$ 10</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Workshop