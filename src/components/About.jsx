import Buttons from './Buttons';

export default function About() {
	return (
		<section
			id="empleados"
			className="justify-center w-5/6 h-screen flex flex-col items-center"
		>
			<div className="flex gap-10">
				<div className="w-2/5 flex flex-col gap-4 mt-10">
					<h2 className="text-3xl font-bold text-slate-800 w-1/2 text-pretty">
						Conoce a nuestro equipo
					</h2>
					<p className=" text-pretty text-lg">
						En nuestra farmacia, contamos con un equipo de profesionales
						dedicados a brindar la mejor atención y cuidado a nuestros clientes.
					</p>
					<a className="" href="">
						<Buttons size="">Unete a nuestro equipo</Buttons>
					</a>
				</div>
				<div className="relative z-0 w-3/5 flex justify-center">
					<picture className="h-1/2">
						<img
							className="rounded-xl border-white border-2"
							src="./enfermerosFarmacia.jpeg"
							alt=""
						/>
					</picture>
					<div className="w-3/5 h-72 absolute -top-10 -left-2 bg-slate-600 -z-10 rounded-xl"></div>
					<div className="w-3/5 h-72 absolute -bottom-10 -right-4 bg-[#33bb78] -z-10 rounded-xl"></div>
				</div>
			</div>
		</section>
	);
}
