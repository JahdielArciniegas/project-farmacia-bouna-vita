import Background from '../components/Background';
import Buttons from '../components/Buttons';
import { NavLink } from 'react-router-dom';

export default function Home() {
	return (
		<div className="h-screen bg-slate-200 overflow-hidden relative">
			<header className="h-full flex flex-col justify-center items-start -mt-10 text-center gap-4">
				<div className="z-40 ml-56 items-center flex gap-2 flex-col">
					<div className="justify-center">
						<h1 className="text-6xl font-semibold">Farmacia Bouna Vita</h1>
						<p className="text-2xl text-[#33aa78]">
							Porque tu salud es nuestra bendicion
						</p>
					</div>
					<div className="bg-white text-[#33bb78] shadow-lg max-w-96 p-2 rounded-2xl">
						<p>
							<strong>¡Bienvenido a nuestra farmacia en línea!</strong>{' '}
							Regístrate o inicia sesión para descubrir una experiencia de salud
							personalizada.
						</p>
					</div>
					<div className=" flex gap-7 mx-36">
						<div>
							<NavLink to="/login">
								<Buttons size="40">Ingresar</Buttons>
							</NavLink>
						</div>
						<div>
							<NavLink to="/signup">
								<Buttons size="40">Registrarse</Buttons>
							</NavLink>
						</div>
					</div>
				</div>

				<div className="h-screen absolute -right-52  bottom-[-20px] z-20">
					<picture className="h-full">
						<img
							className="h-full w-auto -scale-x-[1] drop-shadow-2xl select-none"
							src="./enfermera.png"
							alt="imagen enfermera"
						/>
					</picture>
				</div>
				<Background />
			</header>
		</div>
	);
}
