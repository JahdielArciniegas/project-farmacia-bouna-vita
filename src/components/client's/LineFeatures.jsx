import TextFeatures from "./TextFeatures";

export default function LineFeatures() {
  return (
    <div className="absolute flex lg:flex-col justify-center items-center bg-slate-800 h-80 lg:h-36 w-full text-white shadow-2xl">
      <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-0 lg:justify-around">
        <TextFeatures
          textHeader="10"
          text="Productos para diferentes enfermedades"
        />
        <TextFeatures textHeader="6" text="Diferentes localidades" />
        <TextFeatures textHeader="1M" text="Clientes satisfechos" />
        <TextFeatures textHeader="24h" text="De servicio continuo" />
      </div>
    </div>
  );
}
