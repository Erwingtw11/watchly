const express = require("express");
const router = express.Router();
const { getAllUsers, registerUser } = require("../controllers/userController");

// GET /users
router.get("/", getAllUsers);

// POST /users/register
router.post("/register", registerUser);

module.exports = router;
