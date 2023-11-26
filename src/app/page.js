import Title from "./components/sub-components/Title";
import MainLoginButton from "./components/sub-components/MainLoginButton";
import UserCard from "./components/UserCard";
import GoogleSignInButton from "./components/sub-components/GoogleSignInButton";

export default function Home() {
	// TODO: button goes to chat rn, change to login later (?)

	return (
		<div>
			<div className='flex justify-end'>
				<UserCard />
			</div>
			<div className='flex flex-row justify-center '>
				<div className='flex flex-col items-center p-20 space-y-20'>
					<Title />
					<p className='font-bold'>
						Quis eu Lorem non nisi ut. Consectetur qui sint aliquip amet tempor in ea ipsum et. Dolore irure velit sint
						et. This will be an overview on the project and what you can do blah blah blah Dolor dolore sint elit
						cupidatat sunt ullamco ea laborum incididunt labore sint anim ea proident. Tempor excepteur magna enim
						laborum aute do.
					</p>
					<GoogleSignInButton />
					<MainLoginButton />
				</div>
			</div>
		</div>
	);
}
