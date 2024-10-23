import Link from "next/link";

const JobMentors = () => {
  return (
    <div className="mx-auto mt-6 block bg-[#184E7740] py-12 text-center font-poppins text-base font-semibold text-white md:hidden">
      <div className="mx-auto max-w-[162px]">
        <Link
          className="mb-6 block min-w-[161px] rounded bg-primary py-[10px]"
          href=""
        >
          Post a Job
        </Link>
        <Link
          className="block min-w-[161px] rounded bg-primary py-[10px]"
          href=""
        >
          Find Mentors
        </Link>
      </div>
    </div>
  );
};

export default JobMentors;
