import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn(user) {
			// Make a POST request to the local API and add the user to the database

			try {
				// the port is 3000 because the local API is running on port 3000
				// don't change from 3000
				await fetch("http://localhost:3000/api/users ", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: user.user.name,
						email: user.user.email,
					}),
				});
			} catch (error) {
				console.error("Error adding user to the database:", error);
				return false;
			}

			return true;
		},
	},
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };
