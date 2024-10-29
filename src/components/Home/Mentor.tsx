import Image from "next/image";
import mentor from "@/assets/Mentorze/Mentor.png";
import right from "@/assets/Mentorze/right.png";
import rightArrow from "@/assets/Mentorze/rightArrow.png";
import Review from "@/assets/Mentorze/Review.png";

const Mentor = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-[80px] mt-[72px] text-center text-grey">
        <h2 className="mb-2 text-[40px] font-medium">Meet Our Top Mentors</h2>
        <p className="text-xl font-normal">
          Experts Who’ve Guided Countless Students to Success
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[83px]">

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
            <p className="text-xl font-normal text-[#777777]">Starting from</p>
            <p className="text-[40px] font-bold text-darkBlue">$30</p>
          </div>

          <button className="mt-6 flex w-full items-center justify-between bg-[#295FCC] px-10 py-1 text-xl font-semibold text-white">
            Book me for your task
            <Image src={rightArrow} alt="Right Arrow"></Image>
          </button>
        </div>

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
            <p className="text-xl font-normal text-[#777777]">Starting from</p>
            <p className="text-[40px] font-bold text-darkBlue">$30</p>
          </div>

          <button className="mt-6 flex w-full items-center justify-between bg-[#295FCC] px-10 py-1 text-xl font-semibold text-white">
            Book me for your task
            <Image src={rightArrow} alt="Right Arrow"></Image>
          </button>
        </div>

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
            <p className="text-xl font-normal text-[#777777]">Starting from</p>
            <p className="text-[40px] font-bold text-darkBlue">$30</p>
          </div>

          <button className="mt-6 flex w-full items-center justify-between bg-[#295FCC] px-10 py-1 text-xl font-semibold text-white">
            Book me for your task
            <Image src={rightArrow} alt="Right Arrow"></Image>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Mentor;
