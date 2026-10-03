import mongoose from "mongoose";

export const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("MongoDB Coneected!!!");
    } catch (error) {
        console.log("Connecting error to MongoDB : ",  error )
    }
}