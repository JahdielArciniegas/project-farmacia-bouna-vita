import { sucursales } from "../../data/sucursales";
import CardSucursales from "../sucursal's/CardSucursales";

export default function Sucursales() {
  return (
    <section
      id="sucursales"
      className="w-5/6 h-screen flex flex-col items-center z-0"
    >
      <h2 className="text-3xl font-bold text-slate-800">Nuestras Farmacia</h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 lg:grid-rows-3 h-full lg:gap-y-80 lg:gap-x-32 pt-10 lg:py-10 overflow-scroll lg:overflow-hidden">
        {sucursales.map((sucursal) => (
          <CardSucursales
            key={sucursal.id}
            nameSucursal={sucursal.nombreSucursal}
            imgSucursal={sucursal.imagenesSucursal}
            imgEspacio={sucursal.espacioSucursal}
            imgEstantes={sucursal.estantesSucursal}
          />
        ))}
      </div>
    </section>
  );
}
