const express = require('express')
//require router from express
const router = express.Router()

const Rate = require('../../models/Rate')
const Partenaire = require('../../models/Partenaire')
router.post('/rate/:partenaireId',async(req,res)=>{
    const {personnel_rate,scolarite_rate,hygiene_rate,securite_rate}=req.body
    
    try {
        
        const rate = new Rate({personnel_rate,scolarite_rate,hygiene_rate,securite_rate,moyenne:(personnel_rate+scolarite_rate+hygiene_rate+securite_rate)/4,partenaireId:req.params.partenaireId})
         
        await rate.save()
         res.status(200).send({msg:'rate added',rate})
    } catch (error) {
        res.status(500).send({msg:'error'})
        
    }

})

router.put('/rated/:partenaireId' ,async(req,res)=>{
    try {
        const editedRate = await Rate.findOneAndUpdate({partenaireId:req.params.partenaireId},{$set:{...req.body}});
        res.json(editedRate)
    } catch (error) {
        res.status(500).send({msg:'error'})
    }
})

module.exports=router