import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<div
			className="z-50 sticky top-0 flex flex-row justify-between w-full h-20 pl-5 bg-[#33bb78] text-slate-50 shadow-lg"
			id="nav"
		>
			<picture className="h-full w-auto">
				<NavLink to="/">
					<img
						className="h-full p-2"
						src="/Logo.webp"
						alt="logo de la farmacia bounavita"
					/>
				</NavLink>
			</picture>
			<div className="hidden mr-40 md:grid place-content-center">
				<ul className="flex flex-row gap-10 font-bold ">
					<li className="hover:scale-105">
						<a className="hover:underline" href="#empleados">
							Empleados
						</a>
					</li>
					<li className="hover:scale-105">
						<a className="hover:underline" href="#clientes">
							Clientes
						</a>
					</li>
					<li className="hover:scale-105">
						<a className="hover:underline" href="#sucursales">
							Sucursales
						</a>
					</li>
					<li className="hover:scale-105">
						<a className="hover:underline" href="#contacto">
							Contactanos
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
