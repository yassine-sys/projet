const express = require('express')
const User = require('../../models/User')

//require router from express
const router = express.Router()

//require bcrypt

const bcrypt=require('bcrypt')

//require json web token

const jwt = require('jsonwebtoken')

//require validators

const {validator,registerRules,loginRules} = require('../../middlewares/validator')

const isAuth = require('../../middlewares/isAuth')
const isAdmin = require('../../middlewares/isAdmin')


//route post api/user/register
// register new user
// accces public
router.post('/register',registerRules(),validator,async(req,res)=>{
    const {name , lastName,email,password}=req.body
    try {
        //simple validation
        // if(!name ||!lastName||!email||!password){
        //     return res.status(400).json({msg:'please enter all fields'})
        // }
        //check for existing user
        let user=await User.findOne({email })
        if (user) {
            return res.status(400).json({msg:'user already exist'})

        }

        //create user
        user = new User({name , lastName,email,password})

        // create salt and hash

        const salt = 10
        const hashedPassword = await bcrypt.hash(password,salt)

        // replace the user's password by hashed password
        user.password = hashedPassword

        //save user
        await user.save()

        // sign the user
        const payload={
            id:user._id
        }
        //generate token
        const token= await jwt.sign(payload,process.env.secretOrKey)


        res.status(200).send({msg:'user registred',user})
        
    } catch (error) {
        res.status(500).send({msg:'error'})
        
    }




})

//route post api/user/login
// login user
// accces public
router.post('/login',loginRules(),validator , async (req,res)=>{
    const {email,password}=req.body
    try {
        //simple validation
        // if (!email || !password) {
        //     return res.status(400).json({msg:'please enter all fields'})

        // }

        //check for existing user
        let user=await User.findOne({email})
        if (!user) {
            res.status(400).json({msg:'bad credentials'})
        }
        // check password
        const isMatch= await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(400).json({msg:'bad credentials'})
        }

         // sing user
    const payload = {
        id: user._id,
      };
  
      // Generate token
      const token = await jwt.sign(payload, process.env.secretOrKey, {
        expiresIn: '7 days',
      });

        res.send({msg:'user logged in', user,token})
    } catch (error) {
        res.status(500).json({msg:'server error'})
    }
})

//route get api/users/userlist
// get user list
// accces public
router.get('/userlist',async(req,res)=>{
    try {
        const user = await User.find();
        res.json({ msg: "userlist", user });
      } catch (error) {
        res.send("server error");
      }
    },
)

//route delete api/users/delete/:id
// delete user by id
// accces admin
router.delete('/delete/:id',isAuth,async(req,res)=>{
    try {
        const user = await User.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: "user deleted", user });
      } catch (error) {
        res.send("server error");
      }
    },
)

//@route GET api/users/user
//@desc Get authentified user
//@access Private
router.get('/user', isAuth, (req, res) => {
    res.status(200).send({ user: req.user });
  });
module.exports = router