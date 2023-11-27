import OpenAI from "openai";
import { prompt } from "./prompt.js";

// const connectToDatabase = async () => {
// 	try {
// 		if (mongoose.connection.readyState === 1) {
// 			console.log("Already connected to the database");
// 			return;
// 		}

// 		await mongoose.connect(process.env.MONGO_URI);
// 		console.log("App connected to the database");
// 	} catch (error) {
// 		console.error("Error connecting to database:", error);
// 	}
// };

export async function GET() {
	const fullConversation = [];

	// const instructionsText =
	// 	"You are an AI guide and will not allow under any circumstances " +
	// 	"for any messages outside of the RPG and its theme.";

	const instructionsText = prompt;

	const instructions = {
		role: "system",
		content: instructionsText,
	};

	fullConversation.push(instructions);

	const introMessage =
		"Welcome to the Text-based RPG Adventure! I am your AI guide. " +
		"Get ready for an epic journey! say 'start' to begin!";
	const fullIntro = `${introMessage}`;

	const intro = {
		role: "assistant",
		content: fullIntro,
	};

	fullConversation.push(intro);

	return Response.json({ introduction: fullIntro, conversation: fullConversation });
}

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });
export async function POST(request) {
	try {
		const body = await request.json();

		if (body && body.conversation) {
			const conversation = body.conversation;

			const completion = await openai.chat.completions.create({
				messages: conversation,
				model: "gpt-3.5-turbo",
			});

			const aiResponse = completion.choices[0].message.content;

			// console.log(completion.choices[0]);
			// console.log(conversation);

			return Response.json({ generatedText: aiResponse });
		} else {
			console.error("Invalid request body:", body);
			return Response.json({ error: "Invalid request body" });
		}
	} catch (error) {
		console.error("Error:", error.message);
		return Response.json({ error: "Internal Server Error" });
	}
}

// export async function PUT(request) {
// 	try {
// 		// Call the function to connect to the database
// 		connectToDatabase();

// 		const body = await request.json();
// 		const chatname = body.chatname;
// 		const username = body.username;
// 		const convo = body.conversation;

// 		// check if the user exists
// 		const chat = await Story.findOne({ username: username, name: chatname });

// 		if (chat) {
// 			return Response.json({ error: "Chat already exists with this name" }, { status: 400 });
// 		} else {
// 			const fullStory = {
// 				name: chatname,
// 				username: username,
// 				conversation: convo,
// 			};

// 			const story = await Story.create(fullStory);
// 			return Response.json({ status: "Succesfully added story to database" });
// 		}
// 	} catch (error) {
// 		return Response.json({ error }, { status: 400 });
// 	}
// }
