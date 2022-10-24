
// import User from "../models/User.js";
const User = require('../models/User.js')
// import bcrypt from "bcryptjs";
exports.register = async (req, res) => {
   // console.log("hey theere");
   try {
      const firstuser = await User({
         fname: req.body.fname,
         lname: req.body.lname,
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
         cpassword: req.body.cpassword

      })
      await firstuser.save()
      console.log(firstuser);
      res.status(200).json(firstuser)
      
   }
   catch (error) {
      console.log(error)
   }
}


exports.login = async (req, res) => {
   try {
      const user = await User.findOne({ email: req.body.email });

      const usertoken = user.createJWT()
      res.send(usertoken)
   }

   catch (err) {
      console.log(err)
   }
}
