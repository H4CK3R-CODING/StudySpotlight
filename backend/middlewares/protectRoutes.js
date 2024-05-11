import jwt from 'jsonwebtoken'
import validUser from '../models/user/validUser.model.js';

const protectRoutes = async (req,res,next) => {

    try {

        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({
                msg: "Unauthorized - No Token Provided"
            })
        }
        
        const {userId} = jwt.verify(token,process.env.JWT_TOKEN);
        if(!userId){
            return res.status(401).json({
                msg: "Unauthorized - No Token Provided"
            })
        }

        const user = await validUser.findOne({
            _id: userId
        })
        
        if(!user){
            return res.status(401).json({
                msg: "You Can't Access that file!"
            })
        }

        next();

    } catch (error) {
        console.log("Error occure in the protectRoutes.js ====> " + error.message)
    }
}

export default protectRoutes
