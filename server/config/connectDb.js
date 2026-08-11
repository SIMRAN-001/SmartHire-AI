import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        console.log("Database Connected");
    } catch (error) {
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
        console.error(error);
    }
};

export default connectDb;