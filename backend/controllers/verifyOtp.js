import Otp from "../models/otp.model.js";
import User from "../models/user/user.model.js";
import bcrypt from 'bcrypt'
// import OTP from "./user.controller.js";

const verifyOtp = async (req, res) => {
  const { name, semester, branch, gmail, password, otp } = req.body;

  try {
    if (otp == "" ) {
      res.status(201).json({
        msg: "Empty OTP details are not allowed",
      });
      return;
    }
    
    const isExist = await Otp.findOne({
      userId: gmail
    })
    // console.log(isExist)

    if(isExist){
        const expiredAt = isExist.expiredAt;
        if(expiredAt < Date.now()){
          res.status(201).json({
            msg: "Otp is expired resend again"
          })
        }else{
          const OTP = isExist.otp;
          const otpcheck = bcrypt.compareSync(otp,OTP);
          if(otpcheck){
            await User.create({
              name, semester, branch, gmail, password
            })
            await Otp.deleteMany({
              userId: gmail
            })
            res.status(200).json({
              msg: "Otp verified Successfully"
            })
          }
          else{
            res.status(201).json({
              msg: "Otp does not match check your inbox"
            })
          }
        }
    }
    else{
      res.status(201).json({
        msg: "User does not exist or has been veried already"
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

    // res.status(200).json({
    //   msg: "Otp don't match",
    // });
  } catch (error) {
    console.log(error.message)
    res.status(401).json({
      msg: "error occur in the verify otp",
    });
  }
};

export default verifyOtp;
