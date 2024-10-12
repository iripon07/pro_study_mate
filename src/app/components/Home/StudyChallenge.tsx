import Image from "next/image";
import Exam from "../../../assets/Vector.png"

const StudyChallenge = () => {
  return (
    <div>
      <h5 className="font-nothing text-center text-[32px] font-normal">
        Unlock solutions for your toughest study challenges.{" "}
      </h5>
      <h1 className="text-primary font-poppins text-center text-[40px] font-semibold">
        Get help with your
      </h1>

      <div className="flex gap-4">
        <div style={{ border: "1px solid green" }}>
          <Image src={Exam} alt="Image of Exam"></Image>
          <button className="text-primary font-poppins text-lg font-semibold">
            Exam Topic
          </button>
        </div>
        <div style={{ border: "1px solid green" }}>
          <Image src={Exam} alt="Image of Exam"></Image>
          <button className="text-primary font-poppins text-lg font-semibold">
            Exam Topic
          </button>
        </div>
        <div style={{ border: "1px solid green" }}>
          <Image src={Exam} alt="Image of Exam"></Image>
          <button className="text-primary font-poppins text-lg font-semibold">
            Exam Topic
          </button>
        </div>
        <div style={{ border: "1px solid green" }}>
          <Image src={Exam} alt="Image of Exam"></Image>
          <button className="text-primary font-poppins text-lg font-semibold">
            Exam Topic
          </button>
        </div>
        <div style={{ border: "1px solid green" }}>
          <Image src={Exam} alt="Image of Exam"></Image>
          <button className="text-primary font-poppins text-lg font-semibold">
            Exam Topic
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyChallenge;
