export default function TextFeatures({ textHeader, text }) {
  return (
    <div className=" flex flex-col items-center">
      <h5 className="text-3xl lg:text-6xl font-extrabold">{textHeader}</h5>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}
