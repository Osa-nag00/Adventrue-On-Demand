import mongoose from "mongoose";
import { isRequestEmpty } from "../../lib/apiMisc";
import User from "./models/UserModel";

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
		// Call the function to connect to the database
		connectToDatabase();

		// Retrieve all users from the database
		const users = await User.find();

		// Return the list of users
		return Response.json(users, { status: 200 });
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
		const { email, name } = reqBody;

		if (!reqBody) {
			return Response.json({ error: "Request body cannot be empty" }, { status: 400 });
		}

		// Check if the user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return Response.json({ error: "User already exists" }, { status: 409 });
		} else {
			// Create a new user
			await User.create({ email, name }, { unique: true });

			// when the user is created, delete all users with null email or name
			// bug is fixed with this where a user is created with null email and name
			await User.deleteMany({ $or: [{ email: null }, { name: null }] });
		}

		// Return the saved user
		return Response.json("Added new user", { status: 201 });
	} catch (error) {
		console.error("Error in POST request:", error);
		return Response.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
