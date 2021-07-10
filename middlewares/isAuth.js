// require jwt
const jwt = require('jsonwebtoken')

//require user schema
const User = require('../models/User')

//require user schema
const Partenaire = require('../models/Partenaire')



const isAuth = async(req,res,next) =>{
    try {
        const token = req.headers['x-auth-token']

        //check for token
        if (!token){
            return res.status(401).send({msg:'authorization denied'})

        }
        //decode token
        const decoded = await jwt.verify(token,process.env.secretOrKey)

        // add user from payload
        const user = await User.findById(decoded.id)

        // add partenaire from payload
        const partenaire = await Partenaire.findById(decoded.id)
        
         //check for user
         if (!user) {
             return res.status(401).send({msg:'authorization denied'})

         }
         req.user=user 

         

         
         next()

        

    } catch (error) {
        return res.status(400).json({msg:'token is not valid'})
        
    }
}



module.exports=isAuth