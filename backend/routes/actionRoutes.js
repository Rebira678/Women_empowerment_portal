// routes/actionRoutes.js
const express = require("express");
const router = express.Router();
const { takeAction } = require("../controllers/actionController");
const authMiddleware = require("../middleware/authMiddleware"); // protect route

router.post("/take-action", authMiddleware, takeAction);

module.exports = router;
