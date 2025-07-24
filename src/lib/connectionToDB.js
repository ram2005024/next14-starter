import mongoose from "mongoose";
const connection = {};
export const connectionToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("You already had a connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    console.log("MONGO URI:", process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(
      "Hey there,you've encountered an error while connecting to the database server."
    );
    throw new Error("Error connecting to the database");
  }
};
