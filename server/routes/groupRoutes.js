const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');
const authMiddleware = require('../middleware/authMiddleware');
// Protected routes
router.get('/groups', authMiddleware, groupController.getUserGroups);
router.get('/groups/:id', authMiddleware, groupController.getGroupById);
router.get('groups/:id/members', authMiddleware, groupController.getGroupMembers);
router.get('/groups/search', authMiddleware, groupController.searchUserGroups);
router.get('/groups/:id/notes', authMiddleware, groupController.getSharedNotesForGroup);

router.post('/groups', authMiddleware, groupController.createGroup);
router.post('/groups/:id/notes', authMiddleware, groupController.addNoteToGroup);
router.post('/groups/:id/members', authMiddleware, groupController.addMemberToGroup);

router.put('/groups/:id', authMiddleware, groupController.updateGroup);


router.delete('/groups/:id/notes', authMiddleware, groupController.removeNoteFromGroup);
router.delete('/groups/:id/members', authMiddleware, groupController.removeMemberFromGroup);
router.delete('/groups/:id', authMiddleware, groupController.deleteGroup);

module.exports = router;