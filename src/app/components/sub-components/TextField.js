export default function TextField(props) {
	return (
		<input
			className='p-2 w-64 h-10 bg-white rounded-lg border border-stone-500 text-black text-xl font-normal font-["IM FELL English"]'
			type={props.type}
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	);
}
