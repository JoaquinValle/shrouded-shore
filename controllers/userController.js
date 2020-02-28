const db = require("../models");
const utils = require('../utils/auth')

// Defining methods for the userController
module.exports = {
  findOne: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    db.User.findById({ username: req.params.username })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
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
    debugger;
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
  }
};


// const { name, email, pw} = req.body