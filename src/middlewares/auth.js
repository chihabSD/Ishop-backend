const jwt = require("jsonwebtoken");
const admin = require("../firebase");

const authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin.auth()
      .verifyIdToken(req.headers.authtoken);
    console.log(firebaseUser);
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
  //   const authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split(" ")[1];
  //   if (token === null) return res.sendStatus(401);

  //   jwt.verify(token, process.env.JWT_KEY, (err, user) => {
  //     if (err) return res.sendStatus(401);
  //     req.user = user;
  //     next();
  //   });
};
module.exports = authCheck;
