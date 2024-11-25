import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";
import image5 from "@/assets/5.png";
import Image from "next/image";

const MentorAdminPanel = () => {
  return (
    <div className="bg-whiteSmoke">
      <div className="container mx-auto mt-16 py-8 font-poppins">
        <div className="flex gap-5">
          <div className="rounded-[5px] bg-white px-14 py-1 text-center text-[15px] font-medium">
            <Image src={image2} alt="Image 1" className="mx-auto" />
            <p className="text-black">All Task</p>
            <p className="text-silver">00</p>
          </div>

          <div className="rounded-[5px] bg-white px-14 py-1 text-center text-[15px] font-medium">
            <Image src={image1} alt="Image 1" className="mx-auto" />
            <p className="text-black">My Workshop</p>
            <p className="text-silver">00</p>
          </div>

          <div className="rounded-[5px] bg-white px-14 py-1 text-center text-[15px] font-medium">
            <Image src={image3} alt="Image 1" className="mx-auto" />
            <p className="text-black">Review</p>
            <p className="text-silver">00</p>
          </div>

          <div className="rounded-[5px] bg-white px-14 py-1 text-center text-[15px] font-medium">
            <Image src={image4} alt="Image 1" className="mx-auto" />
            <p className="text-black">My Proposal</p>
            <p className="text-silver">00</p>
          </div>

          <div className="rounded-[10px] border-[1px] border-red">
            <Image
              src={image5}
              alt="image 5"
              className="h-full w-full rounded-[10px]"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-y-8">
            <div className="rounded-sm bg-white">
              <div>
                <div>
                  <p className="mb-[2px] text-xs font-normal text-[#777777]">
                    assignment help
                  </p>
                  <p className="text-base font-medium text-black">
                    #CSCIT 445, Computer Vision , Assignment 1{" "}
                  </p>
                </div>

                <div className="flex items-center justify-between text-center">
                  <div>
                    <p className="text-xs font-normal text-[#777777]">
                      Expired on
                    </p>
                    <p className="text-[15px] font-medium text-black">
                      07 Oct 2023
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-normal text-[#777777]">
                      Expired on
                    </p>
                    <p className="text-[15px] font-medium text-black">
                      07 Oct 2023
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-normal text-[#777777]">
                      Expired on
                    </p>
                    <p className="text-[15px] font-medium text-black">
                      07 Oct 2023
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="rounded-sm bg-white">
              <div>
                <div>
                  <p className="mb-[2px] text-xs font-normal text-[#777777]">
                    assignment help
                  </p>
                  <p className="text-base font-medium text-black">
                    #CSCIT 445, Computer Vision , Assignment 1{" "}
                  </p>
                </div>

                <div className="flex items-center justify-between text-center">
                  <div>
                    <p className="text-xs font-normal text-[#777777]">
                      Expired on
                    </p>
                    <p className="text-[15px] font-medium text-black">
                      07 Oct 2023
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-normal text-[#777777]">
                      Expired on
                    </p>
                    <p className="text-[15px] font-medium text-black">
                      07 Oct 2023
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-normal text-[#777777]">
                      Expired on
                    </p>
                    <p className="text-[15px] font-medium text-black">
                      07 Oct 2023
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MentorAdminPanel;
