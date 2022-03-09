'use strict'
const { user } = require('../models/seq-index.js');
const jwt = require('jsonwebtoken');
const Secret = process.env.SECRET || "firstTestToken";
const bearerAuth = async (req, res, next) => {
  if (req.headers.authorization) {
    const bearer = req.headers.authorization.split(' ');
    const token = bearer.pop();
    try {
      const userToken = jwt.verify(token, Secret);
      const userc = await user.findOne({ where: { name: userToken.name } });
      if (userc) {
        req.userc = userc; next();
      }
      else{
        res.status(403).send("invalid logIn")
      
      }
    }
    catch (error) {
      //next("Invalid Login");
      res.status(403).send("invalid logIn")
    
    }
  }
  else {
    //  next(" empty token");
    res.status(403).send("empty token")
  }
}
module.exports = bearerAuth;