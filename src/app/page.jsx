import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Stats from "@/components/Stats";


export default function Home() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Banner/>
      <Features/>
      <Stats/>
     </div>
  );
}
