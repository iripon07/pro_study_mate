import Image from "next/image";
import Members from "../../../assets/Members.png";
import Project from "../../../assets/Project.png";
import Reviews from "../../../assets/Reviews.png";
import Transaction from "../../../assets/Transaction.png";

const Award = () => {
  return (
    <div className="mt-12">
      <div className="mx-auto flex max-w-[1259px] flex-wrap gap-[56px] font-poppins">
        <div
          style={{ boxShadow: "0px 5px 15px 2px #FB610726" }}
          className="w-[272px] py-[26px]"
        >
          <Image className="mx-auto" src={Members} alt="Members"></Image>
          <h2 className="mb-1 mt-2 text-center text-[28px] font-bold text-primary">
            50,000
          </h2>
          <h6 className="text-center text-base font-semibold text-[#4B5155]">
            Members Worldwide
          </h6>
        </div>

        <div
          style={{ boxShadow: "0px 5px 15px 2px #7B2CBF26" }}
          className="w-[272px] py-[26px]"
        >
          <Image className="mx-auto" src={Project} alt="Members"></Image>
          <h2 className="mb-1 mt-2 text-center text-[28px] font-bold text-primary">
            7,500
          </h2>
          <h6 className="text-center text-base font-semibold text-[#4B5155]">
            Project Completed
          </h6>
        </div>

        <div
          style={{ boxShadow: "0px 5px 15px 2px #691E0626" }}
          className="w-[272px] py-[26px]"
        >
          <Image className="mx-auto" src={Transaction} alt="Members"></Image>
          <h2 className="mb-1 mt-2 text-center text-[28px] font-bold text-primary">
            $90 millions
          </h2>
          <h6 className="text-center text-base font-semibold text-[#4B5155]">
            Successful Transaction{" "}
          </h6>
        </div>

        <div
          style={{ boxShadow: "0px 5px 15px 2px #5C800126" }}
          className="w-[272px] py-[26px]"
        >
          <Image className="mx-auto" src={Reviews} alt="Members"></Image>
          <h2 className="mb-1 mt-2 text-center text-[28px] font-bold text-primary">
            100%
          </h2>
          <h6 className="text-center text-base font-semibold text-[#4B5155]">
            Based on 50+ Reviews
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Award;
