const workController = require("../controllers/work");
const { authentication } = require("../middleware/protected");
const { multerFileUpload, uploadCSV } = require("../controllers/work");
const express = require("express");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/", authentication, workController.createWork);
router.post("/uploads", upload.single("file"), uploadCSV);
router.get("/", workController.getWorks);
router.get("/:name", workController.getWork);
router.patch("/:id", workController.updateWork);
router.delete("/:id", workController.removeWork);

module.exports = router;
