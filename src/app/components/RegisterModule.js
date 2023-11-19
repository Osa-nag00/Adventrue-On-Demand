"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import TextField from "./sub-components/TextField";
import Button from "./sub-components/Button";
import Link from "next/link";

export default function RegisterModule() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [retyped_password, setRetyped_password] = useState("");

	const [registerFromData, setRegisterFromData] = useState({
		username: username,
		password: password,
		retyped_password: retyped_password,
	});

	// TODO: Validate form data
	const validateForm = () => {};

	// TODO: Send form data to API
	const sendToAPI = () => {};

	const saveForm = (e) => {
		e.preventDefault();
		setRegisterFromData({
			username: username,
			password: password,
			retyped_password: retyped_password,
		});

		console.log(registerFromData);
		// send to API (?)
	};

	// TODO : need to press enter twice to submit form, not good
	return (
		<motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
			<div className='flex flex-row justify-center'>
				<form
					onSubmit={saveForm}
					className='p-5 min-w-fit h-72 bg-moduleBg rounded-lg flex flex-col justify-evenly space-y-4 items-center'
				>
					<TextField type='text' placeholder='Email...' onChange={(e) => setUsername(e.target.value)} />
					<TextField type='text' placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
					<TextField
						type='text'
						placeholder='Retype Password...'
						onChange={(e) => setRetyped_password(e.target.value)}
					/>
					<Button type='submit' text='Register' ButtonName='Register' />
					<div className='flex flex-row'>
						<Link className='text-black text-base font-normal hover:underline' href={"/Login"}>
							Back To Login
						</Link>
					</div>
				</form>
			</div>
		</motion.div>
	);
}
