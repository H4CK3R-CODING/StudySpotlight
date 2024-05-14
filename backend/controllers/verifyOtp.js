import genOtp from "../utils/genOtp.js"


let otp = ""
const verifyOtp = (req,res) => {
  
  try {
    otp = genOtp();
    if(otp == "" && otp.length < 5 || otp.length > 5){
        res.status(201).json({
            msg: "otp don't genrated"
        })
        return;
    }



    
    
    res.status(200).json({
        otp: otp
    })
    
  } catch (error) {
    res.status(401).json({
        msg: "error occur in the verify otp"
    })
    
  }
}

export default verifyOtp
