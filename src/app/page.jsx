import Banner from "@/components/Banner";
import Extra from "@/components/Extra";
import Features from "@/components/Features";
import Review from "@/components/Review";
import Stats from "@/components/Stats";
import Upcoming from "@/components/Upcoming";




export default function Home() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Banner/>
      <Features/>
      <Upcoming/>
      <Stats/>
      <Review/>
      <Extra/>
     </div>
  );
}
