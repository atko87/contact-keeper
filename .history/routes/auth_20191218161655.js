const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route GET api/auth
// @desc Regiter logged in user
// @access Private

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route POST api/auth
// @desc Auth user and get token
// @access Private

router.post("/",[check('email','Please include a valid email').isEmail
check('passwor','Password is required').exists()], (req, res) => {
  res.send("Log in user");
});

module.exports = router;
