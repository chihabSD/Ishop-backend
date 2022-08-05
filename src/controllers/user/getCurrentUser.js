const User = require('../../models/user')
const getCurrentProfile = async (req, res, next) => {

    try {
  
        const { user } = req.user;
        let userFound = await User.findOne({email:user.email});
         return res.status(200).send({ user: userFound });
        
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
  module.exports = getCurrentProfile;