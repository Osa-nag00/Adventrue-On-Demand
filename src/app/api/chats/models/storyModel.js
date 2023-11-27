import mongoose from "mongoose";

// Define the Mongoose model if it doesn't exist
const storySchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	messages: [
		{
			role: String,
			content: String,
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// Add a pre-save middleware to generate the self-incrementing ID
storySchema.pre("save", async function (next) {
	if (!this.isNew) {
		return next();
	}

	try {
		const lastStory = await this.constructor.findOne({}, {}, { sort: { _id: -1 } });
		const lastId = lastStory ? parseInt(lastStory._id) : 0;
		this._id = (lastId + 1).toString();
	} catch (error) {
		return next(error);
	}

	next();
});

const Story = mongoose.models.Story || mongoose.model("Story", storySchema);
export default Story;
