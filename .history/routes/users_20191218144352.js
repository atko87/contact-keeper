const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route POST api/users
// @desc Regiter a user
// @access Public

router.post(
  "/",
  [
    check("name", "Please add name")
      .not()
      .isEmpty(),
    check("email", "pleas include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    res.send(req.body);
  }
);

module.exports = router;
