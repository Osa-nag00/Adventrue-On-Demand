import mongoose from "mongoose";

export const isRequestEmpty = (req) => {
	if (!req.body || Object.keys(req.body).length === 0) {
		return true;
	}

	return false;
};

export const connectToDatabase = async () => {
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
