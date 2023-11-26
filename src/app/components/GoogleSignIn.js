"use client";

import { signIn, signOut } from "next-auth/react";

export default function GoogleSignIn() {
	return (
		<button onClick={() => signIn("google")} className='p-25 bg-black'>
			Words go here
		</button>
	);
}
