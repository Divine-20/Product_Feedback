const { response } = require('express');
const express = require('express');
const { array } = require('joi');
const app = express();
const feedback = require('../models/userDetails.js');

exports.addFeedback = async (req,res) =>{
   try{
     const newComment = new feedback({
        title:req.body.title,
         category:req.body.category,
         Detail:req.body.Detail,
         Comment:req.body.Comment,
          Reply:req.body.Reply
     })
     newComment.save();
     console.log(newComment);
     res.status(200).send(newComment);
   }catch(error){
     console.log(error);
   }
  }
exports.updateFeedback = async (req,res) =>{
  try{
    console.log(req.params.id)
       feedback.findByIdAndUpdate(req.params.id , {
        title:req.body.title,
        category:req.body.category,
        Detail:req.body.Detail,
        Comment:req.body.Comment,
        Reply:req.body.Reply
      }, (err, response)=>{
        if(err){
          console.log(err)
        }else{
          console.log(response)
        }
      })
  }catch(error){
    console.log(error);
  }
}
  exports.deleteFeedback = async (req,res) => {
      try{
       feedback.findByIdAndDelete(req.params.id, {
        title:req.body.title,
        category:req.body.category,
        Detail:req.body.Detail,
        Comment:req.body.Comment,
        Reply:req.body.Reply
       }, (err,response) => {
            if(err){
               console.log(err);
            }else{
              console.log(response);
            }
})
      
       
      }catch(error){
        console.log(error);
      }
    }
  

exports.addComment = async(req,res)=>{
  try {
    const Comment = {
       
    }
    feedback.findByIdAndUpdate(req.params.id,{
     Comments : ([
       req.body.commeter_id,
       req.body.comment,
       req.body.time,
       req.body.feedback_id
     ])
    }).then((response)=>{
      console.log(response);
    })
    
  } catch (error) {
    console.log(error)
  }
}