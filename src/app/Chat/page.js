"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ChatNav from "./ChatNav.js";

export default function Chat() {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const messagesContainerRef = useRef(null);
	const { data: session } = useSession();
	const router = useRouter("");

	// if not logged in, redirect to login page
	if (!session) {
		router.replace("/");
	}

	const getSide = (msg) => {
		return msg.sender === "user" ? "justify-end" : "justify-start";
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
	};

	const onLoad = async () => {
		const response = await fetch("/api/chats", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				conversation: test,
			}),
		});

		const data = await response.json();
		console.log(data);
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
			<ChatNav />
			{/* render messages */}
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
