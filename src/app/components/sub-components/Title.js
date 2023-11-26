"use client";

import { motion } from "framer-motion";

export default function Title() {
	return (
		<div className='flex flex-col justify-center items-center text-center text-black lg:text-6xl text-4xl'>
			<motion.div
				initial={{ opacity: 0, x: -100, scale: 0.1 }}
				animate={{ opacity: 1, x: 0, scale: 1 }}
				transition={{ type: "spring", stiffness: 250, damping: 10 }}
			>
				<div>Welcome To: </div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 100, scale: 0.1 }}
				animate={{ opacity: 1, x: 0, scale: 1 }}
				transition={{ type: "spring", stiffness: 250, damping: 10, delay: 0.5 }}
			>
				<div>Adventure On Demand</div>
			</motion.div>
		</div>
	);
}
