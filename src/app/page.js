"use client";

import React, { useState } from "react";

import LoginModule from "./components/LoginModule";
import RegisterModule from "./components/RegisterModule";

export default function Home() {
	const [Form, setForm] = useState(<LoginModule />);

	return <div className='flex flex-row justify-center bg-[url(/image_1.png)] bg-cover'></div>;
}
