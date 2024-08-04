import { NavLink } from "react-router-dom";

export default function LogoTopPage() {
  return (
    <NavLink to="/">
      <img
        className="z-40 w-40 h-auto absolute top-4 left-4"
        src="../../Logo.webp"
        alt=""
      />
    </NavLink>
  );
}
