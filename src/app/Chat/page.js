export default function Chat() {
	return (
		<div className='flex flex-row justify-stretch grow'>
			<div className='flex flex-col py-40 bg-gray-600 rounded-md max-w-[25%] grow'>
				This will be a side bar with information?
			</div>
			<div className='flex flex-col py-40 bg-slate-500 max-w-[75%] grow'> This will be where you chat</div>
		</div>
	);
}
