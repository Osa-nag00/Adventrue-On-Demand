import mongoose from "mongoose";

// Define the Mongoose model if it doesn't exist
const userSchema = new mongoose.Schema({
	email: String,
	name: String,
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
