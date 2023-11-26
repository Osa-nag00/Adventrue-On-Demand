"use client";

import React, { useState, useEffect, useRef } from "react";
import { Popover } from '@headlessui/react'
import Popup from '../components/sub-components/Popup.js'

export default function Chat() {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const messagesContainerRef = useRef(null);
	const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResult] = useState([]);
    const [popUp, setPopUp] = useState(false);

	const getSide = (msg) => {
		return msg.sender === "me" ? "justify-end" : "justify-start";
	};

	const getColor = (msg) => {
		return msg.sender === "me" ? "bg-[#D9D9D9] text-black" : "bg-[#40403F] text-white";
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	// change this to the actual AI response later
	// change the sender from "me" to test the other side
	const handleSendMessage = (e) => {
		e.preventDefault();

		// result array to save user message and response
		let result = [...messages];
		if (message.trim() !== "") {
			result.push({ content: message, sender: "me" });
			setMessage("");
		}

		// adding user messages into an array for saving
		let test = [];

		messages.map((msg) => {
			test.push(JSON.stringify(msg));
		});
		console.log(test);

		// this is where the AI response will be added
		// let response = fetch(api endpoint)
		let response = "this is the ai response";
		result.push({ content: response, sender: "AI" });
		setMessages(result);
	};

	const handleSubmission = (event) => {
        // send fetch to db
        let res = [];
        // res = fetch(searchInput)
        // setSearchResults(res)
        setSearchInput('');
    };

    const handlePopUp = (event) => {
        setPopUp(!popUp);
    };

	useEffect(() => {
		messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
	}, [messages]);

	// small notes:
	// - the "overflow-y-auto" class is what makes the messages scrollable
	// - the "sticky" class is what makes the input bar stick to the bottom
	// - the message object has a "sender" property, which is either "me" or "AI"
	// - the message object has a "content" property, which is the actual message
	// - the messages are stored in the "messages" state variable

	return (
		<div className='flex flex-col h-screen'>

			{/* {dropdown} */}
			<div className="flex justify-end mr-4 mt-4">
                <div>
					<Popover>
						<Popover.Button className={'text-xl'} onClick={() => popUp == true ? setPopUp(false) : setPopUp(false)}>Options</Popover.Button>
						<div className='bg-neutral-950/50'>
							<Popover.Panel>
								<div className='flex flex-col gap-2 p-2'>
									<form>
										<input
											className='p-2 w-32 h-8 bg-white border rounded-xl border-stone-500 text-black text-m font-normal font-["IM FELL English"]'
											type='text'
											placeholder='Search Game...'
											onChange={(e) => setSearchInput(e.target.value)}
											value={searchInput}
											onSubmit={handleSubmission}
										/>
									</form>
									<div>
									{searchResults.map((res, index) => (
										<div key={index} >
											<div href={res.link}>{res.name}</div>
										</div>
									))}
									</div>
									<button className='text-white' onClick={handlePopUp}>Save Game</button>
									<button className='text-white'>Logout</button>
								</div>                    
							</Popover.Panel>
						</div>
					</Popover>
                </div>
            </div>
			{popUp && <Popup onClose={() => setPopUp(false)} /> }

			<div className={`flex-grow overflow-y-auto space-y-5 break-all p-2 px-10`} ref={messagesContainerRef}>
				{messages.map((msg, index) => (
					<div key={index} className={`flex ${getSide(msg)} `}>
						<div className={`${getColor(msg)} rounded max-w-fit text-2xl p-2`}>{msg.content}</div>
					</div>
				))}
			</div>

			{/* stuff below is the msg enter box */}
			<form onSubmit={handleSendMessage}>
				<div className='sticky bottom-0 p-4 bg-navbarBg flex items-center justify-center min-w-fit '>
					<input
						className='bg-[#D9D9D9] rounded-lg w-[75%] py-4 pl-4 text-xl'
						type='text'
						value={message}
						onChange={handleMessageChange}
						placeholder='Type your message...'
					/>
					<div className='pr-4'></div>
					<button
						type='submit'
						className='w-64 h-10 bg-buttonBg rounded-lg border-[1px] border-black '
						onClick={handleSendMessage}
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}
