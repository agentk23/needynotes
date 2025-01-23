const express = require('express');
const router = express.Router();
const labelController = require('../controllers/labelController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes
router.get('/labels', authMiddleware, labelController.getUserLabels);
router.get('/notes/:noteId/labels', labelController.getLabelsForNote);
router.get('/labels/:labelId', labelController.getLabelById);

router.post('/labels', authMiddleware, labelController.createLabel);
router.post('/notes/:noteId/labels/:labelId', authMiddleware, labelController.addLabelToNote);

router.delete('/notes/:noteId/labels/:labelId', authMiddleware, labelController.removeLabelFromNote);
router.delete('/labels/:labelId', authMiddleware, labelController.deleteLabel);

router.put('/labels/:labelId', authMiddleware, labelController.updateLabel);

module.exports = router;

