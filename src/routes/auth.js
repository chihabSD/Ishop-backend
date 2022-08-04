const express = require("express");
// const login = require("../controllers/auth/login");


const { login, register, createOrUpdateUser } = require("../controllers/auth");
const requireAuth = require("../middlewares/auth");

const router = express.Router();

//Auth and signup
router.post("/login",  login);
router.post("/register", register);
router.post("/createorupdateuser",requireAuth,  createOrUpdateUser);

module.exports = router;