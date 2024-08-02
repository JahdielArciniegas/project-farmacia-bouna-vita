import { NavLink } from "react-router-dom";

export default function CardSucursales({
  nameSucursal,
  imgSucursal,
  imgEstantes,
  imgEspacio,
}) {
  const namesSucursal = nameSucursal.split(" ").join("-");
  return (
    <div className="lg:h-[650px] flex flex-col items-center">
      <div className="bg-white lg:h-2/5 w-48 overflow-hidden rounded-2xl">
        <NavLink to={`/sucursal/${namesSucursal}`}>
          <div className=" lg:grid lg:grid-cols-2 lg:grid-rows-2 hover:scale-150 transition-all duration-300">
            <img
              loading="lazy"
              src={`./sucursalesPublic/${imgSucursal}.webp`}
              className="lg:row-end-2 lg:col-start-1 lg:col-end-3 h-36 w-full object-cover"
              alt=""
            />
            <img
              loading="lazy"
              src={`./sucursalesPublic/${imgEspacio}.webp`}
              className="hidden lg:block h-36 object-cover w-full border-t-2 border-r-2 border-white"
              alt=""
            />
            <img
              loading="lazy"
              src={`./sucursalesPublic/${imgEstantes}.webp`}
              className=" hidden lg:block h-36 object-cover w-full border-t-2 border-l-2 border-white"
              alt=""
            />
          </div>
        </NavLink>
      </div>
      <h3 className="text-xl font-semibold text-[#339978]">{nameSucursal}</h3>
    </div>
  );
}
