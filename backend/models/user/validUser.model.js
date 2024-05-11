import mongoose from "mongoose";

const validUserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        // validate: [
        //     validators.notEmpty,
        //     "username is empty"
        // ]
    },
    password: {
        type: String,
        required: true,
    }
})

const validUser = new mongoose.model("validUser", validUserSchema);

export default validUser;