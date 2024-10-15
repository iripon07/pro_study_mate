import Award from "./components/Home/Award";
import Expertise from "./components/Home/Expertise";
import GetYourWork from "./components/Home/GetYourWork";
import JobMentors from "./components/Home/JobMentors";
import Jobs from "./components/Home/Jobs";
import StudyChallenge from "./components/Home/StudyChallenge";
import Workshop from "./components/Home/Workshop";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1512px]">
      {/* <Hero /> */}
      <StudyChallenge />
      <Expertise />
      <Award />
      <GetYourWork />
      <JobMentors />
      <Jobs />
      {/* <Courses /> */}
      <Workshop />
      {/* <CardSlider/>  */}
    </div>
  );
}
