import nodemailer from "nodemailer"
import contactAuth from "../zod/contactAuth.js";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
});


const contactForm = (req,res) => {
    try {
        const {name, gmail, semester, branch , query} = req.body;
        const {success} = contactAuth.safeParse(req.body)

        if(!success){
            res.status(400).json({
                msg: "Input are wrong"
            })
            return;
        }

        const mailOption = {
            from: `${gmail}`,
            to: `<${process.env.SMTP_MAIL}>`, // list of receivers
            subject: "Query Regarding StudySpotlight", // Subject line
            text: "Hi", // plain text body
            html: `<p>Dear <b>StudySpotlight Team</b>,</p><br /><p>Name: ${name}</p><p>Gmail: ${gmail}</p><p>Semester: ${semester}</p><p>Branch: ${branch}</p><br /><p>Query: ${query}</p>`
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
        res.status(200).json({
            msg: "Sent"
        })
    } catch (error) {
        console.log("error in the contactForm " + error.message)
        res.status(400).json({
            msg: "error comes"
        })
    }
    
}

export default contactForm
