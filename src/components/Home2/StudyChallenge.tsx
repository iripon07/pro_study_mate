import Image from "next/image";
import Assignment from "@/assets/Assignment.png";
import Skill from "@/assets/Skill1.png";
import Research from "@/assets/Research.png";
import Exam from "@/assets/Exam.png";
import World from "@/assets/World.png";

const StudyChallenge = () => {
  return (
    <div>
      <div className="px-10 pb-5 font-poppins shadow-[0_4px_15px_2px_#184E770D]">
        <h5 className="hidden text-center font-handwriting text-[32px] md:block">
          Unlock solutions for your toughest study challenges.{" "}
        </h5>
        <h1 className="mb-[10px] lg:mb-[80px] md:mb-7 text-center font-prosto text-xl md:text-[40px] font-semibold text-primary">
          Get help with your
        </h1>

        <div className="hidden md:block">
          <div
            className="flex flex-wrap justify-between"
          >
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
              <Image
                src={World}
                className="mx-auto"
                alt="Image of Exam"
              ></Image>
              <button
                style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
                className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
              >
                Other Learning
              </button>
            </div>

            <div >
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

            <div >
              <Image
                className="mx-auto mb-14"
                src={Skill}
                alt="Image of Exam"
              ></Image>

              <button
                style={{
                  boxShadow: `#00000026 0px 5px 15px 2px`,
                }}
                className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
              >
                Skill Based Topics
              </button>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex justify-between gap-6 font-poppins text-[10px] font-medium text-primary">
            <div>
              <Image
                width={26}
                height={26}
                className="mx-auto"
                src={Assignment}
                alt="Assignment"
              ></Image>
              <h4 className="text-center">
                Assignment & <br /> exam Topics
              </h4>
            </div>

            <div>
              <Image
                className="mx-auto"
                width={27}
                height={24}
                src={Skill}
                alt="Skill"
              ></Image>
              <h4 className="text-center">
                Skill Development & <br /> Research Topics
              </h4>
            </div>

            <div>
              <Image
                className="mx-auto"
                width={36}
                height={34}
                src={World}
                alt="World"
              ></Image>
              <h4 className="text-center">Other Learning</h4>
            </div>
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
