import { testimonios } from "../../data/testimonios";
import CardClient from "./CardClient";

export default function ClientsOpinion() {
  return (
    <div className="flex flex-col w-full mt-60 lg:mt-0 lg:gap-10 h-full justify-center items-center pt-7 fade-in-up">
      <h2 className="text-3xl font-bold text-white text-center">
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
  );
}
