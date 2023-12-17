import mongoose from "mongoose";
export async function connectToMongoDB(uri?: string) {
  try {
    return await mongoose
      .connect(
        uri ? uri : process.env.MONGODB_URI ? process.env.MONGODB_URI : ""
      )
      .then(() => {
        console.log("Connected to MongoDB");
      });
  } catch (error) {
    console.log("Fail to MongoDB");
  }
}
