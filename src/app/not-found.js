import Link from "next/link";

export default function NotFound() {
	return (
		<div className='flex flex-row text-4xl justify-center'>
			<div className='flex flex-col items-center p-16'>
				<h1>Ye Hath Landed Out Of Bounds</h1>
				<Link href='/' className='hover:underline'>
					Return Home
				</Link>
			</div>
		</div>
	);
}
