import Award from "@/components/Home2/Award";
import Courses from "@/components/Home2/Courses";
import Expertise from "@/components/Home2/Expertise";
import GetYourWork from "@/components/Home2/GetYourWork";
import Hero from "@/components/Home2/Hero";
import JobMentors from "@/components/Home2/JobMentors";
import Jobs from "@/components/Home2/Jobs";
import StudyChallenge from "@/components/Home2/StudyChallenge";
import Workshop from "../workshop/page";

const page = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1512px]">
        <Hero />
        <StudyChallenge />
        <Expertise />
        <Award />
        <GetYourWork />
        <JobMentors />
        <Jobs />
        <Courses />
        <Workshop />
      </div>
    </div>
  );
};

export default page;
