const express = require("express");
const workController = require("../controllers/work");

const router = express.Router();

router.get("/", (req, res) => {
    workController.getAll(req, res);
});

module.exports = router;