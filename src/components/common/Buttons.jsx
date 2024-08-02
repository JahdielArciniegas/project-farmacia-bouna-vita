// eslint-disable-next-line react/prop-types
export default function Buttons({
	children,
	size = 'auto',
	bgColor = '[#33bb78]',
	textColor = 'white',
}) {
	return (
		<button
			className={`bg-${bgColor} text-${textColor} w-${size} py-2 px-6 rounded-3xl hover:opacity-80 hover:scale-105`}
		>
			{children}
		</button>
	);
}
