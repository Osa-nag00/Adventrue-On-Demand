import mongoose from "mongoose";
import Story from "./models/storyModel.js";

// Connect to the database
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

export async function GET() {
	try {
		connectToDatabase();

		// Find all documents in the collection
		const stories = await Story.find();

		if (!stories) {
			return Response.json({ error: "No stories found" }, { status: 404 });
		}

		return Response.json({ stories }, { status: 200 });
	} catch (error) {
		console.error("Error in GET request:", error);
		return Response.json({ error: "Internal Server Error" }, { status: 500 });
	}
}

export async function POST(request) {
	try {
		// Call the function to connect to the database
		connectToDatabase();
		const reqBody = await request.json();

		if (!reqBody) {
			return Response.json({ error: "Request body cannot be empty" }, { status: 400 });
		}

		const { email, name, messages } = reqBody;

		// Find the existing document with the given email
		const existingStory = await Story.findOne({ email });

		if (existingStory) {
			// Update the existing document
			await Story.findOneAndUpdate({ email }, { name, messages }, { upsert: true });
		} else {
			// Create a new document
			await Story.create({ email, name, messages });
		}

		// when the user is created, delete all users with null email or name
		// bug is fixed with this where a user is created with null email and name
		await Story.deleteMany({ $or: [{ email: null }, { name: null }, { messages: null }] });

		return Response.json({ message: "Chat saved successfully" }, { status: 200 });
	} catch (error) {
		console.error("Error in POST request:", error);
		return Response.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
