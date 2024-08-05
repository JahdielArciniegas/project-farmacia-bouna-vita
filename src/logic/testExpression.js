import { expresionRegularContraseña, expresionRegularCorreo, expresionRegularUser } from "../data/expressionRegular";

export function testExpresion(nombre=null, correo, contraseña, repeatContraseña=null){
  if(nombre!=null){
    if (!expresionRegularUser.test(nombre)) {
      console.log("El nombre de usuario no es valido");
      return false;
    }
  }

  if (!expresionRegularCorreo.test(correo)) {
    console.log("El correo ingresado no es valido");
    return false;
  }

  if (!expresionRegularContraseña.test(contraseña)) {
    console.log("La contrseña ingresada no es valida");
    return false;
  }

  if(repeatContraseña!=null){
    if (contraseña !== repeatContraseña) {
      console.log("Las contraseñas no considen");
      return false;
    }
  }
} 