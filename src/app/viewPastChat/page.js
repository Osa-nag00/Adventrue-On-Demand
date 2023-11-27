"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ChatNav from "./ChatNav.js";
import { motion } from "framer-motion";

export default function Chat() {
	const [message, setMessage] = useState("");
	const [aiResponse, setAiResponse] = useState("");
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(false); // Added loading state
	const messagesContainerRef = useRef(null);
	const { data: session } = useSession();
	const router = useRouter("");

	// Fetch introduction method
	const fetchChat = async () => {
		try {
			const response = await fetch("/api/chats", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				const data = await response.json();
				// Process the data as needed
				data.map((item) => {
					console.log(item);
					// Perform operations on each item in the data array
					// For example, you can access properties like item.propertyName
					// and perform any necessary actions
				});

				setMessages(data.story.messages);
			} else {
				throw new Error("Failed to fetch chats");
			}
		} catch (error) {
			console.error("Error fetching chats:", error);
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

	useEffect(() => {
		messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
	}, [messages]);

	// small notes:
	// - the "overflow-y-auto" class is what makes the messages scrollable
	// - the "sticky" class is what makes the input bar stick to the bottom
	// - the message object has a "sender" property, which is either "me" or "AI"
	// - the message object has a "content" property, which is the actual message
	// - the messages are stored in the "messages" state variable

	useEffect(() => {
		// Fetch introduction method when component mounts
		fetchChat();
	}, []);

	return (
		<div className='flex flex-col h-screen'>
			<ChatNav session={session} messages={messages} />
			{/* render messages */}
			<div
				className={`flex-grow overflow-y-auto space-y-5 break-all p-2 px-10 text-lg lg:text-2xl`}
				ref={messagesContainerRef}
				style={{ wordBreak: "break-word", scrollBehavior: "smooth" }}
			>
				{messages.slice(1).map((msg, index) => (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						key={index}
						className={`flex ${getSide(msg)} `}
					>
						<div className={`${getColor(msg)} rounded max-w-[70%]  p-2 whitespace-pre-wrap`}>
							<div>{msg.content}</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
