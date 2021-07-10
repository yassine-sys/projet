// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the rate schema
const rateSchema = new Schema({

    partenaireId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Partenaire'
    },
    moyenne:{
        type:Number,
        default:0
    },
    personnel_rate:{
        type:Number,
        
    },
    scolarite_rate:{
        type:Number,
        
    },
    hygiene_rate:{
        type:Number,
        
    },
    securite_rate:{
        type:Number,
        
    },
   
})
module.exports=mongoose.model('Rate',rateSchema)