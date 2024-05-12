import userAuth from "../zod/userAuth.js";
import User from "../models/user/user.model.js"
import validUserAuth from "../zod/validUserAuth.js";
import validUser from "../models/user/validUser.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userContrller = async (req,res) => {
    try {

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
        const {success} = validUserAuth.safeParse(req.body)

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
                    // secure: process.env.NODE_ENV !== "development",
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

export {userContrller, signin};
