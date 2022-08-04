const { admin } = require("../../firebase");
const User = require("../../models/user");

// const admin = require('../../firebase')
const createOrUpdateUser = async (req, res, next) => {

    // const {name, picture, email} = req.user;
    
      const {token} = req.body;
    try {
    //  const user = await User.findOneAndUpdate({email}, {name, picture}, {new:true})
    const firebaseUser = await admin
    .auth()
    .verifyIdToken(token);
    console.log(firebaseUser);
      return res.status(200).send({ user:firebaseUser });
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
  module.exports = createOrUpdateUser;