const entityController = require("../controllers/entity");
const express = require("express");
const { authentication } = require("../middleware/protected");

const router = express.Router();

router.post("/", authentication, entityController.createEntity);
router.get("/", authentication, entityController.getEntities);
router.patch("/:id", authentication, entityController.updateEntity);
router.delete("/:id", authentication, entityController.removeEntity);

module.exports = router;
