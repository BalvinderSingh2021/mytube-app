import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    return `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`;

    // console.log(
    //   `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    // );
  } catch (error) {
    throw error;
    // console.log("MONGODB CONNECTION FAILED", error);
    //process.exit(1);
  }
};

export default connectDB;
