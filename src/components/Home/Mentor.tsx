"use client";

import Image from "next/image";
import mentor from "@/assets/Mentor.png";
import right from "@/assets/right.png";
import rightArrow from "@/assets/rightArrow.png";
import Review from "@/assets/Review.png";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Mentor = () => {
  return (
    <div className="container mx-auto my-[72px] px-4">
      <div className="mb-10 text-center text-grey md:mb-14 xl:mb-[80px]">
        <h2 className="mb-2 text-3xl font-medium lg:text-4xl xl:text-[40px]">
          Meet Our Top Mentors
        </h2>
        <p className="text-base font-normal md:text-lg xl:text-xl">
          Experts Who’ve Guided Countless Students to Success
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
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="rounded-t-[20px]">
            <Image
              className="w-full"
              src={mentor}
              alt="Photo of Mentor"
              quality={100}
            ></Image>

            <p className="mb-3 mt-5 text-xl font-medium text-darkBlue">
              University of Wollongong
            </p>

            <div className="flex items-center">
              <p className="mr-6 text-[32px] font-bold text-black">Jullian H</p>
              <Image src={right} alt="Right"></Image>
            </div>

            <p className="mb-6 mt-[10px] text-xs font-light text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, 
            </p>

            <Image src={Review} alt="Review"></Image>

            <div className="flex items-center justify-between">
              <p className="text-xl font-normal text-[#777777]">
                Starting from
              </p>
              <p className="text-[40px] font-bold text-darkBlue">$30</p>
            </div>

            <button className="mt-6 flex w-full items-center justify-between bg-[#295FCC] px-10 py-1 text-xl font-semibold text-white hover:opacity-80">
              Book me for your task
              <Image src={rightArrow} alt="Right Arrow"></Image>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-t-[20px]">
            <Image
              className="w-full"
              src={mentor}
              alt="Photo of Mentor"
              quality={100}
            ></Image>

            <p className="mb-3 mt-5 text-xl font-medium text-darkBlue">
              University of Wollongong
            </p>

            <div className="flex items-center">
              <p className="mr-6 text-[32px] font-bold text-black">Jullian H</p>
              <Image src={right} alt="Right"></Image>
            </div>

            <p className="mb-6 mt-[10px] text-xs font-light text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, 
            </p>

            <Image src={Review} alt="Review"></Image>

            <div className="flex items-center justify-between">
              <p className="text-xl font-normal text-[#777777]">
                Starting from
              </p>
              <p className="text-[40px] font-bold text-darkBlue">$30</p>
            </div>

            <button className="mt-6 flex w-full items-center justify-between bg-[#295FCC] px-10 py-1 text-xl font-semibold text-white hover:opacity-80">
              Book me for your task
              <Image src={rightArrow} alt="Right Arrow"></Image>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-t-[20px]">
            <Image
              className="w-full"
              src={mentor}
              alt="Photo of Mentor"
              quality={100}
            ></Image>

            <p className="mb-3 mt-5 text-xl font-medium text-darkBlue">
              University of Wollongong
            </p>

            <div className="flex items-center">
              <p className="mr-6 text-[32px] font-bold text-black">Jullian H</p>
              <Image src={right} alt="Right"></Image>
            </div>

            <p className="mb-6 mt-[10px] text-xs font-light text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, 
            </p>

            <Image src={Review} alt="Review"></Image>

            <div className="flex items-center justify-between">
              <p className="text-xl font-normal text-[#777777]">
                Starting from
              </p>
              <p className="text-[40px] font-bold text-darkBlue">$30</p>
            </div>

            <button className="mt-6 flex w-full items-center justify-between bg-[#295FCC] px-10 py-1 text-xl font-semibold text-white hover:opacity-80">
              Book me for your task
              <Image src={rightArrow} alt="Right Arrow"></Image>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-t-[20px]">
            <Image
              className="w-full"
              src={mentor}
              alt="Photo of Mentor"
              quality={100}
            ></Image>

            <p className="mb-3 mt-5 text-xl font-medium text-darkBlue">
              University of Wollongong
            </p>

            <div className="flex items-center">
              <p className="mr-6 text-[32px] font-bold text-black">Jullian H</p>
              <Image src={right} alt="Right"></Image>
            </div>

            <p className="mb-6 mt-[10px] text-xs font-light text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, 
            </p>

            <Image src={Review} alt="Review"></Image>

            <div className="flex items-center justify-between">
              <p className="text-xl font-normal text-[#777777]">
                Starting from
              </p>
              <p className="text-[40px] font-bold text-darkBlue">$30</p>
            </div>

            <button className="mt-6 flex w-full items-center justify-between bg-[#295FCC] px-10 py-1 text-xl font-semibold text-white hover:opacity-80">
              Book me for your task
              <Image src={rightArrow} alt="Right Arrow"></Image>
            </button>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Mentor;
