const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Protected routes

router.get("/users/:id", userController.getUserById);
router.get("/users/:email", userController.getUserByEmail);
router.get("/users/:userName", userController.getUserByUserName);


// etc.

module.exports = router;
