'use strict'

const express = require('express');
const basicAuth=require('../middleware/basic-auth.js');
const router = express.Router(); //get method router 

//routs
router.post('/signIn',basicAuth, signIn);

//----------------------------------------------------
 function signIn(req, res) {
  res.status(200).json(req.userSigned);
}

module.exports = router;