"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import TextField from "./sub-components/TextField";
import Link from "next/link";
import Button from "./sub-components/Button";

export default function LoginModule() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [loginForm, setFormData] = useState({
		username: username,
		password: password,
	});

	// TODO: Validate form data
	const validateForm = () => {
		return true;
	};

	// TODO: Send form data to API
	const sendToAPI = () => {};

	const saveForm = (e) => {
		e.preventDefault();
		setFormData({
			username: username,
			password: password,
		});

		if (validateForm() === false) {
			console.error("Could not validate");
			return false;
		}

		// send to API (?)
	};

	return (
		<motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
			<div className='flex flex-row justify-center'>
				<form
					onSubmit={(e) => saveForm(e)}
					className='p-5 min-fit max-fit  bg-moduleBg rounded-lg flex flex-col justify-evenly space-y-4 items-center'
				>
					<TextField type='text' placeholder='Email...' onChange={(e) => setUsername(e.target.value)} />
					<TextField type='text' placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
					<div className='flex flex-row'>
						<Link className='text-black text-base font-normal  hover:underline' href={"/"}>
							Forgot Password?
						</Link>
					</div>
					<Button type='submit' text='Login' ButtonName='Login' />
					<div className='flex flex-row'>
						<Link className='text-black text-base font-normal  hover:underline' href={"/Register"}>
							No account?
						</Link>
					</div>
				</form>
			</div>
		</motion.div>
	);
}
