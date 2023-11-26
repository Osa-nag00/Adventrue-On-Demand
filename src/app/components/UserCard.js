"use client";

import React from "react";

export default function UserCard() {
	// Get the profile picture and account name from the Google session
	const profilePicture = null;
	const accountName = "Osa Naghise";

	return (
		<div className='bg-transparent p-4 rounded-lg shadow-lg'>
			<img src={profilePicture} alt='Profile Picture' />
			<p>{accountName}</p>
		</div>
	);
}
