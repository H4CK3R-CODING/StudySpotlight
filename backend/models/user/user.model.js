import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 8,
  },
  branch: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", registerSchema);

export default User;
