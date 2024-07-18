export default function Background() {
	return (
		<div className="w-screen absolute bottom-0">
			<div className="w-96 h-96 bg-[#33bb78] absolute right-0 bottom-0 rounded-tl-full z-10"></div>
			<div className="w-96 h-72 bg-white absolute -right-64 bottom-0 rounded-full z-10"></div>
			<div className="w-96 h-96 bg-[#33bb78] absolute left-0 bottom-0"></div>
			<div className="w-96 h-[600px] bg-slate-200 absolute left-0 bottom-10 rounded-l-full"></div>
			<div className="w-full h-10 absolute bottom-0 bg-[#33bb78]"></div>
		</div>
	);
}
