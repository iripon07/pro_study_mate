import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";
import image5 from "@/assets/5.png";
import image6 from "@/assets/6.png";
import MentorWorkshop from "@/assets/MentorWorkshop.png";
import Okay from "@/assets/Okay.png";
import Review from "@/assets/Review.png";
import Image from "next/image";
import { CiCalendar, CiPaperplane } from "react-icons/ci";
import graduatedCap from "@/assets/graduatedCap.png"

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
                  <button className="flex items-center justify-center rounded-sm bg-blue px-6 py-1 text-xs font-medium text-white duration-300 ease-in-out hover:opacity-80">
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

        <div className="mt-12 grid grid-cols-2 gap-x-5">
          <div>
            <div className="mb-[11px] flex items-center justify-between">
              <p className="text-xl font-medium text-black">Active Workshop</p>
              <p className="text-[15px] font-normal text-[#777777]">View all</p>
            </div>

            <div className="flex flex-col gap-y-8">

              <div className="flex gap-4 bg-[#FFFFFF] p-2 font-prosto">
                <Image src={MentorWorkshop} alt="Mentor Workshop" />

                <div className="flex w-full justify-between">
                  <div>
                    <p className="mb-2 text-2xs text-[#C55818]">
                      SUN NOV 3,2024, 12.30 PM
                    </p>
                    <div>
                      <p className="text-xs text-black">
                        CSE 101 Workshop: Exam Topic Cover
                      </p>
                      <p>$30</p>
                    </div>
                    <p className="text-2xs text-[#4B5155BF]">
                      Organised by: Riaz Uddin
                    </p>

                    <Image src={Review} alt="Review" />
                    <div className="flex items-center gap-[11px]">
                      <Image
                        src={Okay}
                        alt="Okay"
                        className="h-[18px] w-[18px]"
                      />
                      <p className="text-2xs text-[#4B5155BF]">
                        5 Students Booked
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-rows-[1fr_auto] p-4">
                    <div>
                      <p className="font-prosto text-xs text-black">$30</p>
                    </div>
                    <button className="font-poppins text-xs font-medium text-[#098C00] duration-300 hover:opacity-80">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 bg-[#FFFFFF] p-2 font-prosto">
                <Image src={MentorWorkshop} alt="Mentor Workshop" />

                <div className="flex w-full justify-between">
                  <div>
                    <p className="mb-2 text-2xs text-[#C55818]">
                      SUN NOV 3,2024, 12.30 PM
                    </p>
                    <div>
                      <p className="text-xs text-black">
                        CSE 101 Workshop: Exam Topic Cover
                      </p>
                      <p>$30</p>
                    </div>
                    <p className="text-2xs text-[#4B5155BF]">
                      Organised by: Riaz Uddin
                    </p>

                    <Image src={Review} alt="Review" />
                    <div className="flex items-center gap-[11px]">
                      <Image
                        src={Okay}
                        alt="Okay"
                        className="h-[18px] w-[18px]"
                      />
                      <p className="text-2xs text-[#4B5155BF]">
                        5 Students Booked
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-rows-[1fr_auto] p-4">
                    <div>
                      <p className="font-prosto text-xs text-black">$30</p>
                    </div>
                    <button className="font-poppins text-xs font-medium text-[#098C00] duration-300 hover:opacity-80">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-[11px] flex items-center justify-between">
              <p className="text-xl font-medium text-black">Booking List</p>
              <p className="text-[15px] font-normal text-[#777777]">View all</p>
            </div>

            <div className="flex flex-col gap-y-8">

              <div className="rounded-sm bg-white px-[22px] pb-3 pt-2">
                <div className="mb-1 flex justify-between">
                  <p className="text-luckyGrey text-[15px]">Exam Preparation</p>
                  <p className="text-base font-medium text-black">$50</p>
                </div>
                <p className="mb-1 text-xl font-medium text-black">
                  B H M Riaz Uddin
                </p>
                <div className="flex items-center">
                  <CiCalendar className="mr-[10px] text-lg text-silver" />
                  <p className="text-luckyGrey text-xs font-medium">
                    Monday, 15th 2014
                  </p>
                </div>
                <p className="text-luckyGrey ml-7 mt-[2px] text-xs font-medium">
                  12.30 PM
                </p>

                <div className="mt-1 flex items-center justify-between">
                  <div className="flex items-center justify-center gap-x-2">
                    <Image src={graduatedCap} alt="Graduated cap" />
                    <p className="text-luckyGrey text-xs font-medium">
                      University Of Wollongong
                    </p>
                  </div>

                  <div className="flex gap-x-3">
                    <button className="rounded-sm bg-[#EC221F] px-6 py-1 text-xs font-medium text-white duration-300 hover:opacity-80">
                      Cancel
                    </button>
                    <button className="text-luckyGrey rounded-sm bg-[#FFD271] px-6 py-1 text-xs font-medium duration-300 hover:opacity-80">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-sm bg-white px-[22px] pb-3 pt-2">
                <div className="mb-1 flex justify-between">
                  <p className="text-luckyGrey text-[15px]">Exam Preparation</p>
                  <p className="text-base font-medium text-black">$50</p>
                </div>
                <p className="mb-1 text-xl font-medium text-black">
                  B H M Riaz Uddin
                </p>
                <div className="flex items-center">
                  <CiCalendar className="mr-[10px] text-lg text-silver" />
                  <p className="text-luckyGrey text-xs font-medium">
                    Monday, 15th 2014
                  </p>
                </div>
                <p className="text-luckyGrey ml-7 mt-[2px] text-xs font-medium">
                  12.30 PM
                </p>

                <div className="mt-1 flex items-center justify-between">
                  <div className="flex items-center justify-center gap-x-2">
                    <Image src={graduatedCap} alt="Graduated cap" />
                    <p className="text-luckyGrey text-xs font-medium">
                      University Of Wollongong
                    </p>
                  </div>

                  <div className="flex gap-x-3">
                    <button className="rounded-sm bg-[#EC221F] px-6 py-1 text-xs font-medium text-white duration-300 hover:opacity-80">
                      Cancel
                    </button>
                    <button className="text-luckyGrey rounded-sm bg-[#FFD271] px-6 py-1 text-xs font-medium duration-300 hover:opacity-80">
                      Cancel
                    </button>
                  </div>
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
