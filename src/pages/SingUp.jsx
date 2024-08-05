import { NavLink } from "react-router-dom";
import Background from "../components/common/Background";
import Buttons from "../components/common/Buttons";
import FormItems from "../components/common/FormItems";
import LogoTopPage from "../components/common/LogoTopPage";
import {
  expresionRegularContraseña,
  expresionRegularCorreo,
  expresionRegularUser,
} from "../data/expressionRegular";
import { users } from "../data/dataUser";

class User {
  constructor(nombre, email, contraseña, posicion = "cliente") {
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
    this.posicion = posicion;
  }
}

export default function SingUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { usuario, correo, contraseña, repeatContraseña } =
      Object.fromEntries(new window.FormData(event.target));
    let userLocal;
    let nombreLocal = "";
    let emailLocal = "";
    if (localStorage.getItem(`user${correo}`)) {
      userLocal = JSON.parse(localStorage.getItem(`user${correo}`));
      nombreLocal = userLocal.nombre;
      emailLocal = userLocal.email;
    }

    if (!expresionRegularUser.test(usuario)) {
      console.log("El nombre de usuario no es valido");
      return;
    }

    if (
      users.find((user) => user.nombre === usuario) ||
      nombreLocal == usuario
    ) {
      console.log("El nombre de usuario ya esta registrado");
      return;
    }

    if (!expresionRegularCorreo.test(correo)) {
      console.log("El correo ingresado no es valido");
      return;
    }

    if (users.find((user) => user.email === correo) || emailLocal == correo) {
      console.log("El correo ingresado ya esta registrado");
      return;
    }

    if (!expresionRegularContraseña.test(contraseña)) {
      console.log("La contrseña ingresada no es valida");
      return;
    }

    if (contraseña !== repeatContraseña) {
      console.log("Las contraseñas no considen");
      return;
    }

    const user = JSON.stringify(new User(usuario, correo, contraseña));
    localStorage.setItem(`user${correo}`, user);
  };

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
            onSubmit={handleSubmit}
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
      <LogoTopPage />
    </div>
  );
}
