import mongoose from 'mongoose';

let Story;

if (!Story) {
  // Define the Mongoose model if it doesn't exist
    const storySchema = new mongoose.Schema({
        name: String,
        username: String,
        conversation: Array,
  });

  Story = mongoose.model('Story', storySchema);
}

export default Story;