import { users } from "../data/dataUser";

export function logInLogic(correo, contraseña , nombreLocal, emailLocal, contraseñaLocal ) {
  if (users.find((user) => user.email == correo) || emailLocal == correo) {
    console.log("Correo encontrado");
    if (
      users.find((user) => user.contraseña == contraseña) ||
      contraseñaLocal == contraseña
    ) {
      console.log("Contraseña correcta");
      if(nombreLocal.length < 1){
        const usuario = users.find((user) => (user.email = correo));
        nombreLocal = usuario.nombre
      }
      location.assign(`/dashboard/${nombreLocal}`);
    } else {
      console.log("Su contrseña no es correcta");
      return;
    }
  } else {
    console.log("El correo que ingreso no se encuentra registrado");
    return;
  }
}


