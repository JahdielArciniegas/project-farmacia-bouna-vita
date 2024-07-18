import Background from '../components/Background';
import Buttons from '../components/Buttons';
import { NavLink } from 'react-router-dom';
// import Sections from '../components/Sections';

export default function Home() {
	return (
		<div className="">
			<main className="w-full flex flex-col items-center bg-[#ddeadd]">
				<header className="h-screen w-full bg-slate-200 overflow-hidden relative flex flex-col text-white justify-center items-center gap-4">
					<div className="z-40 relative h-full w-5/6 flex flex-col justify-center">
						<div className="h-screen absolute -right-52  bottom-0 -z-20">
							<picture className="h-full">
								<img
									className="h-full w-auto -scale-x-[1] drop-shadow-2xl select-none"
									src="./enfermera.png"
									alt="imagen enfermera"
								/>
							</picture>
						</div>
						<div className="flex flex-col items-center w-3/5 gap-5">
							<div className="max-w-max">
								<h1 className="text-6xl font-semibold text-center">
									Farmacia Bouna Vita
								</h1>
								<p className="text-2xl text-slate-800 text-center">
									Porque tu salud es nuestra bendicion
								</p>
							</div>

							<div className="bg-white text-[#33bb78] shadow-lg max-w-96 px-2 py-4 rounded-2xl text-center">
								<p>
									<strong>¡Bienvenido a nuestra farmacia en línea!</strong>{' '}
									Regístrate o inicia sesión para descubrir una experiencia de
									salud personalizada.
								</p>
							</div>
							<div className=" flex gap-7">
								<div>
									<NavLink to="/login">
										<Buttons size="40" bgColor="white" textColor="[#33bb78]">
											Ingresar
										</Buttons>
									</NavLink>
								</div>
								<div>
									<NavLink to="/signup">
										<Buttons size="40" bgColor="white" textColor="[#33bb78]">
											Registrarse
										</Buttons>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
					<Background />
				</header>
				<section className="justify-center w-5/6 h-screen flex flex-col items-center">
					<div className="flex gap-10">
						<div className="w-2/5 flex flex-col gap-4 mt-10">
							<h2 className="text-3xl font-bold text-slate-800 w-1/2 text-pretty">
								Conoce a nuestro equipo
							</h2>
							<p className=" text-pretty text-lg">
								En nuestra farmacia, contamos con un equipo de profesionales
								dedicados a brindar la mejor atención y cuidado a nuestros
								clientes.
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
			</main>
		</div>
	);
}
