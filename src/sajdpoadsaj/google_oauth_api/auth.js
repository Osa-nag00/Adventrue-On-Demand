import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "./models/userModel.js";
dotenv.config({ path: "../../../.env" });

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:5555/google/callback",
			passReqToCallback: true,
		},
		function (request, accessToken, refreshToken, profile, done) {
			// Check if user exists in the db
			User.findOne({ email: profile._json.email }).then((currentUser) => {
				if (currentUser) {
					console.log("current user is: ", currentUser);
					done(null, currentUser);
				}

				// Else create new user in db
				else {
					new User({
						email: profile._json.email,
					})
						.save()
						.then((newUser) => {
							console.log("new user created: " + newUser);
							done(null, newUser);
						});
				}
			});
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id).then((user) => {
		done(null, user);
	});
});
