import { testimonios } from "../data/testimonios";
import CardClient from "./CardClient";

export default function Clients() {
  return (
    <section
      id="clientes"
      className="w-5/6 h-screen flex flex-col items-center z-0"
    >
      <div className="absolute flex lg:flex-col justify-center items-center bg-slate-800 h-80 lg:h-36 w-full text-white shadow-2xl">
        <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-0 lg:justify-around">
          <div className=" flex flex-col items-center">
            <h5 className="text-3xl lg:text-6xl font-extrabold">+10</h5>
            <p className="text-slate-300">
              Productos para diferentes enfermedades
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h5 className="text-3xl lg:text-6xl font-extrabold">6</h5>
            <p className="text-slate-300">Diferentes localidades</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-3xl lg:text-6xl font-extrabold">1M</h5>
            <p className="text-slate-300">Clientes satisfechos</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-3xl lg:text-6xl font-extrabold">24h</h5>
            <p className="text-slate-300">De servicio continuo</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-60 lg:mt-0 lg:gap-10 h-full justify-center items-center pt-7">
        <h2 className="text-3xl font-bold text-white text-center ">
          Testimonios de nuestros clientes
        </h2>
        <div className="flex gap-7 w-full lg:w-auto overflow-x-scroll lg:overflow-hidden">
          {testimonios.map((testimonio) => (
            <CardClient
              key={testimonio.id}
              cardName={testimonio.nombre}
              cardDesc={testimonio.comentario}
              cardImg={testimonio.imagen}
            />
          ))}
        </div>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-b from-slate-600 via-[#33bb78] via-40% to-transparent to-80%  -z-10"></div>
    </section>
  );
}
