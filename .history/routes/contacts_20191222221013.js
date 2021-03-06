const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const User = require("../routes/models/User");
const Contact = require("../models/Contatc");

// @route GET api/contacts
// @desc Get all users contacts
// @access Private

router.get("/", auth, async (req, res) => {
  try {
    const contact = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contact);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/contacts
// @desc Add new contact
// @access Private

router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });
    } catch (error) {}
  }
);

// @route  PUT api/contacts/:id
// @desc Update contact
// @access Private

router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route  DELETE api/contacts/:id
// @desc Delete contact
// @access Private

router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
