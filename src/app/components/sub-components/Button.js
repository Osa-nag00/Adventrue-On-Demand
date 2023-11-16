export default function Button(props) {
	return (
		<button type='submit' className='w-64 h-10 bg-yellow-950 rounded-lg'>
			<div className='text-white text-xl font-normal font-["IM FELL English"]'>{props.ButtonName}</div>
		</button>
	);
}
