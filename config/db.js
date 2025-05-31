

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://divya-3223:HnIpNL88mUYp4kP9@cluster0.d4gdk.mongodb.net/food-del", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}