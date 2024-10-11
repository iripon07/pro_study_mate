import Jobs from "./components/Home/Jobs";
import Workshop from "./components/Home/Workshop";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1512px]">
      <Jobs />
      <Workshop />
    </div>
  );
}
