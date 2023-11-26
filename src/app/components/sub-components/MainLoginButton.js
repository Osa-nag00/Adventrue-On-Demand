"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function MainLoginButton() {
	const { data: session } = useSession();
	const router = useRouter();

	function handleClick(e) {
		if (session) {
			router.push("/chat");
		} else {
			signIn("google");
		}
	}

	return (
		<button className='bg-moduleBg p-6 rounded-3xl text-white' type='button' onClick={handleClick}>
			Click Here to Start Your Journey
		</button>
	);
}
