import ClientsOpinion from "../client's/ClientsOpinion";
import LineFeatures from "../client's/LineFeatures";

export default function Clients() {
  return (
    <section
      id="clientes"
      className="w-5/6 h-screen flex flex-col items-center z-0"
    >
      <LineFeatures />
      <ClientsOpinion />
      <div className="absolute w-full h-full bg-gradient-to-b from-slate-600 via-[#33bb78] via-40% to-transparent to-80%  -z-10"></div>
    </section>
  );
}
