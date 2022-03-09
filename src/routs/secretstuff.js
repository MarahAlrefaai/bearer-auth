'use strict'
const express =require('express');
const router=express.Router();
const bearerAuth=require('../middleware/bearerAuth.js');

//routs
router.get('/secretStuff',bearerAuth, userHandler);
//----------------------------------------------------
function userHandler(req, res) {
  // send the user information to the client & create new repo
  res.status(200).json(req.userc);

}
module.exports=router;