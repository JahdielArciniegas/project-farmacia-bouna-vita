import { NavLink, useParams } from "react-router-dom";
import { sucursales } from "../../data/sucursales";
import Background from "../../components/Background";

export default function Sucursal() {
  const { namesSucursal } = useParams();
  const nameSucursal = namesSucursal.split("-").join(" ");
  const s = sucursales.filter(
    (sucursal) => sucursal.nombreSucursal === nameSucursal
  );
  const sucursal = { ...s[0] };

  return (
    <div className="h-screen bg-slate-200 relative flex justify-center">
      <div className="z-40 relative h-full w-5/6 flex flex-col justify-center items-center gap-6">
        <h1 className="text-white text-6xl">Farmacia Bouna Vita</h1>
        <div className="bg-white w-80 h-[500px] rounded-3xl flex flex-col gap-3 shadow-2xl">
          <img
            className="w-full h-40 object-cover rounded-t-3xl"
            src={`../sucursalesPublic/${sucursal.imagenesSucursal}.webp`}
            alt=""
          />
          <div className="flex flex-col gap-7 items-center">
            <h2 className="text-2xl font-semibold">
              {sucursal.nombreSucursal}
            </h2>
            <p className="text-pretty text-center italic lg:leading-8 text-lg">
              &ldquo;{sucursal.descripcion}&ldquo;
            </p>
          </div>
        </div>
      </div>
      <NavLink to="/">
        <img
          className="z-40 w-40 h-auto absolute top-4 left-4"
          src="../Logo.webp"
          alt=""
        />
      </NavLink>

      <Background />
    </div>
  );
}
