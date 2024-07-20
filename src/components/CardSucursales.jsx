export default function CardSucursales({
	nameSucursal,
	imgSucursal,
	imgEstantes,
	imgEspacio,
}) {
	return (
		<div className="h-[650px] flex flex-col items-center">
			<div className="bg-white h-2/5 w-48 overflow-hidden rounded-2xl">
				<div className=" grid grid-cols-2 grid-rows-2 hover:scale-150 transition-all duration-300">
					<img
						src={`./sucursalesPublic/${imgSucursal}.webp`}
						className="row-end-2 col-start-1 col-end-3 h-36 w-full object-cover"
						alt=""
					/>
					<img
						src={`./sucursalesPublic/${imgEspacio}.webp`}
						className="h-36 object-cover w-full border-t-2 border-r-2 border-white"
						alt=""
					/>
					<img
						src={`./sucursalesPublic/${imgEstantes}.webp`}
						className="h-36 object-cover w-full border-t-2 border-l-2 border-white"
						alt=""
					/>
				</div>
			</div>
			<h3 className="text-xl font-semibold text-[#339978]">{nameSucursal}</h3>
		</div>
	);
}
