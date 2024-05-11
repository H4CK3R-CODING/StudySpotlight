import userAuth from "../zod/userAuth.js";
import User from "../models/user/user.model.js"
import validUserAuth from "../zod/validUserAuth.js";
import validUser from "../models/user/validUser.model.js";
import bcrypt from 'bcrypt'

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
            name,
            semester,
            branch,
            gmail,
            password
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
            res.status(401).json({
                msg: "Input are not correct"
            })
        }

        const isUser = await validUser.findOne({
            username
        })

        
        if(isUser !== null){
            const checkPassword = await bcrypt.compare(password, isUser.password);
            if(checkPassword){
                res.status(200).json({
                    username,
                    password
                })
            }
            else{
                res.status(401).json({
                    msg: "Password is wrong!"
                })
            }
        }
        else{
            res.status(401).json({
                msg: "User can not access!"
            })
        }

    } catch (error) {
        console.log("Error occure in the user.controller.js ===> " + error.message)
    }
    
}

export {userContrller, signin};
