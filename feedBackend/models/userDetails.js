const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

const feedbackSchema = mongoose.Schema({
  title :{
    type:"String",
    required:true,
    trim:true
  },
  category:{
    type:"String",
    required:true,
    trim:true
  },
  Detail:{
    type:"String",
    required:true,
    trim:true
  },
  Comment:{
    type:"string",
    required:true,
    trim:true,
    created: { type : Date , default:Date.now}
  },
  Reply:{
    type : "String",
 trim:true
  }
  

})
const feedback = mongoose.model('feedback',feedbackSchema);
module.exports = feedback;