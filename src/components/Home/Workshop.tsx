"use client";

import bigStock from "@/assets/bigStock.png";
import Image from "next/image";
import profile from "@/assets/profile.png";
import { GoClock } from "react-icons/go";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Workshop = () => {
  return (
    <div className="bg-whiteSmoke">
      <div className="container mx-auto px-4 py-9">
        <div className="mb-6 text-center md:mb-10 xl:mb-[110px]">
          <h2 className="text-2xl font-medium text-[#1E1E1E] md:text-3xl xl:text-[40px]">
            Latest Workshop
          </h2>
          <p className="text-base font-normal text-[#4B5155BF] md:text-lg xl:text-xl">
            Join Our Interactive Workshops for Skills, Strategies, and Success
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="rounded-b-[5px] rounded-t-[20px] bg-white">
              <Image className="w-full" src={bigStock} alt="Big Stock"></Image>
              <p className="mt-3 pl-4 text-base font-normal text-black">
                #CSCIT883, Computer Vision and algorithm eiuye ertie tieye teit
                yerte ..
              </p>

              <div className="my-5 ml-[46px] flex items-center justify-start rounded-l-full bg-whiteSmoke py-2 pl-4 text-[15px] font-normal text-[#FB6107]">
                <GoClock />
                <p className="ml-2">12 PM, November , 29, 2024 </p>
              </div>

              <div className="flex items-center justify-between pb-6 pl-4 pr-[22px]">
                <div className="flex gap-2">
                  <Image src={profile} alt="Profile"></Image>
                  <div className="">
                    <p className="text-[15px] text-[#4B5155]">
                      B h m riaz uddin
                    </p>
                    <p>Reviews</p>
                  </div>
                </div>
                <p className="text-xl font-normal text-black">$ 10</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-b-[5px] rounded-t-[20px] bg-white">
              <Image className="w-full" src={bigStock} alt="Big Stock"></Image>
              <p className="mt-3 pl-4 text-base font-normal text-black">
                #CSCIT883, Computer Vision and algorithm eiuye ertie tieye teit
                yerte ..
              </p>

              <div className="my-5 ml-[46px] flex items-center justify-start rounded-l-full bg-whiteSmoke py-2 pl-4 text-[15px] font-normal text-[#FB6107]">
                <GoClock />
                <p className="ml-2">12 PM, November , 29, 2024 </p>
              </div>

              <div className="flex items-center justify-between pb-6 pl-4 pr-[22px]">
                <div className="flex gap-2">
                  <Image src={profile} alt="Profile"></Image>
                  <div className="">
                    <p className="text-[15px] text-[#4B5155]">
                      B h m riaz uddin
                    </p>
                    <p>Reviews</p>
                  </div>
                </div>
                <p className="text-xl font-normal text-black">$ 10</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-b-[5px] rounded-t-[20px] bg-white">
              <Image className="w-full" src={bigStock} alt="Big Stock"></Image>
              <p className="mt-3 pl-4 text-base font-normal text-black">
                #CSCIT883, Computer Vision and algorithm eiuye ertie tieye teit
                yerte ..
              </p>

              <div className="my-5 ml-[46px] flex items-center justify-start rounded-l-full bg-whiteSmoke py-2 pl-4 text-[15px] font-normal text-[#FB6107]">
                <GoClock />
                <p className="ml-2">12 PM, November , 29, 2024 </p>
              </div>

              <div className="flex items-center justify-between pb-6 pl-4 pr-[22px]">
                <div className="flex gap-2">
                  <Image src={profile} alt="Profile"></Image>
                  <div className="">
                    <p className="text-[15px] text-[#4B5155]">
                      B h m riaz uddin
                    </p>
                    <p>Reviews</p>
                  </div>
                </div>
                <p className="text-xl font-normal text-black">$ 10</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-b-[5px] rounded-t-[20px] bg-white">
              <Image className="w-full" src={bigStock} alt="Big Stock"></Image>
              <p className="mt-3 pl-4 text-base font-normal text-black">
                #CSCIT883, Computer Vision and algorithm eiuye ertie tieye teit
                yerte ..
              </p>

              <div className="my-5 ml-[46px] flex items-center justify-start rounded-l-full bg-whiteSmoke py-2 pl-4 text-[15px] font-normal text-[#FB6107]">
                <GoClock />
                <p className="ml-2">12 PM, November , 29, 2024 </p>
              </div>

              <div className="flex items-center justify-between pb-6 pl-4 pr-[22px]">
                <div className="flex gap-2">
                  <Image src={profile} alt="Profile"></Image>
                  <div className="">
                    <p className="text-[15px] text-[#4B5155]">
                      B h m riaz uddin
                    </p>
                    <p>Reviews</p>
                  </div>
                </div>
                <p className="text-xl font-normal text-black">$ 10</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="rounded-b-[5px] rounded-t-[20px] bg-white">
              <Image className="w-full" src={bigStock} alt="Big Stock"></Image>
              <p className="mt-3 pl-4 text-base font-normal text-black">
                #CSCIT883, Computer Vision and algorithm eiuye ertie tieye teit
                yerte ..
              </p>

              <div className="my-5 ml-[46px] flex items-center justify-start rounded-l-full bg-whiteSmoke py-2 pl-4 text-[15px] font-normal text-[#FB6107]">
                <GoClock />
                <p className="ml-2">12 PM, November , 29, 2024 </p>
              </div>

              <div className="flex items-center justify-between pb-6 pl-4 pr-[22px]">
                <div className="flex gap-2">
                  <Image src={profile} alt="Profile"></Image>
                  <div className="">
                    <p className="text-[15px] text-[#4B5155]">
                      B h m riaz uddin
                    </p>
                    <p>Reviews</p>
                  </div>
                </div>
                <p className="text-xl font-normal text-black">$ 10</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Workshop;
 