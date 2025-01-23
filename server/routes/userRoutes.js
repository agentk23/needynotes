const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/users/:id", authMiddleware, userController.getUserById);
router.get("/users/:email", authMiddleware, userController.getUserByEmail);
router.get("/users/:userName", authMiddleware, userController.getUserByUserName);



module.exports = router;
