import assignmentImage from "@/assets/Assignment.png";
import courseImage from "@/assets/Course.png";
import gridImage from "@/assets/Grid.png";
import researchImage from "@/assets/Research.png";
import skillImage from "@/assets/Skill.png";
import umbrellaImage from "@/assets/Umbrella.png";
import Image from "next/image";

const Challenge = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-between font-poppins font-medium">
          <div className="text-center">
            <Image
              className="mx-auto"
              src={courseImage}
              alt="Course Image"
            ></Image>
            <h2 className="my-2 text-2xl text-[#1E1E1E]">Course Lesson</h2>
            <h6 className="text-base text-[#4B5155BF]">136788 listings</h6>
          </div>
          <div className="text-center">
            <Image
              className="mx-auto"
              src={assignmentImage}
              alt="Course Image"
              quality={100}
            ></Image>
            <h2 className="my-2 text-2xl text-[#1E1E1E]">Assignment</h2>
            <h6 className="text-base text-[#4B5155BF]">136788 listings</h6>
          </div>
          <div className="text-center">
            <Image
              className="mx-auto"
              src={skillImage}
              alt="Course Image"
              quality={100}
            ></Image>
            <h2 className="my-2 text-2xl text-[#1E1E1E]">Skill Development</h2>
            <h6 className="text-base text-[#4B5155BF]">136788 listings</h6>
          </div>
          <div className="text-center">
            <Image
              className="mx-auto"
              src={researchImage}
              alt="Course Image"
              quality={100}
            ></Image>
            <h2 className="my-2 text-2xl text-[#1E1E1E]">Research</h2>
            <h6 className="text-base text-[#4B5155BF]">136788 listings</h6>
          </div>
          <div className="text-center">
            <Image
              className="mx-auto"
              src={gridImage}
              alt="Course Image"
              quality={100}
            ></Image>
            <h2 className="my-2 text-2xl text-[#1E1E1E]">IELTS / PTE</h2>
            <h6 className="text-base text-[#4B5155BF]">136788 listings</h6>
          </div>
          <div className="text-center">
            <Image
              className="mx-auto"
              src={umbrellaImage}
              alt="Course Image"
              quality={100}
            ></Image>
            <h2 className="my-2 text-2xl text-[#1E1E1E]">Others </h2>
            <h6 className="text-base text-[#4B5155BF]">136788 listings</h6>
          </div>
        </div>
        <button className="bg-[#29C51D] hover:opacity-80 mt-6 text-xl font-semibold text-white rounded-[5px] py-[11px] px-8 block mx-auto">
          Post Your Challenge
        </button>
      </div>
    </div>
  );
};

export default Challenge;
