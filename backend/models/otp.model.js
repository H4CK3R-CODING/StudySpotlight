import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    otp:{
        type: String,
        required: true,
    },
    createAt: Date,
    expiredAt: Date
})

const Otp = mongoose.model("Otp",otpSchema);

export default Otp;