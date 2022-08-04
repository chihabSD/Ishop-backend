const express = require("express");
// const login = require("../controllers/auth/login");


const { login, register } = require("../controllers/auth");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

//Auth and signup
router.post("/login",  login);
router.post("/register", register);

module.exports = router;