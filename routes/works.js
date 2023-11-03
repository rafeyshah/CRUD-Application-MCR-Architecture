const workController = require("../controllers/work");
const middleware = require("../middleware/index");
const express = require("express");

var router = express.Router();

router.post("/create", middleware, workController.createWork);
router.get("/get", workController.getWorks);
router.get("/get/:name", workController.getWork);
router.put("/update/:id", workController.updateWork);
router.delete("/remove/:id", workController.removeWork);

module.exports = router;
