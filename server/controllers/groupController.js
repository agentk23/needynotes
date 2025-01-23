const groupService = require('../services/groupService');

exports.getUserGroups = async (req, res) => {
    try {
        const groups = await groupService.getAllGroupsForUser(req.user.id);
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.searchUserGroups = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { title, description } = req.query;

        const groups = await groupService.searchGroups(userId, { title, description });
        res.json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createGroup = async (req, res) => {
    try {
        const group = await groupService.createGroup({
            ...req.body,
            userID: req.user.id
        });
        res.status(201).json(group);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getGroupById = async (req, res) => {
    try {
        const group = await groupService.getGroupById(req.params.id);
        res.status(200).json(group);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateGroup = async (req, res) => {
    try {
        const group = await groupService.updateGroup(req.params.id, req.body);
        res.status(200).json(group);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteGroup = async (req, res) => {
    try {
        await groupService.deleteGroup(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getSharedNotesForGroup = async (req, res) => {
    try {
        const group = await groupService.getSharedNotesForGroup(req.params.id);
        res.status(200).json(group);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.addNoteToGroup = async (req, res) => {
    try {
        await groupService.addNoteToGroup(req.params.id, req.body.noteId);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.removeNoteFromGroup = async (req, res) => {
    try {
        await groupService.removeNoteFromGroup(req.params.id, req.body.noteId);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getGroupMembers = async (req, res) => {
    try {
        const members = await groupService.getGroupMembers(req.params.id);
        res.status(200).json(members);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.addMemberToGroup = async (req, res) => {
    try {
        await groupService.addMemberToGroup(req.params.id, req.body.userId);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.removeMemberFromGroup = async (req, res) => {
    try {
        await groupService.removeMemberFromGroup(req.params.id, req.body.userId);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
}
