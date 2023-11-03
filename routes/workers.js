const workerController = require("../controllers/workers");
const express = require("express");

var router = express.Router();

router.post("/", workerController.createWorker);
router.get("/", workerController.getWorker);
router.get("/:id", workerController.getSingleWorker);
router.patch("/:id", workerController.updateWork);
router.delete("/:id", workerController.removeWork);

module.exports = router;
