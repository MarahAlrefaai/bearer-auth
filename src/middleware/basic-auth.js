'use strict'
//this is middle ware for sign in auth 
const { user } = require('../models/seq-index.js');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const jwt = require('jsonwebtoken');
const Secret = process.env.SECRET;

const basicAuth = async (req, res, next) => {

 if (req.headers['authorization']) {
    let bhp = req.headers.authorization.split(' ');
    let encoded = bhp.pop();
    let decode = base64.decode(encoded);
    let [name, password] = decode.split(':');

    try {
      const userSigned = await user.findOne({ where: { name: name } });
      const valid = await bcrypt.compare(password, userSigned.password);
      if (valid) {
        //create new instance in the req
        req.userSigned = userSigned;
        //-----------------------------------------
        //create token 
        let token = jwt.sign({ name: userSigned.name }, Secret, { expiresIn: '15 min' });
        userSigned.token = token;
       res.status(200).json(userSigned);
        next();
      }
      else {
        //next("invalid user");
        res.status(403).send("invalid User");
      }
    }
    catch (error) {
      res.status(403).send("invalid Username");//next("invalid username");}}
    }}
  
  
  }
    module.exports = basicAuth;
