const router = require("express").Router();
const userController = require("../../controllers/userController");
const { compareSync } = require ('bcrypt');

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router.route("/games/:id")
  .post(userController.addLiked)

// Matches with "/api/user/:id"
router.route("/:id")
  .get(userController.findOne)
  .delete(userController.remove);

router
  .post('/signup', async (req, res) => {
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
        let response = await userController.create(req.body);
        if(response.errmsg){
          res.status(400).send(response.errmsg);
        }else{
          res.status(201).send("Success");
        }
    }
  });
  

router
  .post('/login', async (req, res) => {
    const { mail, password } = req.body;
    try{
      let user = await userController.findByUsername({mail});
    if(user){
      if(compareSync(password, user.password)) {
        res.json({ token: userController.toAuthJSON(user).token});
      }else{
        res.json({ message: "Password is incorrect" });
      }
    } else 
      res.json({message: 'User not found'});
    } catch(err){
      console.log(err)
    }
  })

module.exports = router;
