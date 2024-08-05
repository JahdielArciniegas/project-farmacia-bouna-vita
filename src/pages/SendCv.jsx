import Background from "../components/common/Background";
import LogoTopPage from "../components/common/LogoTopPage";
import Buttons from "../components/common/Buttons";

export default function SendCv() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative bg-slate-200">
      <div className="z-40 flex w-4/6 animate-fade-in-down gap-6">
        <img className="w-80 rounded-3xl " src="../imageCv.webp"></img>
        <div className="w-2/4 text-white flex flex-col gap-4">
          <h2 className="font-bold text-4xl">
            Enviarnos tu curriculo nunca fue tan facil
          </h2>
          <p className="text-xl">
            El presionar el boton que dice &quot; enviar &quot; automaticamente
            te redirecciona a enviarnos nuestro correo electronico. Asegurate de
            enviar el archivo correcto y buena suerte
          </p>
          <div className="self-center">
            <a href="mailto:bounavitatrabajo@gmailii.com">
              <Buttons bgColor="white" textColor="[#33bb78]" size="40">
                Enviar
              </Buttons>
            </a>
          </div>
        </div>
      </div>
      <Background />
      <LogoTopPage />
    </div>
  );
}
