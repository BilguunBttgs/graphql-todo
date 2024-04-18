import { connect } from "mongoose";
const mongoUri = process.env.MONGO_URI;

export const connectDb = async () => {
  try {
    await connect(mongoUri ?? "");
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};
