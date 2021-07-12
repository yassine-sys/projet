const User = require('../models/User')
const jwt=require("jsonwebtoken")
const isAdmin=async(req,res,next)=>{
    const token=req.headers['x-auth-token']
    if(!token){
        return res.status(401).json({msg:'unauthorized'})
    }
    const decoded=await jwt.verify(token,process.env.secretOrKey)
    if (!decoded){
        return res.status(401).json({msg:'unauthorized'})
    }
    //find user
    const user=(await User.findOne({_id:decoded.id}))
    if (user.role!=='admin'){
        return res.status(402).json({msg:'unauthorized'})
    }
    next()
}
module.exports=isAdmin