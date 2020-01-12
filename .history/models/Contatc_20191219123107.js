const mongoos = require("mongoose");

const UserSchema = mongoos.Schema({
  user: {
    type: mongoos.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: "personal"
  },
  date: {
    type: Date,
    require: true,
    default: Date.now
  }
});

module.exports = mongoos.model("contact", ContactSchema);
