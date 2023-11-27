import dotenv from "dotenv";
import mongoose from "mongoose";
import Story from "../models/storyModel.js";

dotenv.config({ path: "../../../.env" });

const connectToDatabase = async () => {
	try {
		if (mongoose.connection.readyState === 1) {
			console.log("Already connected to the database");
			return;
		}

		await mongoose.connect(process.env.mongoDBURL);
		console.log("App connected to the database");
	} catch (error) {
		console.error("Error connecting to database:", error);
	}
};

export async function POST(request) {
	try {
		// Call the function to connect to the database
		connectToDatabase();

		const body = await request.json();

		console.log(body);

		if (!body) {
			return Response.json({ error: "Empty request body" }, { status: 400 });
		}

		const chatname = body.chatname;
		const username = body.username;

		// Check if the user exists
		const chat = await Story.findOne({ username: username, name: chatname }, "conversation");

		if (chat !== null) {
			return Response.json({ conversation: chat.conversation });
		} else {
			return Response.json({ error: `${username} does not have a chat named ${chatname}` }, { error: 400 });
		}
	} catch (error) {
		console.error("Error in GET request:", error);
		return Response.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
