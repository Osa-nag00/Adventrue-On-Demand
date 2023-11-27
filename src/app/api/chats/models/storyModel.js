import mongoose from "mongoose";

// Define the Mongoose model if it doesn't exist
const storySchema = new mongoose.Schema({
	name: String,
	username: String,
	conversation: Array,
	convoID: Array,
	who: Array,
});

const Story = mongoose.models.Story || mongoose.model("Story", storySchema);
export default Story;
