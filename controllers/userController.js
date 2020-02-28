const db = require("../models");
const utils = require('../utils/auth')
const jwt = require('jsonwebtoken');

// Defining methods for the userController
module.exports = {
  findOne: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    return db.User.findOne({mail: req.mail})
      .then(dbModel => {return dbModel})
      .catch(err => console.log(err));
  },
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(user) {
    const { name, mail, password} = user;
    const payload = {
      name,
      mail,
      password: utils.hash(password) || '1234'
    }
    // debugger;
    console.log(payload);
    db.User.create(payload)
      .then(res => {console.log(res)})
      .catch((err) => {console.error(err)});
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  generateJWT: function(user){
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 30);

    console.log(`Expiration date: ${expirationDate}`);

    return jwt.sign({
      mail: user.mail,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, '$#R0ud3d-$#0R3');
  },
  toAuthJSON: function(user){
    return{
      mail: user.mail,
      token: this.generateJWT(user)
    }
  }
};


// const { name, email, pw} = req.body