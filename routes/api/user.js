const router = require("express").Router();
const userController = require("../../controllers/userController");
const { compare } = require('../../utils/auth');


// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router.route("/:id")
  .get(userController.findOne)
  .delete(userController.remove);

router
  .post('/signup', (req, res) => {
    if(!req.body.email){
      res.status(422).json({
        errors: {
          email : 'is required'
        }
      });
    }else if(!req.body.password){
      res.status(422).json({
        errors: {
          password: 'is required'
        }
      })
    }else{
      const {name, email, password} = req.body;
      userController.create(req.body)
      // const user = req.
        .then((res) => {
          res.json(res);
        })
    }
  })
  

router
  .post('/login', (req, res) => {
    const { user, password } = req.body;
    db.User.findById({ username: user })
      .then(() => {
        if(compare(password)) {
          res.send({message: 'holi'})  // cambiar por jwt
        } else res.send({message: 'bye'})
      })
      .catch(err => res.status(404).json(err));
  })

module.exports = router;
