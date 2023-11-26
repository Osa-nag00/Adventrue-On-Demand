"use client";

import React, { useState, useEffect, useRef } from "react";
import { Popover } from "@headlessui/react";
import Popup from "../components/sub-components/Popup.js";
import UserCard from "../components/UserCard.js";

export default function ChatNav() {
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResult] = useState([]);
	const [popUp, setPopUp] = useState(false);

	const handleSubmission = () => {
		// send fetch to db
		let res = [];
		// res = fetch(searchInput)
		// setSearchResults(res)
		setSearchInput("");
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
									<form className='mb-0'>
										<input
											className='p-2 w-32 h-8 bg-white border rounded-xl border-stone-500 text-black text-m font-normal '
											type='text'
											placeholder='Search Game...'
											onChange={(e) => setSearchInput(e.target.value)}
											value={searchInput}
											onSubmit={handleSubmission}
										/>
									</form>
									<div className='bg-white'>
										<ul>
											{searchResults.map((result) => (
												<li key={result.id} className='flex items-center border-b p-2'>
													{result.title}
												</li>
											))}
										</ul>
									</div>
									<button className='text-white' onClick={handlePopUp}>
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
