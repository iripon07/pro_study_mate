import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";
import image5 from "@/assets/5.png";
import Image from "next/image";
import image6 from "@/assets/6.png";
import { CiPaperplane } from "react-icons/ci";

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

        <div className="mt-6 grid grid-cols-2 gap-x-5">


          <div>
            <div className="mb-[11px] flex items-center justify-between">
              <p className="text-xl font-medium text-black">
                Proposal Task{" "}
                <span className="text-[15px] text-[#777777]">(50)</span>
              </p>
              <p className="text-[15px] font-normal text-[#777777]">View all</p>
            </div>

            <div className="flex flex-col gap-y-8">
              <div className="flex items-center justify-between rounded-sm bg-white px-3 py-2">
                <div>
                  <div className="mb-[18px]">
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

                <div className="">
                  <Image
                    src={image6}
                    alt="image 6"
                    className="mx-auto mb-[18px] h-12 w-12"
                  />
                  <button className="flex items-center justify-center hover:opacity-80 duration-300 ease-in-out rounded-sm bg-blue px-6 py-1 text-xs font-medium text-white">
                    <CiPaperplane className="mr-3 text-xl" />
                    Chat
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-sm bg-white px-3 py-2">
                <div>
                  <div className="mb-[18px]">
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

                <div className="">
                  <Image
                    src={image6}
                    alt="image 6"
                    className="mx-auto mb-[18px] h-12 w-12"
                  />
                  <button className="flex items-center justify-center rounded-sm bg-blue px-6 py-1 text-xs font-medium text-white">
                    <CiPaperplane className="mr-3 text-xl" />
                    Chat
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-[11px] flex items-center justify-between">
              <p className="text-xl font-medium text-black">
                Recommended for you
              </p>
              <p className="text-[15px] font-normal text-[#777777]">View all</p>
            </div>

            <div className="flex flex-col gap-y-8">
              <div className="flex items-center justify-between rounded-sm bg-white px-3 py-2">
                <div>
                  <div className="mb-[18px]">
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

                <div className="">
                  <Image
                    src={image6}
                    alt="image 6"
                    className="mx-auto mb-[18px] h-12 w-12"
                  />
                  <button className="flex items-center justify-center rounded-sm bg-blue px-6 py-1 text-xs font-medium text-white">
                    <CiPaperplane className="mr-3 text-xl" />
                    Chat
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-sm bg-white px-3 py-2">
                <div>
                  <div className="mb-[18px]">
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

                <div className="">
                  <Image
                    src={image6}
                    alt="image 6"
                    className="mx-auto mb-[18px] h-12 w-12"
                  />
                  <button className="flex items-center justify-center rounded-sm bg-blue px-6 py-1 text-xs font-medium text-white">
                    <CiPaperplane className="mr-3 text-xl" />
                    Chat
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default MentorAdminPanel;
