// routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes
router.get('/notes', authMiddleware, noteController.getUserNotes);
router.get('/notes/:id', authMiddleware, noteController.getNoteById);
router.get('/notes/search', authMiddleware, noteController.searchUserNotes);

router.post('/notes', authMiddleware, noteController.createNote);

router.put('/notes/:id', authMiddleware, noteController.updateNote);

router.delete('/notes/:id', authMiddleware, noteController.deleteNote);

module.exports = router;
