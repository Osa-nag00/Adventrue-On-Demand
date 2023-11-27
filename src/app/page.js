import Title from "./components/sub-components/Title";
import MainLoginButton from "./components/sub-components/MainLoginButton";
import UserCard from "./components/UserCard";
import GoogleSignInButton from "./components/sub-components/GoogleSignInButton";
import ViewPastChatButton from "./components/sub-components/ViewPastChatButton";

export default function Home() {
	return (
		<div>
			<div className='flex justify-end'>
				<UserCard />
			</div>
			<div className='flex flex-row justify-center '>
				<div className='flex flex-col items-center p-20 space-y-20'>
					<Title />
					<p className='font-bold text-lg bg'>
						Welcome to the world of AI Dungeons and Dragons, a realm teeming with magic and mystery. In this unique
						Dungeons & Dragons adventure, the narrative unfolds through a dynamic chat interface powered by OpenAI. As
						the Dungeon Master, I will guide you, the player, through a whimsical and heroic high fantasy campaign.
					</p>
					<GoogleSignInButton />
					<ViewPastChatButton />
					<MainLoginButton />
				</div>
			</div>
		</div>
	);
}
