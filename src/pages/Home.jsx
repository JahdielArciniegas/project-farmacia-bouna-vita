import Background from '../components/Background';
import Buttons from '../components/Buttons';
import { NavLink } from 'react-router-dom';
import CardClient from '../components/CardClient';
import { testimonios } from '../data/testimonios';
import CardSucursales from '../components/CardSucursales';
import { sucursales } from '../data/sucursales';
import FormItems from '../components/FormItems';
import NavBar from '../components/NavBar';
import ArrowUpIcon from '../icons/ArrowUpIcons';
// import Sections from '../components/Sections';

export default function Home() {
	return (
		<>
			<NavBar />
			<main className="w-full flex flex-col items-center bg-[#ddeadd]">
				<header
					id="header"
					className="h-screen w-full bg-slate-200 overflow-hidden relative flex flex-col text-white justify-center items-center gap-4"
				>
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
				<section
					id="clientes"
					className="w-5/6 h-screen flex flex-col items-center z-0"
				>
					<div className="absolute flex flex-col justify-center items-center bg-slate-800 h-36 w-full text-white shadow-2xl">
						<div className="flex w-full justify-around">
							<div className=" flex flex-col items-center">
								<h5 className="text-6xl font-extrabold">+10</h5>
								<p className="text-slate-300">
									Productos para diferentes enfermedades
								</p>
							</div>
							<div className="flex flex-col items-center">
								<h5 className="text-6xl font-extrabold">+6</h5>
								<p className="text-slate-300">Diferentes localidades</p>
							</div>
							<div className="flex flex-col items-center">
								<h5 className="text-6xl font-extrabold">1M</h5>
								<p className="text-slate-300">Clientes satisfechos</p>
							</div>
							<div className="flex flex-col items-center">
								<h5 className="text-6xl font-extrabold">24h</h5>
								<p className="text-slate-300">De servicio continuo</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-10 h-full justify-center items-center pt-7">
						<h2 className="text-3xl font-bold text-white">
							Testimonios de nuestros clientes
						</h2>
						<div className="flex gap-7">
							{testimonios.map(testimonio => (
								<CardClient
									key={testimonio.id}
									cardName={testimonio.nombre}
									cardDesc={testimonio.comentario}
									cardImg={testimonio.imagen}
								/>
							))}
						</div>
					</div>
					<div className="absolute w-full h-full bg-gradient-to-b from-slate-600 via-[#33bb78] via-40% to-transparent to-80%  -z-10"></div>
				</section>
				<section
					id="sucursales"
					className="w-5/6 h-screen flex flex-col items-center z-0"
				>
					<h2 className="text-3xl font-bold text-slate-800">
						Nuestras Farmacia
					</h2>
					<div className="grid grid-cols-3 grid-rows-3 h-full gap-y-80 gap-x-16 py-10 overflow-hidden">
						{sucursales.map(sucursal => (
							<CardSucursales
								key={sucursal.id}
								nameSucursal={sucursal.nombreSucursal}
								imgSucursal={sucursal.imagenesSucursal}
								imgEspacio={sucursal.espacioSucursal}
								imgEstantes={sucursal.estantesSucursal}
							/>
						))}
					</div>
				</section>
				<section
					id="contacto"
					className="w-5/6 h-screen relative flex flex-col items-center z-10 gap-4 justify-center"
				>
					<h2 className="text-3xl font-bold text-white">Contactanos</h2>
					<div className="w-2/3">
						<form
							className="bg-[#33bb78aa]  p-6 rounded-xl flex flex-col gap-3"
							action=""
						>
							<div className="flex gap-2 w-full">
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
							<div className="flex gap-2">
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
				<div className="w-full h-20 relative -z-0 flex justify-center text-white">
					<div className="absolute w-full h-screen bg-slate-800 rounded-t-[50%] bottom-0 -z-10"></div>
				</div>
				<div className="fixed bottom-0 right-16 z-20">
					<a href="#header">
						<div className="animate-bounce flex justify-center items-center bg-[#33bb78] rounded-full w-16 h-16 text-white">
							<ArrowUpIcon />
						</div>
					</a>
				</div>
			</main>
		</>
	);
}
