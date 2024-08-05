import { useParams } from "react-router-dom";
import { users } from "../../data/dataUser";
import LogoTopPage from "../../components/common/LogoTopPage";

export default function Usuario() {
  const { nombre } = useParams();

  const usuario = users.find((user) => user.nombre == nombre);

  return (
    <div className="h-dvh bg-[#33bb78] flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold my-6">Datos del usuario</h2>
      <p>{usuario.nombre}</p>
      <p>{usuario.email}</p>
      <p>{usuario.contraseña}</p>
      <p>{usuario.posición}</p>
      <LogoTopPage />
    </div>
  );
}
