import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoD connected: ${connect.connection.host}`)
    } catch (error) {
        console.log("DB connection failed", error.message)
        process.exit(1)
    }
}