const { Group, } = require('../models');
const { Op } = require("sequelize");

exports.getAllGroupsForUser = async (userId) => {    
    try {
        return await Group.findAll({
            where: {
                userId: userId
            },
            order: [['createdAt', 'DESC']]
        });
    } catch (error) {
        throw new Error('Failed to fetch groups for user: ' + error.message);
    }
};

exports.searchGroups = async (userId, filters = {}) => {
    const { title, description } = filters;

    const whereClause = {
        userId: userId
    };

    if (title) {
        whereClause.title = {
            [Op.like]: `%${title}%`
        };
    }

    if (description) {
        whereClause.description = {
            [Op.like]: `%${description}%`
        };
    }

    try {
        return await Group.findAll({
            where: whereClause,
            order: [['createdAt', 'DESC']]
        });
    } catch (error) {
        throw new Error('Failed to search groups: ' + error.message);
    }
};

exports.getSharedNotesForGroup = async (groupId) => {
    try {
        return await Group.findByPk(groupId, {
            include: 'notes'
        });
    } catch (error) {
        throw new Error('Failed to fetch shared notes for group: ' + error.message);
    }
};

exports.createGroup = async (groupData) => {
    try {
        return await Group.create(groupData);
    } catch (error) {
        throw new Error('Failed to create group: ' + error.message);
    }
};

exports.getGroupById = async (groupId) => {
    try {
        return await Group.findByPk(groupId);
    } catch (error) {
        throw new Error('Failed to fetch group: ' + error.message);
    }
};

exports.updateGroup = async (groupId, groupData) => {
    try {
        const group = await Group.findByPk(groupId);
        if (!group) {
            throw new Error('Group not found');
        }

        return await group.update(groupData);
    } catch (error) {
        throw new Error('Failed to update group: ' + error.message);
    }
};

exports.deleteGroup = async (groupId) => {
    try {
        const group = await Group.findByPk(groupId);
        if (!group) {
            throw new Error('Group not found');
        }

        await group.destroy();
    } catch (error) {
        throw new Error('Failed to delete group: ' + error.message);
    }
};

exports.addNoteToGroup = async (groupId, noteId) => {
    try {
        const group = await Group.findByPk(groupId);
        if (!group) {
            throw new Error('Group not found');
        }
        
        await group.addNote(noteId);
    } catch (error) {
        throw new Error('Failed to add note to group: ' + error.message);
    }
};

exports.removeNoteFromGroup = async (groupId, noteId) => {
    try {
        const group = await Group.findByPk(groupId);
        if (!group) {
            throw new Error('Group not found');
        }

        await group.removeNote(noteId);
    } catch (error) {
        throw new Error('Failed to remove note from group: ' + error.message);
    }
};

exports.getGroupMembers = async (groupId) => {
    try {
        return await Group.findByPk(groupId, {
            include: 'members'
        });
    } catch (error) {
        throw new Error('Failed to fetch group members: ' + error.message);
    }
};

exports.addMemberToGroup = async (groupId, userId) => {
    try {
        const group = await Group.findByPk(groupId);
        if (!group) {
            throw new Error('Group not found');
        }

        await group.addMember(userId);
    } catch (error) {
        throw new Error('Failed to add member to group: ' + error.message);
    }
};

exports.removeMemberFromGroup = async (groupId, userId) => {
    try {
        const group = await Group.findByPk(groupId);
        if (!group) {
            throw new Error('Group not found');
        }

        await group.removeMember(userId);
    } catch (error) {
        throw new Error('Failed to remove member from group: ' + error.message);
    }
};
