'use strict'
const jwt=require('jsonwebtoken');
const Secret=process.env.SECRET||"firstTestToken";


const user = (sequelize, DataTypes) => sequelize.define('user', {

  //name -->column 
   name: {
     
        type: DataTypes.STRING,
        allowNull: false

    },
    
  //password -->second culomn 
    password: {
      
        type: DataTypes.STRING,
        allowNull: false,
    },
    token:{
      type:DataTypes.VIRTUAL,//save it temporary
     // get() {return jwt.sign({ name: this.name }, SECRET);       }
    }
   
})


module.exports = user;