const express = require('express');
const router = express.Router();
const labelController = require('../controllers/labelController');

// Protected routes
router.get('/labels', labelController.getUserLabels);
router.get('/notes/:noteId/labels', labelController.getLabelsForNote);
router.get('/labels/:labelId', labelController.getLabelById);

router.post('/labels', labelController.createLabel);
router.post('/notes/:noteId/labels/:labelId', labelController.addLabelToNote);

router.delete('/notes/:noteId/labels/:labelId', labelController.removeLabelFromNote);
router.delete('/labels/:labelId', labelController.deleteLabel);

router.put('/labels/:labelId', labelController.updateLabel);

module.exports = router;

