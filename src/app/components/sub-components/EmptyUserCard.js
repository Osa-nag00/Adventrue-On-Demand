export default function EmptyUserCard() {
	return (
		<div className='bg-navbarBg p-4 rounded-lg shadow-lg m-4'>
			<div className='flex flex-row space-x-5'>
				<div className='flex flex-col'>
					<p className='text-white text-2xl'>Not Logged In</p>
				</div>
			</div>
		</div>
	);
}
