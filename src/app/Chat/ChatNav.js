"use client";

import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import Popup from "../components/sub-components/Popup.js";
import UserCard from "../components/UserCard.js";

export default function ChatNav({ messages, session }) {
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResult] = useState([]);
	const [popUp, setPopUp] = useState(false);

	const handleSave = () => {
		// send fetch to db

		const body = { email: session.user.email, name: session.user.name, messages: messages };
		const send = JSON.stringify(body);

		fetch("/api/saveChat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: send,
		});
	};

	const handlePopUp = () => {
		setPopUp(!popUp);
	};

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
						<div className='bg-navbarBg'>
							<Popover.Panel>
								<div className='flex flex-col p-3 gap-2'>
									<form className='mb-0 '></form>

									<button className='text-white' onClick={handleSave}>
										Save Game
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
