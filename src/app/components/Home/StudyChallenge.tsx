import Image from "next/image";
import Exam from "../../../assets/Vector.png"
import Research from "../../../assets/Vector (2).png"
import Skill from "../../../assets/Group (1).png"
import World from "../../../assets/Vector (1).png"
import Assignment from "../../../assets/Group.png"

const StudyChallenge = () => {
  return (
    <div className="px-10">
      <h5 className="text-center font-nothing text-[32px] font-normal">
        Unlock solutions for your toughest study challenges.{" "}
      </h5>
      <h1 className="text-center font-poppins text-[40px] font-semibold text-primary">
        Get help with your
      </h1>

      <div className="flex justify-between">
        <div>
          <Image src={Exam} alt="Image of Exam"></Image>
          <button
            style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
            className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
          >
            Exam Topic
          </button>
        </div>
        <div>
          <Image src={Assignment} alt="Image of Exam"></Image>
          <button
            style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
            className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
          >
            Assignment
          </button>
        </div>
        <div>
          <Image src={World} alt="Image of Exam"></Image>
          <button
            style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
            className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
          >
            Other Learning
          </button>
        </div>
        <div>
          <Image src={Research} alt="Image of Exam"></Image>

          <button
            style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
            className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
          >
            Research Topic
          </button>
        </div>
        <div style={{ border: "1px solid red" }}>
          <Image src={Skill} className="" alt="Image of Exam"></Image>
          <div style={{ border: "1px solid red" }} className="bottom-0">
            <button
              style={{ boxShadow: `#00000026 0px 5px 15px 2px` }}
              className="w-full rounded-lg px-4 py-2 font-poppins text-lg font-semibold text-primary"
            >
              Skill Based Topics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyChallenge;
