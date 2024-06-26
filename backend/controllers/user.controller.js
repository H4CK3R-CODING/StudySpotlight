import userAuth from "../zod/userAuth.js";
import User from "../models/user/user.model.js"
import signAuth from "../zod/signAuth.js"
import validUser from "../models/user/validUser.model.js";
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'

import nodemailer from "nodemailer"
import genOtp from "../utils/genOtp.js";
import Otp from "../models/otp.model.js";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
});

const userContrller = async (req,res) => {
    try {
        const {name, semester, branch, gmail} = req.body;
        const {success} = userAuth.safeParse(req.body);
        const k = userAuth.safeParse(req.body)
        console.log(k.error)
        if(!success){
            console.log(success)
            console.log("Input details are wrong")
            res.status(401).json({
                msg: "Some mistake in your Inputs"
            });
        }

        const verified = await User.findOne({
            gmail
        })

        if(verified){
            res.status(201).json({
                msg: "User already exist"
            }) 
            return;
        }

        const otp = genOtp();
        console.log(otp)

        const salt = bcrypt.genSaltSync(10);
        const hashOtp = bcrypt.hashSync(otp, salt)

        const isExist = await Otp.findOne({
            userId: gmail
        })
        
        // send otp to mail
        const mailOption = {
            from: `"StudySpotlight" <${process.env.SMTP_MAIL}>`,
            to: `${gmail}`, // list of receivers
            subject: "Verify Your Email Address - StudySpotlight", // Subject line
            text: "Hi", // plain text body
            html: `<p>Dear ${name},</p><p>Thank you for registering with <b>StudySpotlight</b>. To complete your registration, please verify your email address by entering the One-Time Password (OTP) provided below.</p><p>Your OTP is: <b>${otp}</b></p><p>Please enter this OTP on the verification page to confirm your email address. This step is essential to activate your account and access all the features of <b>StudySpotlight</b>.</p><p>If you did not request this registration or have any issues, please contact our support team immediately.</p><p>Thank you for your cooperation.</p><p>Best regards,<br />Gaurav <br>StudySpotlight Support Team</p>`
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

        if(isExist){
            await Otp.updateOne({
                userId: gmail
            },{
                otp: hashOtp,
                createAt: Date.now(),
                expiredAt: Date.now() + 5*60*1000
            }),
            {
                new: true
            }
        }
        else{
            await Otp.create({
                userId: gmail,
                otp: hashOtp,
                createAt: Date.now(),
                expiredAt: Date.now() + 5*60*1000
            })

        }




        // res.status(200).json({
        //     name,
        //     semester,
        //     gmail,
        //     password,
        //     branch,
        //     otp
        // })
        res.status(200).json({
            msg: "OTP sent Successfully"
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
