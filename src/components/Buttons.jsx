// eslint-disable-next-line react/prop-types
export default function Buttons({ children, size = 'auto' }) {
	return (
		<button
			className={`bg-[#33bb78] text-white w-${size} py-2 px-6 rounded-3xl hover:bg-[#339978] hover:scale-105`}
		>
			{children}
		</button>
	);
}
