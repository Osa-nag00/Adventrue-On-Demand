export default function Button(props) {
	return (
		<button type='submit' className='w-64 h-10 bg-buttonBg rounded-lg border-[1px] border-black'>
			<div className='text-white text-xl font-normal'>{props.ButtonName}</div>
		</button>
	);
}
