import { verify } from "jsonwebtoken";
import User from "../models/UserSchema";
const keysecret = "harshsrivastava2502harshsrivastava0302";


const authenticate = async(req,res,next)=>{

    try {
        const token = req.headers.authorization;
        
        const verifytoken = verify(token,keysecret);
        
        const rootUser = await User.findOne({_id:verifytoken._id});
        
        if(!rootUser) {throw new Error("user not found")}

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next();

    } catch (error) {
        res.status(401).json({status:401,message:"Unauthorized no token provide"})
    }
}


export default authenticate