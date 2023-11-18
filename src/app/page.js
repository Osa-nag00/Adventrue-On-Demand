import Link from "next/link";

export default function Home() {
	return (
		<div className='flex flex-row justify-center '>
			<div className='flex flex-col items-center p-20'>
				<div>This will have some animation stuff maybe a go to login page</div>
				<Link href='/Login' className='text-5xl'>
					Click Here to go to Login
				</Link>
			</div>
		</div>
	);
}
