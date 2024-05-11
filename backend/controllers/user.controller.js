import userAuth from "../zod/userAuth.js";
import User from "../models/user/user.model.js"

const userContrller = async (req,res) => {
    try {

        const {name, semester, branch, gmail} = req.body;
        const {success} = userAuth.safeParse(req.body);

        if(!success){
            console.log("Input details are wrong")
            res.status(401).json({
                msg: "Some mistake in your Inputs"
            });
        }

        await User.create({
            name, semester, branch, gmail
        })

        res.status(200).json({
            name,
            semester,
            branch,
            gmail
        })
        
    } catch (error) {
        console.log("error occur in the user.controller.js ===> "+ error.message)
    }

    
}

export default userContrller
