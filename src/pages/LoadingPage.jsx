import LoadingIcons from "../icons/LoadingIcons";

export default function LoadingPage() {
  return (
    <div className="h-dvh w-full flex justify-center items-center gap-2">
      <h6 className="text-6xl text-[#33bb78] ">Cargando</h6>
      <div className="animate-spin text-[#33bb78] w-12 h-12 mt-3">
        <LoadingIcons />
      </div>
    </div>
  );
}
