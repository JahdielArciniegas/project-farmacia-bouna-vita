export default function CardClient({ cardImg, cardName, cardDesc }) {
	return (
		<div>
			<div className="w-80 bg-white h-96 p-4 rounded-3xl flex flex-col gap-2">
				<div>
					<img
						className="w-20 h-20 rounded-full object-cover"
						src={`./iconsPublic/${cardImg}.webp`}
						alt=""
					/>
					<h3 className="text-2xl font-semibold">{cardName}</h3>
				</div>
				<p className="text-justify italic leading-8 text-sm">
					&ldquo;{cardDesc}&ldquo;
				</p>
			</div>
		</div>
	);
}
