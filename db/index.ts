import mongoose from "mongoose";

const URI = process.env.MONGODB_URI || "";
let cahedConnection: typeof mongoose | null = null;
const option = {};

const connect = async () => {
  if (cahedConnection) {
    return;
  }

  try {
    cahedConnection = await mongoose.connect(URI);

    console.log("connected to the databes succesfully");
  } catch (error) {
    throw new Error("Failed to establish connection to the database!");
  }
};

export default connect;
