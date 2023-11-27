"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ChatNav from "./ChatNav.js";

export default function Chat() {
	const [message, setMessage] = useState("");
	const [aiResponse, setAiResponse] = useState("");
	const [messages, setMessages] = useState([]);
	const [conversation, setConversation] = useState();
	const [isLoading, setIsLoading] = useState(false); // Added loading state
	const messagesContainerRef = useRef(null);
	const { data: session } = useSession();
	const router = useRouter("");

	// Fetch introduction method
	const fetchIntroduction = async () => {
		try {
			setIsLoading(true); // Set loading state to true
			const response = await fetch("/api/chats");
			const data = await response.json();
			// Update messages state with introduction method
			setMessages([...messages, ...data.conversation]);
			setIsLoading(false); // Set loading state to false
		} catch (error) {
			console.error("Error fetching introduction:", error);
			setIsLoading(false); // Set loading state to false in case of error
		}
	};

	const handleSendMessage = async (e) => {
		e.preventDefault();
		if (message.trim() !== "") {
			// Create a new message object with the sender as "user" and the content as the user's message
			const newMessage = { role: "user", content: message };
			// Add the new message to the messages state
			setMessages([...messages, newMessage]);
			// Clear the message input field
			setMessage("");

			try {
				// Create the conversation array with the desired format
				let conversation = messages;
				console.log(conversation);
				// Make a POST request to add the user's message with the conversation data
				setIsLoading(true); // Set loading state to true
				const response = await fetch("/api/chats", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ conversation }),
				});

				// Get the response data
				const responseData = await response.json();
				setAiResponse(responseData.generatedText);
				console.log(responseData.generatedText);

				// Process the response data as needed
				setIsLoading(false); // Set loading state to false
			} catch (error) {
				console.error("Error adding user's message:", error);
				setIsLoading(false); // Set loading state to false in case of error
			}
		}
	};

	// if not logged in, redirect to login page
	if (!session) {
		router.replace("/");
	}

	const getSide = (msg) => {
		return msg.role === "user" ? "justify-end" : "justify-start";
	};

	const getColor = (msg) => {
		return msg.role === "user" ? "bg-[#D9D9D9] text-black" : "bg-[#40403F] text-white";
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	useEffect(() => {
		messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
	}, [messages]);

	useEffect(() => {
		const newMessage = { role: "assistant", content: aiResponse };
		setMessages([...messages, newMessage]);
	}, [aiResponse]);

	// small notes:
	// - the "overflow-y-auto" class is what makes the messages scrollable
	// - the "sticky" class is what makes the input bar stick to the bottom
	// - the message object has a "sender" property, which is either "me" or "AI"
	// - the message object has a "content" property, which is the actual message
	// - the messages are stored in the "messages" state variable

	useEffect(() => {
		// Fetch introduction method when component mounts
		fetchIntroduction();
	}, []);

	return (
		<div className='flex flex-col h-screen'>
			<ChatNav />
			{/* render messages */}
			<div
				className={`flex-grow overflow-y-auto space-y-5 break-all p-2 px-10 text-lg lg:text-2xl`}
				ref={messagesContainerRef}
				style={{ wordBreak: "break-word" }}
			>
				{messages.slice(1).map((msg, index) => (
					<div key={index} className={`flex ${getSide(msg)} `}>
						<div className={`${getColor(msg)} rounded max-w-[70%]  p-2 whitespace-pre-wrap`}>{msg.content}</div>
					</div>
				))}
			</div>

			{/* Render loading box */}
			{isLoading && (
				<div className='flex items-center justify-center h-20'>
					<div className='animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-gray-900'></div>
				</div>
			)}

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
						className='w-44 lg:w-64 h-10 bg-buttonBg text-white rounded-lg border-[1px] border-black '
						onClick={handleSendMessage}
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}
