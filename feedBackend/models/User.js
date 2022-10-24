
const mongoose = require('mongoose');
const bcryptjs = require('bcrypt');
const jwt = require('jsonwebtoken')
// import { check } from "express-validator";
// import res from "express/lib/response";
const UserSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
        trim: true
        
    },
    lname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
        trim: true
        
    },
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
        trim: true
        
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    },
    
})

UserSchema.pre('save', async function () {
    const salt = await bcryptjs.genSalt(20)
    this.password =  bcryptjs.hashSync(this.password, salt)
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '12h'})             
}

const User = mongoose.model('User', UserSchema);
module.exports = User;