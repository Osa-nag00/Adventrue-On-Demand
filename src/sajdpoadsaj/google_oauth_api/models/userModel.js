import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', userSchema);