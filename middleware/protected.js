const jwt = require("jsonwebtoken");
const User = require("../models/userDOA");

exports.authentication = async (req, res, next) => {
  try {
    let token = req.headers["authorization"].split(" ")[1];
    let decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    let user = await User.findOne({
      _id: decoded.id,
    });
    req.user = user;
    next();
  } catch (err) {
    console.log("Error: ", err);
    res.status(401).json({ msg: "Couldnot Authenticate" });
  }
};

exports.authorization = async (req, res, next) => {
  try {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(403).send("Access denied: Only admins can create new users.");
    }
  } catch (err) {
    console.log("Error: ", err);
    res.status(403).send("Access denied: Only admins can create new users.");
  }
};
