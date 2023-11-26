import "./globals.css";
import localFont from "next/font/local";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";

export const metadata = {
	title: "Adventure On Demand",
	description: "A website for a D&D campaign",
};

const ImFellEnglish = localFont({
	src: [
		{
			path: "./fonts/IMFellEnglish-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/IMFellEnglish-Italic.ttf",
			weight: "400",
			style: "italic",
		},
	],
});

export default async function RootLayout({ children }) {
	const session = await getServerSession();

	return (
		<html lang='en' className='bg-[url(/Background_Image.png)] bg-repeat-y bg-cover bg-center '>
			<body className={ImFellEnglish.className}>
				<div className='flex flex-col'>
					<div>
						<SessionProvider session={session}>
							<main>{children}</main>
						</SessionProvider>
					</div>
				</div>
			</body>
		</html>
	);
}
