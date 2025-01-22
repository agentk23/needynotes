const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

// Protected routes
router.get('/', authMiddleware, userController.getAllNotes);
router.get('/', authMiddleware, userController.getUserByUsername);
// etc.

module.exports = router;
