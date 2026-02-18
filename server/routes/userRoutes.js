const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/userController");

// Login Route
router.post("/login", loginUser);

module.exports = router;
