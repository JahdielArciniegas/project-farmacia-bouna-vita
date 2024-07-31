import { NavLink } from "react-router-dom";
import Background from "../components/Background";
import Buttons from "../components/Buttons";
import FormItems from "../components/FormItems";

export default function SingUp() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative bg-slate-200">
      <div className="w-8/12 flex flex-col items-center gap-4  z-40 h-4/5">
        <div className="flex flex-col justify-center bg-white z-40 h-[800px] w-2/5 px-5 rounded-3xl shadow-xl shadow-slate-700 gap-4 animate-opacity">
          <div>
            <h2 className="text-3xl text-[#33bb78] font-semibold">
              ¡Hola! <p>Ingresa tus datos para registrarte</p>
            </h2>
          </div>
          <form
            className=" flex flex-col rounded-lg gap-4 w-full"
            action="submit"
          >
            <FormItems
              labelText={"Nombre"}
              placeholderText={"John Doe"}
              id={"usuario"}
            />
            <FormItems
              labelText={"Correo Electronico"}
              placeholderText={"Ejemplo@gmail.com"}
              id={"correo"}
            />

            <FormItems
              labelText={"Contraseña"}
              placeholderText={"Ingrese su clave"}
              id={"contraseña"}
              typeInput="password"
            />
            <FormItems
              labelText={"Repita la contraseña"}
              placeholderText={"Ingrese su clave"}
              id={"repeatContraseña"}
              typeInput="password"
            />

            <Buttons size="full">Registrarme</Buttons>
            <p className="text-center text-sm">
              ¿Ya tienes una cuenta?{" . "}
              <NavLink
                to="/login"
                className="underline text-[#339978] hover:scale-105"
              >
                Ingresa aqui
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <Background />
    </div>
  );
}
