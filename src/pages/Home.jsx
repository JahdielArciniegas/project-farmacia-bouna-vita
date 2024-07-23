import NavBar from "../components/NavBar";
import ArrowUpIcon from "../icons/ArrowUpIcons";
import Hero from "../components/Hero";

import Clients from "../components/Clients";
import Sucursales from "../components/Sucursales";
import FormContacs from "../components/FormContacs";
import Employees from "../components/Employees";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="w-full flex flex-col items-center bg-[#ddeadd] ">
        <Hero />
        <Employees />
        <Clients />
        <Sucursales />
        <FormContacs />
        <div className="w-full relative -z-0 flex justify-center text-white">
          <div className="absolute w-full h-96 md:h-screen bg-slate-800 rounded-t-[50%] bottom-0 -z-10"></div>
        </div>
        <div className="fixed bottom-14 md:bottom-0 md:right-16 z-20">
          <a href="#header">
            <div className="animate-bounce flex justify-center items-center bg-[#33bb78] rounded-full w-16 h-16 text-white">
              <ArrowUpIcon />
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
