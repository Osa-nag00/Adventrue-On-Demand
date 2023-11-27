import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function FullUserCard({}) {
	const { data: session } = useSession();
	const profilePictureSrc = session.user.image;
	const accountName = session.user.name;
	const accountEmail = session.user.email;

	const handleSignOut = () => {
		signOut();
	};

	return (
		<div className='text-sm lg:text-lg'>
			<div className='bg-navbarBg p-4 rounded-lg shadow-lg m-4 min-w-fit'>
				<div className='flex lg:flex-row flex-col items-center space-x-5'>
					<Image
						className='rounded-full'
						alt={`profile picture for ${accountName}`}
						src={profilePictureSrc}
						width={50}
						height={50}
					></Image>
					<div className='flex flex-col items-center'>
						<p className='text-white'>{accountEmail}</p>
						<p className='text-white'>{accountName}</p>
					</div>
					<button className='text-white' onClick={handleSignOut}>
						Sign Out
					</button>
				</div>
			</div>
		</div>
	);
}
