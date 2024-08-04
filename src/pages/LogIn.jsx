import { NavLink } from "react-router-dom";
import Background from "../components/common/Background";
import Buttons from "../components/common/Buttons";
import FormItems from "../components/common/FormItems";
import LogoTopPage from "../components/common/LogoTopPage";

export default function LogIn() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative bg-slate-200">
      <div className="w-8/12 flex flex-col items-center gap-4  z-40 h-3/5">
        <div className="flex flex-col justify-center bg-white z-40 h-[800px] w-2/5 px-5 rounded-3xl shadow-xl shadow-slate-700 gap-4 animate-opacity">
          <div>
            <h2 className="text-3xl text-[#33bb78] font-semibold">
              ¡Hola! <p>Bienvenido de nuevo...</p>
            </h2>
          </div>
          <form
            className=" flex flex-col rounded-lg gap-4 w-full"
            action="submit"
          >
            <FormItems
              labelText={"Nombre o Correo Electronico"}
              placeholderText={"Ejemplo@gmail.com"}
              id={"usuario"}
            />
            <FormItems
              labelText={"Contraseña"}
              placeholderText={"Ingrese su clave"}
              id={"contraseña"}
              typeInput="password"
            />
            <div className="flex justify-between px-2">
              <label className="flex gap-1">
                <input type="checkbox" className="rounded-full" value="" />
                Recordar contraseña
              </label>
              <a href="" className="underline text-[#339978] hover:scale-105">
                Olvide la contraseña
              </a>
            </div>

            <Buttons size="full">Ingresar</Buttons>
            <p className="text-center text-sm">
              ¿No tienes una cuenta?{" "}
              <NavLink
                to="/signup"
                className="underline text-[#339978] hover:scale-105"
              >
                Registrate aqui
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <LogoTopPage />
      <Background />
    </div>
  );
}
