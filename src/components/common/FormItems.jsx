import "./FormItems.css";

export default function FormItems({
  id,
  labelText,
  placeholderText,
  typeInput = "text",
  minSizeW = "full",
}) {
  return (
    <div className={`relative mt-3 w-full`}>
      <input
        required
        id={`${id}`}
        name={`${id}`}
        type={`${typeInput}`}
        className={`h-10 min-w-${minSizeW} rounded-lg bg-slate-200 pl-3 transition-all duration-200 focus:border-2 focus:border-[#33bb78] focus-visible:[outline:none] placeholder:opacity-0 placeholder:transition-all
			placeholder:duration-200 focus:placeholder:opacity-100`}
        placeholder={`${placeholderText}`}
      />
      <label
        className="flex flex-col absolute top-2 left-3 cursor-text transition-all duration-500 font-bold text-slate-600"
        htmlFor={`${id}`}
      >
        {labelText}
      </label>
    </div>
  );
}
