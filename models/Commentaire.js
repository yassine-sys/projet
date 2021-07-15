// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the commentaire schema

const CommentaireSchema = new Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    partenaireId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Partenaire'

    },

    contenu:{
        type:String
    },
    dateOfCreation:{
        type:Date,
        default:Date.now()
    }

})

module.exports= mongoose.model('Commentaire',CommentaireSchema)