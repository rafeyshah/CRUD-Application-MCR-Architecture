var User = require("../models/userDOA");

exports.createUser = async function (req, res, next) {
  var user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    userId: req.body.userId,
  };

  try {
    const newlyCreatedUser = await User.create(user);
    res.json({
      msg: "Signup Successfully",
      body: newlyCreatedUser,
    });
  } catch (ex) {
    res.json({
      error: ex,
    });
  }
};

exports.getUser = async function (req, res, next) {
  console.log("Email: ", req.body.email);
  console.log("Password: ", req.body.password);
  try {
    const login = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({
      body: login,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.getUsers = async function (req, res, next) {
  try {
    const allUsers = await User.find({});
    res.json({
      msg: allUsers,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
