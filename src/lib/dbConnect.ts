import mongoose from "mongoose";

type ConnectionObject = {
    isConnected: number;
}

const connection: ConnectionObject = {
    isConnected: 0
}

export async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Using existing connection');
        return;
    }
    try{
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in the environment variables");
        }
        const db = await mongoose.connect(process.env.MONGODB_URI, {
        });
        connection.isConnected = db.connections[0]
        .readyState;
        console.log('New connection created! ', db);
    } catch (error) {
        console.log('Error connecting to database', error);
    }

}