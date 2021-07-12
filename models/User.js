// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the user schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
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
  
  role: {
    type: String,
    required: true,
    enum:["admin","parent"],
    default:"parent",
  },
});

module.exports = User = mongoose.model('User', userSchema);