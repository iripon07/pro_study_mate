import Banner from "@/components/Home/Banner";
import Challenge from "@/components/Home/Challenge";
import Income from "@/components/Home/Income";
import Mentor from "@/components/Home/Mentor";
import RecentJobs from "@/components/Home/RecentJobs";
import Workshop from "@/components/Home/Workshop";

export default function Home() {
  return (
    <div className="font-poppins">
      <Banner />
      <Challenge />
      <Income />
      <RecentJobs />
      <Mentor />
      <Workshop />
    </div>
  );
}
