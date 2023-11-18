import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/sub-components/Title";
import localFont from "next/font/local";

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

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='bg-[url(/image_1.png)] bg-cover'>
			<body className={ImFellEnglish.className}>
				<Navbar />
				<Title />
				{children}
				<Footer />
			</body>
		</html>
	);
}
