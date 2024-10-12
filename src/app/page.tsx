import Hero from "./components/Home/Hero";
import Jobs from "./components/Home/Jobs";
import StudyChallenge from "./components/Home/StudyChallenge";
import Workshop from "./components/Home/Workshop";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1512px]">
      <Hero />
      <StudyChallenge />
      <Jobs />
      <Workshop />
    </div>
  );
}
