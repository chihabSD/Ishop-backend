const express = require("express");
const { getCurrentProfile } = require("../controllers/user");

const requireAuth = require("../middlewares/auth");

const router = express.Router();


router.get("/currentprofile",requireAuth,  getCurrentProfile);

module.exports = router;