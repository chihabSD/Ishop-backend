const { admin } = require("../firebase");
const requireAuth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.status(401).send({ error:'Token is required' });  

  try {
    const firebaseUser = await admin.auth().verifyIdToken(token);
    req.user = firebaseUser;
    req.token = token
    next();
  } catch (error) {
    
    return res.sendStatus(401);
  }
};
module.exports = requireAuth;
