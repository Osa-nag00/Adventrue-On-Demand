"use client";

import { FormEvent, useState } from "react";
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
	const validateForm = () => {};

	// TODO: Send form data to API
	const sendToAPI = () => {};

	const saveForm = (e) => {
		// TODO: take out prevent default
		e.preventDefault();
		setFormData({
			username: username,
			password: password,
		});

		console.log(loginForm);
		// send to API (?)
	};

	return (
		<div className='flex flex-row justify-center'>
			<form
				onSubmit={saveForm}
				className='p-5 min-fit max-fit  bg-moduleBg rounded-lg flex flex-col justify-evenly space-y-4 items-center'
			>
				<TextField type='text' placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
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
	);
}
