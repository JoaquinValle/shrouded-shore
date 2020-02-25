const bcrypt = require("bcrypt");
const saltRounds = 10;

// testing
module.exports = {
  hash(str) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) throw new Error(err);
      bcrypt.hash(str, salt, (err, hash) => {
        if (err) throw new Error(err);
        console.log(hash);
        return hash;
      });
    });
  },
  
  compare(password, hash) {
    bcrypt.compare(password, hash, (err, res) => {
      if(err) throw new Error(err);
      console.log(res);
      return res;
    });
  }
}

