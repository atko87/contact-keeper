const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //Get token from heder
  const token = req.header("x-auth-token");

  //Chek if not token
  if (!token) {
    return res.status(400).json({ msg: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token not valid" });
  }
};
