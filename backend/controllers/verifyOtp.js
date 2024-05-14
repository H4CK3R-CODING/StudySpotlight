
import User from "../models/user/user.model.js";
import OTP from "./user.controller.js";

const verifyOtp = async (req,res) => {
  const {
    name,
    semester,
    branch,
    gmail,
    password,
    otp
} = req.body;
  
  try {
    if(otp == "" && otp.length < 5 || otp.length > 5){
        res.status(201).json({
            msg: "otp is incorrect"
        })
        return;
    }
    console.log("OTP " + OTP)
    console.log("otp " + otp)
    if(OTP === otp){
      await User.create({
          name, semester, branch, gmail, password
      })
      return res.status(200).json({
        msg: "User Identified"
      })
    }
    // if(OTP === otp){
    //   await User.create({
    //       name, semester, branch, gmail, password
    //   })
    //   res.status(200).json({
    //     msg: "User Identified"
    //   })
    // }

    res.status(200).json({
      msg: "Otp don't match"
    })

    
  } catch (error) {
    res.status(401).json({
        msg: "error occur in the verify otp"
    })
    
  }
}

export default verifyOtp
