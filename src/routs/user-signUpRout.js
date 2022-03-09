'use strict'
const bcrypt=require('bcrypt');
const express =require('express');
const {user} = require('../models/seq-index.js');// get the model from the export in index.js

const router = express.Router(); //get method router 

//routs
router.post('/signUp',createUser);
router.get('/signUp',getuser);

// localhost:3000/clothes
async function getuser(req,res) {
  let alluser = await user.findAll();//get model that we impot it from index.js
  res.status(200).json(alluser);
}
//----------------------------------------------------
//hashing
function encrypt(pass){
  let hash=bcrypt.hash(pass,5);
  return hash;}
//----------------------------------------------------
async function createUser(req,res) {
  try{
  let {name,password} = req.body;//take the bode from the postman 
  let postUser = await user.create({name:name,password:await encrypt(password)});//let new inside this var(imagin it like new row)
  res.status(201).json(postUser);}
  catch(e){console.log("problem in create user")}
}


module.exports=router;