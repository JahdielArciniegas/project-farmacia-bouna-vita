import NavBar from '../components/NavBar';
import ArrowUpIcon from '../icons/ArrowUpIcons';
import Hero from '../components/Hero';
import About from '../components/About';
import Clients from '../components/Clients';
import Sucursales from '../components/Sucursales';
import FormContacs from '../components/FormContacs';

export default function Home() {
	return (
		<>
			<NavBar />
			<main className="w-full flex flex-col items-center bg-[#ddeadd] ">
				<Hero />
				<About />
				<Clients />
				<Sucursales />
				<FormContacs />
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
