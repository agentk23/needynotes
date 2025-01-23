// routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Protected routes
router.get('/notes', noteController.getUserNotes);
router.get('/notes/:id', noteController.getNoteById);
router.get('/notes/search', noteController.searchUserNotes);

router.post('/notes', noteController.createNote);

router.put('/notes/:id', noteController.updateNote);

router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;
