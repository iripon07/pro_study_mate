import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";import { FiFilter } from "react-icons/fi";
import { LuFilter } from "react-icons/lu";

const AllTasks = () => {
  return (
    <div className="container mx-auto px-6 font-poppins">
      <div className="py-6">
        <div>
          <p className="mb-[2px] text-[32px] font-medium text-black">
            What are you looking For?
          </p>
          <p className="text-base font-light text-grey">
            Search by keywords, mentor, location, university & filters
          </p>
        </div>

        <div className="mt-[26px] flex w-full items-center gap-6 lg:w-[60%]">
          <div className="flex w-full items-center rounded-md border border-silver px-6 text-base text-silver">
            <input
              type="text"
              placeholder="Search by keywords, mentor, location, university..."
              className="w-full py-3 outline-none"
            />

            <IoSearchOutline className="h-6 w-6" />
          </div>

          <button className="flex items-center rounded-[5px] bg-[#EC221F] px-4 py-[9px] text-xl font-medium text-white">
            <LuFilter className="mr-5 h-8 w-8" />
            Filter
          </button>
        </div>
      </div>

      <div className="py-16">
        <p className="text-xs text-[#777777] mb-6 ml-2">1-50 results of 200</p>

        <div className="grid grid-cols-1 gap-x-[29px] gap-y-[37px] md:grid-cols-2">
          <div className="rounded-xl bg-white pb-[5px] pl-10 pr-8 pt-2 shadow-[0px_5px_15px_2px_#00000026]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-[#777777]">
                University name
              </p>
              <div>
                <p className="text-xl font-medium text-black">$ 40.0</p>
                <p className="text-end text-[10px] font-light text-[#B3B3B3]">
                  Negotiable
                </p>
              </div>
            </div>

            <div>
              <p className="mb-1 text-base font-medium text-black">
                CSCIT 234, Computer Vision{" "}
              </p>
              <button className="rounded-[2px] bg-[#FFF0D0] px-4 py-[2px] text-[10px] font-light text-[#777777]">
                assignment help
              </button>
              <p className="mt-[22px] text-xs font-normal text-grey">
                Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                tellus sed ligula , jdgh ddd kwo sfjlskfh flsl wrwu sdkhs ......
              </p>
            </div>

            <div className="my-3 w-full border-[0.5px] border-[#B3B3B3]"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xs font-light text-black">Due Date</p>
                <p className="text-2xs font-light text-[#777777]">
                  12, November, 2025
                </p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Proposals</p>
                <p className="text-2xs font-light text-[#777777]">0 Received</p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Join Task</p>
                <p className="text-2xs font-light text-[#777777]">0 Student</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#FE696A]">
                  Send Proposal
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white pb-[5px] pl-10 pr-8 pt-2 shadow-[0px_5px_15px_2px_#00000026]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-[#777777]">
                University name
              </p>
              <div>
                <p className="text-xl font-medium text-black">$ 40.0</p>
                <p className="text-end text-[10px] font-light text-[#B3B3B3]">
                  Negotiable
                </p>
              </div>
            </div>

            <div>
              <p className="mb-1 text-base font-medium text-black">
                CSCIT 234, Computer Vision{" "}
              </p>
              <button className="rounded-[2px] bg-[#FFF0D0] px-4 py-[2px] text-[10px] font-light text-[#777777]">
                assignment help
              </button>
              <p className="mt-[22px] text-xs font-normal text-grey">
                Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                tellus sed ligula , jdgh ddd kwo sfjlskfh flsl wrwu sdkhs ......
              </p>
            </div>

            <div className="my-3 w-full border-[0.5px] border-[#B3B3B3]"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xs font-light text-black">Due Date</p>
                <p className="text-2xs font-light text-[#777777]">
                  12, November, 2025
                </p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Proposals</p>
                <p className="text-2xs font-light text-[#777777]">0 Received</p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Join Task</p>
                <p className="text-2xs font-light text-[#777777]">0 Student</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#FE696A]">
                  Send Proposal
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white pb-[5px] pl-10 pr-8 pt-2 shadow-[0px_5px_15px_2px_#00000026]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-[#777777]">
                University name
              </p>
              <div>
                <p className="text-xl font-medium text-black">$ 40.0</p>
                <p className="text-end text-[10px] font-light text-[#B3B3B3]">
                  Negotiable
                </p>
              </div>
            </div>

            <div>
              <p className="mb-1 text-base font-medium text-black">
                CSCIT 234, Computer Vision{" "}
              </p>
              <button className="rounded-[2px] bg-[#FFF0D0] px-4 py-[2px] text-[10px] font-light text-[#777777]">
                assignment help
              </button>
              <p className="mt-[22px] text-xs font-normal text-grey">
                Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                tellus sed ligula , jdgh ddd kwo sfjlskfh flsl wrwu sdkhs ......
              </p>
            </div>

            <div className="my-3 w-full border-[0.5px] border-[#B3B3B3]"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xs font-light text-black">Due Date</p>
                <p className="text-2xs font-light text-[#777777]">
                  12, November, 2025
                </p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Proposals</p>
                <p className="text-2xs font-light text-[#777777]">0 Received</p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Join Task</p>
                <p className="text-2xs font-light text-[#777777]">0 Student</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#FE696A]">
                  Send Proposal
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white pb-[5px] pl-10 pr-8 pt-2 shadow-[0px_5px_15px_2px_#00000026]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-[#777777]">
                University name
              </p>
              <div>
                <p className="text-xl font-medium text-black">$ 40.0</p>
                <p className="text-end text-[10px] font-light text-[#B3B3B3]">
                  Negotiable
                </p>
              </div>
            </div>

            <div>
              <p className="mb-1 text-base font-medium text-black">
                CSCIT 234, Computer Vision{" "}
              </p>
              <button className="rounded-[2px] bg-[#FFF0D0] px-4 py-[2px] text-[10px] font-light text-[#777777]">
                assignment help
              </button>
              <p className="mt-[22px] text-xs font-normal text-grey">
                Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                tellus sed ligula , jdgh ddd kwo sfjlskfh flsl wrwu sdkhs ......
              </p>
            </div>

            <div className="my-3 w-full border-[0.5px] border-[#B3B3B3]"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xs font-light text-black">Due Date</p>
                <p className="text-2xs font-light text-[#777777]">
                  12, November, 2025
                </p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Proposals</p>
                <p className="text-2xs font-light text-[#777777]">0 Received</p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Join Task</p>
                <p className="text-2xs font-light text-[#777777]">0 Student</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#FE696A]">
                  Send Proposal
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white pb-[5px] pl-10 pr-8 pt-2 shadow-[0px_5px_15px_2px_#00000026]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-[#777777]">
                University name
              </p>
              <div>
                <p className="text-xl font-medium text-black">$ 40.0</p>
                <p className="text-end text-[10px] font-light text-[#B3B3B3]">
                  Negotiable
                </p>
              </div>
            </div>

            <div>
              <p className="mb-1 text-base font-medium text-black">
                CSCIT 234, Computer Vision{" "}
              </p>
              <button className="rounded-[2px] bg-[#FFF0D0] px-4 py-[2px] text-[10px] font-light text-[#777777]">
                assignment help
              </button>
              <p className="mt-[22px] text-xs font-normal text-grey">
                Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                tellus sed ligula , jdgh ddd kwo sfjlskfh flsl wrwu sdkhs ......
              </p>
            </div>

            <div className="my-3 w-full border-[0.5px] border-[#B3B3B3]"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xs font-light text-black">Due Date</p>
                <p className="text-2xs font-light text-[#777777]">
                  12, November, 2025
                </p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Proposals</p>
                <p className="text-2xs font-light text-[#777777]">0 Received</p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Join Task</p>
                <p className="text-2xs font-light text-[#777777]">0 Student</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#FE696A]">
                  Send Proposal
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white pb-[5px] pl-10 pr-8 pt-2 shadow-[0px_5px_15px_2px_#00000026]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-[#777777]">
                University name
              </p>
              <div>
                <p className="text-xl font-medium text-black">$ 40.0</p>
                <p className="text-end text-[10px] font-light text-[#B3B3B3]">
                  Negotiable
                </p>
              </div>
            </div>

            <div>
              <p className="mb-1 text-base font-medium text-black">
                CSCIT 234, Computer Vision{" "}
              </p>
              <button className="rounded-[2px] bg-[#FFF0D0] px-4 py-[2px] text-[10px] font-light text-[#777777]">
                assignment help
              </button>
              <p className="mt-[22px] text-xs font-normal text-grey">
                Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                tellus sed ligula , jdgh ddd kwo sfjlskfh flsl wrwu sdkhs ......
              </p>
            </div>

            <div className="my-3 w-full border-[0.5px] border-[#B3B3B3]"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xs font-light text-black">Due Date</p>
                <p className="text-2xs font-light text-[#777777]">
                  12, November, 2025
                </p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Proposals</p>
                <p className="text-2xs font-light text-[#777777]">0 Received</p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Join Task</p>
                <p className="text-2xs font-light text-[#777777]">0 Student</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#FE696A]">
                  Send Proposal
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white pb-[5px] pl-10 pr-8 pt-2 shadow-[0px_5px_15px_2px_#00000026]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-[#777777]">
                University name
              </p>
              <div>
                <p className="text-xl font-medium text-black">$ 40.0</p>
                <p className="text-end text-[10px] font-light text-[#B3B3B3]">
                  Negotiable
                </p>
              </div>
            </div>

            <div>
              <p className="mb-1 text-base font-medium text-black">
                CSCIT 234, Computer Vision{" "}
              </p>
              <button className="rounded-[2px] bg-[#FFF0D0] px-4 py-[2px] text-[10px] font-light text-[#777777]">
                assignment help
              </button>
              <p className="mt-[22px] text-xs font-normal text-grey">
                Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                tellus sed ligula , jdgh ddd kwo sfjlskfh flsl wrwu sdkhs ......
              </p>
            </div>

            <div className="my-3 w-full border-[0.5px] border-[#B3B3B3]"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xs font-light text-black">Due Date</p>
                <p className="text-2xs font-light text-[#777777]">
                  12, November, 2025
                </p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Proposals</p>
                <p className="text-2xs font-light text-[#777777]">0 Received</p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Join Task</p>
                <p className="text-2xs font-light text-[#777777]">0 Student</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#FE696A]">
                  Send Proposal
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white pb-[5px] pl-10 pr-8 pt-2 shadow-[0px_5px_15px_2px_#00000026]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-[#777777]">
                University name
              </p>
              <div>
                <p className="text-xl font-medium text-black">$ 40.0</p>
                <p className="text-end text-[10px] font-light text-[#B3B3B3]">
                  Negotiable
                </p>
              </div>
            </div>

            <div>
              <p className="mb-1 text-base font-medium text-black">
                CSCIT 234, Computer Vision{" "}
              </p>
              <button className="rounded-[2px] bg-[#FFF0D0] px-4 py-[2px] text-[10px] font-light text-[#777777]">
                assignment help
              </button>
              <p className="mt-[22px] text-xs font-normal text-grey">
                Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                tellus sed ligula , jdgh ddd kwo sfjlskfh flsl wrwu sdkhs ......
              </p>
            </div>

            <div className="my-3 w-full border-[0.5px] border-[#B3B3B3]"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xs font-light text-black">Due Date</p>
                <p className="text-2xs font-light text-[#777777]">
                  12, November, 2025
                </p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Proposals</p>
                <p className="text-2xs font-light text-[#777777]">0 Received</p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Join Task</p>
                <p className="text-2xs font-light text-[#777777]">0 Student</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#FE696A]">
                  Send Proposal
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white pb-[5px] pl-10 pr-8 pt-2 shadow-[0px_5px_15px_2px_#00000026]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-[#777777]">
                University name
              </p>
              <div>
                <p className="text-xl font-medium text-black">$ 40.0</p>
                <p className="text-end text-[10px] font-light text-[#B3B3B3]">
                  Negotiable
                </p>
              </div>
            </div>

            <div>
              <p className="mb-1 text-base font-medium text-black">
                CSCIT 234, Computer Vision{" "}
              </p>
              <button className="rounded-[2px] bg-[#FFF0D0] px-4 py-[2px] text-[10px] font-light text-[#777777]">
                assignment help
              </button>
              <p className="mt-[22px] text-xs font-normal text-grey">
                Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                tellus sed ligula , jdgh ddd kwo sfjlskfh flsl wrwu sdkhs ......
              </p>
            </div>

            <div className="my-3 w-full border-[0.5px] border-[#B3B3B3]"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xs font-light text-black">Due Date</p>
                <p className="text-2xs font-light text-[#777777]">
                  12, November, 2025
                </p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Proposals</p>
                <p className="text-2xs font-light text-[#777777]">0 Received</p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Join Task</p>
                <p className="text-2xs font-light text-[#777777]">0 Student</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#FE696A]">
                  Send Proposal
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white pb-[5px] pl-10 pr-8 pt-2 shadow-[0px_5px_15px_2px_#00000026]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-normal text-[#777777]">
                University name
              </p>
              <div>
                <p className="text-xl font-medium text-black">$ 40.0</p>
                <p className="text-end text-[10px] font-light text-[#B3B3B3]">
                  Negotiable
                </p>
              </div>
            </div>

            <div>
              <p className="mb-1 text-base font-medium text-black">
                CSCIT 234, Computer Vision{" "}
              </p>
              <button className="rounded-[2px] bg-[#FFF0D0] px-4 py-[2px] text-[10px] font-light text-[#777777]">
                assignment help
              </button>
              <p className="mt-[22px] text-xs font-normal text-grey">
                Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                tellus sed ligula , jdgh ddd kwo sfjlskfh flsl wrwu sdkhs ......
              </p>
            </div>

            <div className="my-3 w-full border-[0.5px] border-[#B3B3B3]"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xs font-light text-black">Due Date</p>
                <p className="text-2xs font-light text-[#777777]">
                  12, November, 2025
                </p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Proposals</p>
                <p className="text-2xs font-light text-[#777777]">0 Received</p>
              </div>
              <div>
                <p className="text-2xs font-light text-black">Join Task</p>
                <p className="text-2xs font-light text-[#777777]">0 Student</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#FE696A]">
                  Send Proposal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
