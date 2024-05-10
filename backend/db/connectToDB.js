import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const dbUrl = process.env.DBURL;
    await mongoose.connect(dbUrl);
    console.log("connect to db successfully");
  } catch (error) {
    console.log("Error to connect to db");
  }

}

export default connectToDB;
