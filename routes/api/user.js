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
    if(!req.body.mail){
      res.status(422).json({
        errors: {
          mail : 'is required'
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
      console.log(req.body);
      userController.create(req.body)
      // const user = req.
        // .then((res) => {
          res.send(201);
        // })
    }
  })
  

router
  .post('/login', async (req, res) => {
    const { mail, password } = req.body;
    try{
    let user = await userController.findByUsername({mail})
      // if(compare(password)) {
      // res.send({message: 'holi'})  // cambiar por jwt
      res.json({ token: userController.toAuthJSON(user).token})
      // } else res.send({message: 'bye'})
    } catch(err){
      console.log(err)
    }
  })

module.exports = router;
