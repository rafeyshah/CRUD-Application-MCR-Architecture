const groupController = require("../controllers/groups");
const express = require("express");
var router = express.Router();

router.post("/create", groupController.createGroup);
router.get("/get", groupController.getGroups);
router.put("/update/:id", groupController.updateGroup);
router.delete("/remove/:id", groupController.removeGroup);

module.exports = router
