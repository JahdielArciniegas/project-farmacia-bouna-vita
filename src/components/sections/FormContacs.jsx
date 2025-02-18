import Buttons from "../common/Buttons";
import FormItems from "../common/FormItems";

export default function FormContacs() {
  return (
    <section
      id="contacto"
      className="w-full md:w-5/6 h-screen relative flex flex-col items-center z-10 gap-4 justify-center"
    >
      <h2 className="text-3xl font-bold text-slate-800 md:text-white fade-in-down">
        Contactanos
      </h2>
      <div className="md:w-2/3">
        <form
          className="bg-[#33bb78aa] w-80 md:w-auto p-6 rounded-xl flex flex-col gap-3 fade-in-left"
          action=""
        >
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <FormItems
              id="nombre"
              labelText="Inserte su nombre"
              placeholderText="Juan"
            />
            <FormItems
              id="apellido"
              labelText="Inserte su apellido"
              placeholderText="Gonzales"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <FormItems
              id="sucursal"
              labelText="Inserte nombre de sucursal"
              placeholderText="Barrio San Miguel"
            />
            <FormItems
              id="celular"
              labelText="Inserte su numero de telefono"
              placeholderText="+xx xxx - xxxxxx"
            />
          </div>
          <div className="relative mt-3 w-full">
            <label
              className="flex flex-col top-2 left-3 cursor-text transition-all duration-500 font-bold text-slate-600"
              htmlFor="comentario"
            >
              Comentario
            </label>
            <textarea
              required
              id="comentario"
              className="h-36 min-w-full rounded-lg bg-slate-200 pl-3 transition-all duration-200 focus:border-2 focus:border-[#33bb78] focus-visible:[outline:none]
			p resize-none"
              placeholder="Escribe aqui..."
            ></textarea>
          </div>
          <div className="flex justify-end">
            <Buttons>Enviar Comentario</Buttons>
          </div>
        </form>
      </div>
    </section>
  );
}
