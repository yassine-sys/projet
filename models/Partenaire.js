// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the user schema
const partenaireSchema = new Schema({

  partenaire_name: {
    type: String,
    required: true,
  },
  responsable_name: {
    type: String,
    required: true,
  },
  responsable_lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
   
  },
  categorie: {
    type: String,
    required: true,
   
   
  },
  activite: {
    type: String,
    
   
  },
  address: {
    type: String,
    required: true,
      
  },
  ville: {
    type: String,
    required: true,
      
  },
  code_postal: {
    type: Number,
    required: true,
      
  },
  tel: {
    type: String,
    required: true,
   
   
  },
  rate:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Rate"
}],
  image:{
    type:[String]
  },
  logo:{
    type:String,
    
  },
  commentaires:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Commentaire"
}],
 
  role: {
    type: String,
    required: true,
    enum:["partenaire"],
    default:"partenaire",
  },
});

module.exports = Partenaire = mongoose.model('Partenaire', partenaireSchema);