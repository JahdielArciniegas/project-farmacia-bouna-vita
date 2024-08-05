
import { logInLogic } from "./logInLogic";
import { singUpLogic } from "./singUpLogic";
import { testExpresion } from "./testExpression";

export const handleSubmit = (event) => {
  event.preventDefault();
  const {usuario=null ,correo, contraseña, repeatContraseña=null } = Object.fromEntries(
    new window.FormData(event.target)
  );
  let userLocal;
  let nombreLocal = "";
  let emailLocal = "";
  let contraseñaLocal = "";
  if (localStorage.getItem(`user${correo}`)) {
    userLocal = JSON.parse(localStorage.getItem(`user${correo}`));
    nombreLocal = userLocal.nombre
    emailLocal = userLocal.email;
    contraseñaLocal = userLocal.contraseña;
  }

  const retorno = testExpresion(usuario , correo , contraseña, repeatContraseña)
  if(retorno == false){
    return
  }

  if(usuario != null){
    singUpLogic(usuario,nombreLocal,correo,emailLocal,contraseña)
    console.log(localStorage.getItem(`user${correo}`))
  }else{
    logInLogic(correo,contraseña,nombreLocal,emailLocal,contraseñaLocal)
  }
  
};
