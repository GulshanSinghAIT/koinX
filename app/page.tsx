import Image from "next/image";
import Homee from "../components/Home";
import Right_ from "../components/Right_";
import Navbar from "@/components/Navbar";
import Performance from "@/components/Performance";
import Sediment from "@/components/Sediment";
import AboutBitcoin from "@/components/AboutBitcoin";
import PieChart from "@/components/PicChart";
import Team from "@/components/Team";
import UserAlsoLike from "@/components/UserAlsoLike";
export default function Home() {
  return (
    <>
      <div className="flex h-screen">

        <div className="fixed top-0 left-0 w-full h-16  text-white flex items-center justify-center z-10">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex flex-grow mt-16 px-10">
          <div className="w-[75%]  overflow-y-scroll px-4 scrollbar-none text-white h-full">
            <Homee />
            <Performance />
            <Sediment />
            <AboutBitcoin />
            <PieChart />
            <Team />
          </div>

          <div className="w-[25%] right-0 overflow-y-scroll  scrollbar-none   text-white flex  justify-center">
            <Right_ />
          </div>
        </div>

      </div>
      <div>
        <UserAlsoLike />

      </div>
    </>

  );
}
