const userController = require("../controllers/user");
const express = require("express");
const router = express.Router();
const { authentication, authorization } = require("../middleware/protected");

router.post(
  "/signup",
  authentication,
  authorization,
  userController.createUser
);
router.post("/login", userController.getUser);
router.get("/allusers", userController.getUsers);

module.exports = router;
