import mongoose from "mongoose";

const db_connection = async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_URI)
            .then(console.log("Connected to MongoDB"))
            .catch((error) =>
                console.log("Error connecting to MongoDB: ", error)
            );
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
};

export default db_connection;
