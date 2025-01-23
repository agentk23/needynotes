const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

// Protected routes
router.get('/groups', groupController.getUserGroups);
router.get('/groups/:id', groupController.getGroupById);
router.get('groups/:id/members', groupController.getGroupMembers);
router.get('/groups/search', groupController.searchUserGroups);
router.get('/groups/:id/notes', groupController.getSharedNotesForGroup);

router.post('/groups', groupController.createGroup);
router.post('/groups/:id/notes', groupController.addNoteToGroup);
router.post('/groups/:id/members', groupController.addMemberToGroup);

router.put('/groups/:id', groupController.updateGroup);


router.delete('/groups/:id/notes', groupController.removeNoteFromGroup);
router.delete('/groups/:id/members', groupController.removeMemberFromGroup);
router.delete('/groups/:id', groupController.deleteGroup);

module.exports = router;