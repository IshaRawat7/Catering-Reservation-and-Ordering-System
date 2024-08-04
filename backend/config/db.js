// db.js

import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    const dbUri = `mongodb+srv://rawatisha001:NqfLkoINtNxm7rzu@cluster0.lfts5fo.mongodb.net/catering-app?retryWrites=true&w=majority`

    if (!dbUri) {
      throw new Error("MONGO_DB_URI is not defined");
    }

    console.log("Connecting to MongoDB with URI:", dbUri);

    await mongoose.connect(dbUri);

    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    console.error("Error details:", error);
  }
};

export default connectToMongoDb;

//MONGO_DB_URI=mongodb+srv://rawatisha001:NqfLkoINtNxm7rzu@cluster0.lfts5fo.mongodb.net/catering-app?retryWrites=true&w=majority

//mongodb://rawatisha001:NqfLkoINtNxm7rzu@cluster0-shard-00-00.lfts5fo.mongodb.net:27017,cluster0-shard-00-01.lfts5fo.mongodb.net:27017,cluster0-shard-00-02.lfts5fo.mongodb.net:27017/catering-app?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true
