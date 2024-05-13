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

        const {name, username, password} = req.body;
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
            
            // send mail to user
            // const mailOption = {
            //     from: process.env.SMTP_MAIL,
            //     to: username,
            //     subject: "Hello ✔", // Subject line
            //     text: "Hello?", // plain text body
            //     html: "<b>Hello world?</b>", // html body
            // }
            
            const mailOption = {
                // from: process.env.SMTP_MAIL,
                from: '"StudySpotlight" <gaurav1vincenzo@gmail.com>', // sender address
                to: `${username}`, // list of receivers
                subject: "Access Granted: Sign in to StudySpotlight Today", // Subject line
                text: "Hi", // plain text body
                html: `<p>Dear ${name},</p><p>Your registration is complete! Sign in to <i><b>StudySpotlight</b></i> tounlock access to all study materials. We're here to assist you. If youhave any questions, don't hesitate to ask.</p><p>Website : <a href="https://studyspotlight.onrender.com/">Click here</a></p><p>Best regards,<br />Gaurav</p>`
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
            
            
            
            await validUserModel.create({
                username,
                password: hashPassword
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