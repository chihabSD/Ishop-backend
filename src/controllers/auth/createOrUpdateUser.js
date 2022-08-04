const { admin } = require("../../firebase");
const User = require("../../models/user");
var gravatar = require("gravatar");
// const admin = require('../../firebase')
const createOrUpdateUser = async (req, res, next) => {
    console.log(req.user);
    
  const { email, picture, name } = req.user;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      {
        name: name ? name : email.split("@")[0],
        picture: picture
          ? picture
          : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      },
      { new: true }
    );
    if (user) return res.json(user);

    const newUser = await new User({
      email,
      name: name ? name : email.split("@")[0],
      picture: picture
        ? picture
        : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    }).save()

    return res.status(200).send({ user: newUser });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
module.exports = createOrUpdateUser;
