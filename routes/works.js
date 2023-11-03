const workController = require("../controllers/work");
const middleware = require("../middleware/protected");
const express = require("express");

const router = express.Router();

router.post("/", middleware, workController.createWork);
router.get("/", workController.getWorks);
router.get("/:name", workController.getWork);
router.patch("/:id", workController.updateWork);
router.delete("/:id", workController.removeWork);

module.exports = router;
