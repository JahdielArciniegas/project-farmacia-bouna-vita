import { sucursales } from '../data/sucursales';
import CardSucursales from './CardSucursales';

export default function Sucursales() {
	return (
		<section
			id="sucursales"
			className="w-5/6 h-screen flex flex-col items-center z-0"
		>
			<h2 className="text-3xl font-bold text-slate-800">Nuestras Farmacia</h2>
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
	);
}
