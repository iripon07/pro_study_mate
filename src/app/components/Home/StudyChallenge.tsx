import Image from "next/image";
import Skill from "../../../assets/Skill1.png";
import Skill2 from "../../../assets/Skill2.png";
import Assignment from "../../../assets/Group.png";
import World from "../../../assets/Vector (1).png";
import Research from "../../../assets/Vector (2).png";
import Exam from "../../../assets/Vector.png";

const StudyChallenge = () => {
  return (
    <div>
      <div className="px-10 pb-5 font-poppins shadow-[0_4px_15px_2px_#184E770D]">
        <h5 className="hidden text-center font-handwriting text-[32px] md:block">
          Unlock solutions for your toughest study challenges.{" "}
        </h5>
        <h1 className="text-center font-prosto text-[40px] font-semibold text-primary">
          Get help with your
        </h1>

        <div className="flex flex-wrap justify-between">
          <div>
            <Image className="mx-auto" src={Exam} alt="Image of Exam"></Image>
            <button
              style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
              className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
            >
              Exam Topic
            </button>
          </div>
          <div>
            <Image
              className="mx-auto"
              src={Assignment}
              alt="Image of Exam"
            ></Image>
            <button
              style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
              className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
            >
              Assignment
            </button>
          </div>
          <div>
            <Image src={World} className="mx-auto" alt="Image of Exam"></Image>
            <button
              style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
              className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
            >
              Other Learning
            </button>
          </div>

          <div>
            <Image
              className="mx-auto"
              src={Research}
              alt="Image of Exam"
            ></Image>

            <button
              style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
              className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
            >
              Research Topic
            </button>
          </div>

          <div style={{ border: "1px solid green" }}>
            <Image className="mx-auto" src={Skill} alt="Image of Exam"></Image>

            <button
              style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
              className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
            >
              Skill Based Topics
            </button>
          </div>
          
        </div>

        <div className="mt-3 flex items-center justify-center md:text-[40px] lg:mt-[54px]">
          <button className="rounded bg-[#FB6107] px-10 py-2 font-semibold text-white md:bg-[#FA171B]">
            Post Study Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyChallenge;
