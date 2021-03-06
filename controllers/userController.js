const db = require("../models");
const jwt = require("jsonwebtoken");
const secret = process.env.secret;
// const { hashSync } = require('bcrypt');

// const utils = require('../utils/auth')
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
  addLiked: function(req, res) {
    db.User.findOneAndUpdate({mail: req.mail}, {$push: {likedGames: req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function(user) {
    // const { name, mail, password} = user;
    // const payload = {
    //   name,
    //   mail,
      // password: hashSync(password, 10)
    // }
    console.log(user);
    return db.User.create(user)
      .then(res => {return res})
      .catch((err) => {return err});
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
    }, secret);
  },
  toAuthJSON: function(user){
    return{
      mail: user.mail,
      token: this.generateJWT(user)
    }
  },
  checkJWTToken: function(token){
    return jwt.verify(token, key);
  }
};


// const { name, email, pw} = req.body