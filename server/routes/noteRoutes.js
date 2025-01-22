// routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const noteController = require('../controllers/noteController');

// Protected routes
router.get('/notes', authMiddleware, noteController.getAllNotes);
router.post('/notes', authMiddleware, noteController.createNote);
// etc.

module.exports = router;
