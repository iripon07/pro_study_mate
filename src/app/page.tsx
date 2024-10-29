import Banner from "@/components/Home/Banner";
import Challenge from "@/components/Home/Challenge";
import Mentor from "@/components/Home/Mentor";
import RecentJobs from "@/components/Home/RecentJobs";
import Workshop from "@/components/Home/Workshop";


export default function Home() {
  return (
    <div className="font-poppins">
      <Banner />
      <Challenge />
      <RecentJobs />
      <Mentor />
      <Workshop />
    </div>
  );
}
