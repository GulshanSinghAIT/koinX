
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
      <div className="flex ">

        <div className="fixed top-0 left-0 w-full h-16  text-white flex items-center justify-center z-10">
          <Navbar />
        </div>

     
        <div className="flex flex-grow mt-16 md:px-10">
          <div className=" md:w-[75%]  md:px-4 text-white h-full">
            <Homee />
            <Performance />
            <Sediment />
            <AboutBitcoin />
            <PieChart />
            <Team />
          </div>

          <div className="w-[25%] hidden  right-0 overflow-y-scroll  scrollbar-none   text-white md:flex  justify-center">
            <Right_ />
          </div>
        </div>

      </div>
      <div>
        <UserAlsoLike />
        <div className="block md:hidden">
        <Right_ />
        </div>


      </div>
    </>

  );
}
