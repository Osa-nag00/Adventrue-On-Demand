"use client";

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
		setFormData({
			username: username,
			password: password,
			retyped_password: retyped_password,
		});

		console.log(loginForm);
		// send to API (?)
	};

	return (
		<div className='flex flex-row justify-center'>
			<form className='p-5 min-w-fit h-72 bg-moduleBg rounded-lg flex flex-col justify-evenly space-y-4 items-center'>
				<TextField type='text' placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
				<TextField type='text' placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
				<TextField type='text' placeholder='Retype Password...' onChange={(e) => setRetyped_password(e.target.value)} />
				<Button type='submit' text='Login' ButtonName='Register' />
				<div className='flex flex-row'>
					<Link className='text-black text-base font-normal hover:underline' href={"/Login"}>
						Back To Login
					</Link>
				</div>
			</form>
		</div>
	);
}
