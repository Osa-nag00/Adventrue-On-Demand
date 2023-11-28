"use client";

import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import Popup from "../components/sub-components/Popup.js";
import { useRouter } from "next/navigation";
import UserCard from "../components/UserCard.js";

export default function ChatNav({ messages, session }) {
	const [popUp, setPopUp] = useState(false);
	const router = useRouter("");

	return (
		<div>
			<nav className='flex justify-between'>
				<div>
					<UserCard />
				</div>
				{/* dropdown */}
				<div>
					<Popover>
						<Popover.Button
							className={"bg-navbarBg rounded-lg shadow-lg m-4 text-white text-xl p-6 mb-0"}
							onClick={() => (popUp == true ? setPopUp(false) : setPopUp(false))}
						>
							Options
						</Popover.Button>
						<div className='bg-navbarBg rounded-xl'>
							<Popover.Panel>
								<div className='flex flex-col p-3 gap-2'>
									<form className='mb-0 '></form>

									<button
										className='text-white'
										onClick={() => {
											router.replace("/");
										}}
									>
										Exit
									</button>
								</div>
							</Popover.Panel>
						</div>
					</Popover>
				</div>
			</nav>

			<div className='m-4'>{popUp && <Popup onClose={() => setPopUp(false)} />}</div>
		</div>
	);
}
