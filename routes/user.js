const userController = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post("/signup", userController.createUser);
router.post("/login", userController.getUser);
router.get("/allusers", userController.getUsers);

module.exports = router
