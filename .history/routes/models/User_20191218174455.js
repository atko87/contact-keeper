const mongoos = require("mongoose");

const UserSchema = mongoos.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true,
    default: Date.now
  }
});

module.exports = mongoos.model("user", UserSchema);
