"use client";
import FullUserCard from "./sub-components/FullUserCard";
import EmptyUserCard from "./sub-components/EmptyUserCard";
import { useSession } from "next-auth/react";

export default function UserCard() {
	// Get the profile picture and account name from the Google session
	// const [rendered, setRendered] = useState(<FullUserCard />);
	const { data: session } = useSession();

	if (session) {
		return <FullUserCard />;
	} else {
		return <EmptyUserCard />;
	}
}
