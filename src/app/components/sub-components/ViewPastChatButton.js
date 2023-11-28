"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function MainLoginButton() {
	const { data: session } = useSession();
	const router = useRouter();

	function handleClick() {
		router.push("/viewPastChat");
	}

	return (
		<button
			className={`${session ? "bg-moduleBg" : "bg-navbarBg"}  p-6 rounded-3xl text-white  ${
				session ? "" : "pointer-events-none"
			}`}
			type='button'
			onClick={handleClick}
		>
			Click Here to View Previous Journey
		</button>
	);
}
