import { NavLink } from "react-router-dom";
import Buttons from "../common/Buttons";
import Background from "../common/Background";

export default function Hero() {
  return (
    <header
      id="header"
      className="h-screen w-full bg-slate-200 overflow-hidden relative flex flex-col text-white justify-center items-center gap-4"
    >
      <div className="z-40 relative h-full w-5/6 flex flex-col justify-center items-center md:items-start">
        <div className="hidden md:block h-screen absolute -right-52  bottom-0 -z-20">
          <picture className="h-full translate-x-60">
            <img
              className="h-full w-auto -scale-x-[1] drop-shadow-2xl select-none"
              src="./enfermera.png"
              alt="imagen enfermera"
            />
          </picture>
        </div>
        <div className="flex flex-col items-center w-3/5 gap-5">
          <div className="max-w-max">
            <h1 className="text-6xl font-semibold text-center animate-fade-in-down">
              Farmacia Bouna Vita
            </h1>
            <p className="text-2xl text-slate-800 text-center animate-fade-in-down">
              Porque tu salud es nuestra bendicion
            </p>
          </div>

          <div className="bg-white text-[#33bb78] shadow-lg max-w-96 px-2 py-4 rounded-2xl text-center ">
            <p className="animate-fade-in-down">
              <strong>¡Bienvenido a nuestra farmacia en línea!</strong>{" "}
              Regístrate o inicia sesión para descubrir una experiencia de salud
              personalizada.
            </p>
          </div>
          <div className=" flex gap-7 animate-fade-in-down">
            <div>
              <NavLink to="/login">
                <Buttons size="40" bgColor="white" textColor="[#33bb78]">
                  Ingresar
                </Buttons>
              </NavLink>
            </div>
            <div>
              <NavLink to="/signup">
                <Buttons size="40" bgColor="white" textColor="[#33bb78]">
                  Registrarse
                </Buttons>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Background />
    </header>
  );
}
