import validUserAuth from "../zod/validUserAuth.js";
import validUserModel from "../models/user/validUser.model.js"
import User from "../models/user/user.model.js";
import bcrypt from 'bcrypt'
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

const validUser = async (req,res)=>{
    try {

        const {username, password} = req.body;
        const {success} = validUserAuth.safeParse(req.body);

        if(!success){
            res.status(401).json({
                msg: "input are wrong"
            })
        }

        const isExist = await validUserModel.findOne({
            username
        })

        if(isExist){
            return res.status(201).json({
                msg: "User already exist"
            })
        }

        const check = await User.findOne({
            gmail: username
        })

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)

        if(check !== null){
            await validUserModel.create({
                username,
                password: hashPassword
            })

            // send mail to user
            const mailOption = {
                from: process.env.SMTP_MAIL,
                to: username,
                subject: "check mail",
                message: "How are you"
            }

            await transporter.sendMail(mailOption,(error, info)=>{
                if(error){
                    console.log(error.message)
                }
                else{
                    console.log("mail sent")
                }
            })





            res.status(200).json({
                username,
                password
            })
        }
        else{
            res.status(401).json({
                msg: "user is not register"
            })
        }
        

        
    } catch (error) {
        console.log("error in the validUser.controller.js ===> " + error.message)
    }
}

export default validUser;