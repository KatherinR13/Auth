import mongoose from "mongoose";

const url = "mongodb://localhost/AUTH_USER";

export const connectMongoDB = async () => {
  try {
    mongoose.connect(url);
    const connect = mongoose.connection;
    connect.on("open", function() {
      console.log("Connected to MongoDB");
    });
  } catch(err) {
    console.log("Error connecting to MongoDB: ", err);
    process.exit(1);
  }
}