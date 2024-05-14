import userAuth from "../zod/userAuth.js";
import User from "../models/user/user.model.js"
import signAuth from "../zod/signAuth.js"
import validUser from "../models/user/validUser.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import nodemailer from "nodemailer"
import genOtp from "../utils/genOtp.js";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
});

let otp = ""

const userContrller = async (req,res) => {
    try {
        otp = genOtp();
        const {name, semester, branch, gmail, password} = req.body;
        const {success} = userAuth.safeParse(req.body);

        if(!success){
            console.log("Input details are wrong")
            res.status(401).json({
                msg: "Some mistake in your Inputs"
            });
        }

        const isExist = await User.findOne({
            gmail
        })

        if(isExist){
            return res.status(201).json({
                msg: "User already exist!"
            })
        }

        // send otp to mail
        const mailOption = {
            from: `"StudySpotlight" <${process.env.SMTP_MAIL}>`,
            to: `kjasdfk`, // list of receivers
            subject: "Verify Your Email Address - StudySpotlight", // Subject line
            html: `<p>Dear [User's Name],</p>
            <p>
            Thank you for registering with <b>StudySpotlight</b>. To complete your registration, please verify your email address by entering the One-Time Password (OTP) provided below.
            </p>
            <p>
            Your OTP is: <b>[Your OTP]</b> 
            </p>
            <p>
            Please enter this OTP on the verification page to confirm your email address. This step is essential to activate your account and access all the features of <b>StudySpotlight</b>.
            </p>
            <p>If you did not request this registration or have any issues, please contact our support team immediately.</p>
            <p>
            Thank you for your cooperation.
            </p>
            <p>
            Best regards,<br />
            Gaurav <br>
            StudySpotlight Support Team
            </p>`
        }
        
        transporter.sendMail(mailOption,(error, info)=>{
            if(error){
                console.log(error.message)
                return;
            }
            else{
                console.log(info)
            }
        })


        await User.create({
            name, semester, branch, gmail, password
        })

        res.status(200).json({
            msg: "Submited Succefully"
        })
        
    } catch (error) {
        console.log("error occur in the user.controller.js ===> "+ error.message)
    }

    
}

const signin = async (req,res)=>{

    try {
        const {username, password} = req.body;
        const {success} = signAuth.safeParse(req.body)

        if(!success){
            res.status(201).json({
                msg: "Input are not correct"
            })
        }

        const isUser = await validUser.findOne({
            username
        })
        
        if(isUser !== null){
            const checkPassword = await bcrypt.compare(password, isUser.password);
            if(checkPassword){

                const userId = isUser._id.toString();
                const token = jwt.sign({userId},process.env.JWT_TOKEN,{
                    expiresIn: "15d"
                })

                res.cookie("jwt",token,{
                    maxAge: 15*24*60*60*1000,
                    httpOnly: true,
                    sameSite: 'strict',
                    secure: true,
                })


                return res.status(200).json({
                    msg: "Successfully SignIn"
                })
            }
            return res.status(201).json({
                msg: "Password is wrong!"
            })
        }
        res.status(201).json({
            msg: "You have not access!"
        })

    } catch (error) {
        console.log("Error occure in the user.controller.js ===> " + error.message)
    }
    
}


const logout = (req,res) =>{

    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(201).json({ message: "Logged out successfully." });
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(501).json({ error: "Internal Server Error" });
    }

}

export {userContrller, signin, logout};
