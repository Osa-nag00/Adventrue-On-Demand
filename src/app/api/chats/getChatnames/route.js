import mongoose from "mongoose";
import Story from "../models/storyModel.js";

const connectToDatabase = async () => {
	try {
		if (mongoose.connection.readyState === 1) {
			console.log("Already connected to the database");
			return;
		}

		await mongoose.connect(process.env.MONGO_URI);
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

		if (!body) {
			return Response.json({ error: "Empty request body" }, { status: 400 });
		}

		const username = body.username;

		// Check if the user exists
		const chatNames = await Story.find({ username }).distinct("name");

		if (chatNames !== null) {
			return Response.json({ chats: chatNames });
		} else {
			return Response.json({ error: `${username} does not have any saved chats` }, { error: 400 });
		}
	} catch (error) {
		console.error("Error in POST request:", error);
		return Response.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
