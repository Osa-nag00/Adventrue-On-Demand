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
		<div className='bg-navbarBg p-4 rounded-lg shadow-lg m-4'>
			<div className='flex flex-row space-x-5'>
				<Image
					className='rounded-full'
					alt={`profile picture for ${accountName}`}
					src={profilePictureSrc}
					width={50}
					height={50}
				></Image>
				<div className='flex flex-col'>
					<p className='text-white'>{accountEmail}</p>
					<p className='text-white'>{accountName}</p>
				</div>
				<button className='text-white' onClick={handleSignOut}>
					Sign Out
				</button>
			</div>
		</div>
	);
}
