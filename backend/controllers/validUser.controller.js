import validUserAuth from "../zod/validUserAuth.js";
import validUserModel from "../models/user/validUser.model.js"
import User from "../models/user/user.model.js";


const validUser = async (req,res)=>{
    try {

        const {username, password} = req.body;
        const {success} = validUserAuth.safeParse(req.body);

        if(!success){
            res.status(401).json({
                msg: "input are wrong"
            })
        }

        const check = await User.findOne({
            gmail: username
        })

        if(check !== null){
            await validUserModel.create({
                username,
                password
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