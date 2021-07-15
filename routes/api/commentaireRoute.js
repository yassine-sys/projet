const express = require('express')

const Commentaire=require('../../models/Commentaire')
const User=require('../../models/User')
//require router from express
const router = express.Router()

const {commentRules} = require('../../middlewares/validator')
const isAuth = require('../../middlewares/isAuth')
const Partenaire = require('../../models/Partenaire')

//route post api/commentaire/comment
// ajouter commentaire
// accces public
router.post('/comment',commentRules(),isAuth,async(req,res)=>{
    try {
        const {contenu , dateOfCreation,partenaireId}=req.body
        const partenaire = await Partenaire.findById(partenaireId)
        if(!partenaire) return res.status(400).json({msg:'partenaire does not exist'})
        const newComment = new Commentaire({user:req.user._id,contenu,dateOfCreation,partenaireId})
        await Partenaire.findOneAndUpdate({_id:partenaireId},{
            $push:{commentaires:newComment._id}
        }, {new: true})
        await newComment.save()

            res.json({newComment})
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
        
    }
})

//route post api/commentaire/add-comment
// ajouter commentaire
// accces public
router.post('/add-comment',commentRules(),isAuth,async (req,res)=>{

    const {contenu , dateOfCreation,partenaireId}=req.body
    try {
      const  commentaire=new Commentaire({contenu , dateOfCreation,
        userId: req.user._id,
        partenaireId})
        await commentaire.save()
        // await user.findOne({ _id: req.user._id }).populate('commentaire.userId')
        //  user.commentaires=[...user.commentaires,commentaire._id]
        //  await user.save()
        
        res.status(200).send({msg:'comment added',commentaire})
    } catch (error) {
        res.status(500).send({msg:'error'})

        
    }

})
//route get api/commentaire/list-comment
// afficher commentaire
// accces public
router.get('/list-comment' , async(req,res)=>{
    try {
        const commentaire = await Commentaire.find()
        res.json({msg:'list commentaire',commentaire})
        
    } catch (error) {
        res.send("server error");
    }
})

//route delete api/commentaire/delete/:id
// delete commentaire
// accces public
router.delete('/delete/:id',async(req,res)=>{
    try {
        const commentaire = await Commentaire.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: "commentaire deleted", commentaire });
      } catch (error) {
        res.send("server error");
      }
    })
//route edit api/commentaire/update/:id
// edit commentaire by id
// accces public

router.put('/update/:id',async(req,res)=>{
    try {
        const commentaire = await Commentaire.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.json(commentaire)
        
    } catch (err) {
        console.log(err)
        
    }
})


module.exports = router