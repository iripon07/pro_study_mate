import Image from "next/image";
import mentor from "@/assets/Mentorze/Mentor.png"
import right from "@/assets/Mentorze/right.png"
import rightArrow from "@/assets/Mentorze/rightArrow.png"

const Mentor = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center text-grey">
        <h1 className="mb-2 text-[40px] font-medium">Meet Our Top Mentors</h1>
        <h6 className="text-xl font-normal">
          Experts Who’ve Guided Countless Students to Success
        </h6>
      </div>

      <div className="grid grid-cols-3 gap-6">

        <div>
          <div>
            <Image src={mentor} alt="Photo of Mentor" quality={100}></Image>
          </div>
          <h3 className="text-xl font-medium text-darkBlue">
            University of Wollongong
          </h3>
          <p className="text-xs font-light text-black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, 
          </p>
          <div className="flex items-center">
            <h1 className="mr-6 text-[32px] font-bold text-black">Jullian H</h1>
            <Image src={right} alt="Right"></Image>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-normal text-[#777777]">Starting from</p>
            <h3 className="text-[40px] font-bold text-darkBlue">$30</h3>
          </div>
          <button className="mb-5 flex w-full items-center justify-between bg-[#295FCC] px-10 py-1 text-xl font-semibold text-white">
            Book me for your task
            <Image src={rightArrow} alt="Right Arrow"></Image>
          </button>
          
        </div>

        <div>
          <div>
            <Image src={mentor} alt="Photo of Mentor" quality={100}></Image>
          </div>
          <h3 className="text-xl font-medium text-darkBlue">
            University of Wollongong
          </h3>
          <p className="text-xs font-light text-black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, 
          </p>
          <div className="flex items-center">
            <h1 className="mr-6 text-[32px] font-bold text-black">Jullian H</h1>
            <Image src={right} alt="Right"></Image>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-normal text-[#777777]">Starting from</p>
            <h3 className="text-[40px] font-bold text-darkBlue">$30</h3>
          </div>
          <button className="mb-5 flex w-full items-center justify-between bg-[#295FCC] px-10 py-1 text-xl font-semibold text-white">
            Book me for your task
            <Image src={rightArrow} alt="Right Arrow"></Image>
          </button>
          <div className="flex items-center justify-between bg-[#295FCC]">
            <h6>Book me for your task</h6>
            <Image src={rightArrow} alt="Right Arrow"></Image>
          </div>
        </div>

        <div>
          <div>
            <Image src={mentor} alt="Photo of Mentor" quality={100}></Image>
          </div>
          <h3 className="text-xl font-medium text-darkBlue">
            University of Wollongong
          </h3>
          <p className="text-xs font-light text-black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, 
          </p>
          <div className="flex items-center">
            <h1 className="mr-6 text-[32px] font-bold text-black">Jullian H</h1>
            <Image src={right} alt="Right"></Image>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-normal text-[#777777]">Starting from</p>
            <h3 className="text-[40px] font-bold text-darkBlue">$30</h3>
          </div>
          <button className="mb-5 flex w-full items-center justify-between bg-[#295FCC] px-10 py-1 text-xl font-semibold text-white">
            Book me for your task
            <Image src={rightArrow} alt="Right Arrow"></Image>
          </button>
          <div className="flex items-center justify-between bg-[#295FCC]">
            <h6>Book me for your task</h6>
            <Image src={rightArrow} alt="Right Arrow"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentor