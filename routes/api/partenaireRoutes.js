const express = require('express')
const Partenaire = require('../../models/Partenaire')

//require router from express
const router = express.Router()

//require bcrypt

const bcrypt=require('bcrypt')

//require json web token

const jwt = require('jsonwebtoken')

const {validator,registerPartenaireRules,loginRules} = require('../../middlewares/validator')

 const isAuth = require('../../middlewares/isAuth')



//route post api/partenaire/register
// register new partenaire
// accces public
router.post('/register',registerPartenaireRules(),validator,async(req,res)=>{
    const {partenaire_name , responsable_name,responsable_lastName,email,password,categorie,address,tel,ville,rate,image,code_postal,logo,activite}=req.body
    try {
        //simple validation
        // if(!name ||!lastName||!email||!password||!categorie||!address||!tel){
        //     return res.status(400).json({msg:'please enter all fields'})
        // }
        //check for existing user
        let partenaire=await Partenaire.findOne({email })
        if (partenaire) {
            return res.status(400).json({msg:'partenaire already exist'})

        }

        //create user
        partenaire = new Partenaire({partenaire_name,responsable_name , responsable_lastName,email,password,categorie,address,tel,ville,rate,image,code_postal,logo,activite})
        
          // Create Salt & hash
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    // Replace user password with hashed password
    partenaire.password = hashedPassword;
        //save user
        await partenaire.save()

         // sign partenaire
    const payload = {
        id: partenaire._id,
      };
  
      // Generate token
      const token = await jwt.sign(payload, process.env.secretOrKey);

        res.status(200).send({msg:'partenaire registred',partenaire})
        
    } catch (error) {
        res.status(500).send({msg:'error'})
        
    }
})

//route post api/partenaire/login
// login partenaire
// accces public
router.post('/login',loginRules(),validator, async (req,res)=>{
    const {email,password}=req.body
    try {
        //simple validation
        // if (!email || !password) {
        //     return res.status(400).json({msg:'please enter all fields'})

        // }

        //check for existing partenaire
        let partenaire=await Partenaire.findOne({email})
        if (!partenaire) {
            res.status(400).json({msg:'bad credentials'})
        }
        // check password
        const isMatch= await bcrypt.compare(password,partenaire.password)
        if (!isMatch){
            return res.status(400).json({msg:'bad credentials'})
        }
         // sing partenaire
    const payload = {
        id: partenaire._id,
      };
  
      // Generate token
      const token = await jwt.sign(payload, process.env.secretOrKey, {
        expiresIn: '7 days',
      });
  

        res.send({msg:'partenaire logged in', partenaire ,token})
    } catch (error) {
        res.status(500).json({msg:'server error'})
    }
})

//route get /api/partenaire/partenairelist
// get partenaire list
// accces public
router.get('/partenairelist',async(req,res)=>{
    try {
        const partenaire = await Partenaire.find();
        res.json({ msg: "partenairelist", partenaire });
      } catch (error) {
        res.send("server error");
      }
    },
)

//route get api/partenaire/find/:categorie
// get by categorie
// accces public
router.get('/find/:categorie',async(req,res)=>{
    try {
        const partenaire = await Partenaire.find({ categorie: req.params.categorie });
        res.json({ msg: "categorie result", partenaire });
      } catch (error) {
        res.send("server error");
      }
    },
)

//route get api/partenaire/ville
// get by ville
// accces public
router.get('/:ville',async(req,res)=>{
    try {
        const partenaire = await Partenaire.find({ ville: req.params.ville });
        res.json({ msg: "ville result", partenaire });
      } catch (error) {
        res.send("server error");
      }
    },
)


//route get api/partenaire/get/:id
// get partenaire by id
// accces public
router.get('/get/:id',async(req,res)=>{
    try {
        const partenaire = await Partenaire.findById({ _id: req.params.id });
        res.json({ msg: "partenaire found", partenaire });
      } catch (error) {
        res.send("server error");
      }
    },
)

//route get api/partenaire/rate
// get partenaire by rate
// accces public
router.get('/rate/:rate',async(req,res)=>{
    try {
        const partenaire = await Partenaire.find({ rate: req.params.rate });
        res.json({ msg: "partenaire found by rate", partenaire });
      } catch (error) {
        res.send("server error");
      }
    },
)

//route get api/partenaire/activite/:activite
// get partenaire by activite
// accces public
router.get('/activite/:activite',async(req,res)=>{
    try {
        const partenaire = await Partenaire.find({ activite: req.params.activite });
        res.json({ msg: "partenaire found by activite", partenaire });
      } catch (error) {
        res.send("server error");
      }
    },
)
//route delete api/partenaire/delete/:id
// delete partenaire by id
// accces admin
router.delete('/delete/:id',isAuth,async(req,res)=>{
    try {
        const partenaire = await Partenaire.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: "partenaire deleted", partenaire });
      } catch (error) {
        res.send("server error");
      }
    },
)


//route edit api/partenaire/update/:id
// edit partenaire by id
// accces admin

router.put('/update/:id',isAuth,async(req,res)=>{
    try {
        const partenaire = await Partenaire.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.json(partenaire)
        
    } catch (err) {
        console.log(err)
        
    }
})



module.exports = router