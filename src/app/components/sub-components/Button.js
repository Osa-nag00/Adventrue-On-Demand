export default function Button(props) {
	return (
		<button type={props.type} className='w-64 h-10 bg-buttonBg rounded-lg border-[1px] border-black '>
			<div className=' text-slate-200 font-normal text-xl'>{props.text}</div>
		</button>
	);
}
