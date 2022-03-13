'use strict'

const express =require('express');
const {db}=require('./src/models/seq-index.js');
const errorHandler = require('./src/error-handler/500.js');
const app =express();
const userSignUpRouter = require('./src/routs/user-signUpRout.js');//get routes 
const userSignInRouter = require('./src/routs/user-signIn.js');//get routes 
const secretstuff= require('./src/routs/secretstuff.js');//get routes
const notfoundError=require('./src/error-handler/404');
require('dotenv').config();
const PORT=process.env.PORT;
//-------------------------------------------------------------
app.use(express.json());//fot pasing the body 
app.use(userSignUpRouter);
app.use(userSignInRouter);
app.use(secretstuff);
app.get('/',(req,res)=>{//this is a rout
  //res.json({method : req.reqType, });
  res.send('home route');
})
app.use('*',notfoundError);
app.use(errorHandler);
db.sync().then(()=>{
  app.listen(PORT ||3000,()=>{
    console.log("server is listening  ")
  })
})

module.exports=app;