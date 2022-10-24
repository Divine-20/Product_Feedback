// import express from "express";
const express =  require('express');
const app = express()
const { register, login } = require("../controllers/authControllers.js")
const routing = express.Router();

routing.post('/register', register);
 
module.exports = routing