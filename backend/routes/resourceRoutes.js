const express = require("express");
const {
  addResource,
  getResources,
  takeAction,
} = require("../controllers/resourceController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, addResource);
router.get("/", getResources);
router.post("/:type/action", authMiddleware, takeAction);

module.exports = router;
