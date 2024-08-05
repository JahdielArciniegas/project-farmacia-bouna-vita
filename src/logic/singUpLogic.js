import { users } from "../data/dataUser";

class User {
  constructor(nombre, email, contraseña, posicion = "cliente") {
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
    this.posicion = posicion;
  }
}

export function singUpLogic (usuario,nombreLocal,correo,emailLocal,contraseña){
  if (
    users.find((user) => user.nombre === usuario) ||
    nombreLocal == usuario
  ) {
    console.log("El nombre de usuario ya esta registrado");
    return;
  }
  if (users.find((user) => user.email === correo) || emailLocal == correo) {
    console.log("El correo ingresado ya esta registrado");
    return;
  }
  const user = JSON.stringify(new User(usuario, correo, contraseña));
  localStorage.setItem(`user${correo}`, user);
}

