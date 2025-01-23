const { Note } = require("../models/note");
const { Op } = require("sequelize");

exports.getAllNotesForUser = async (userId) => {
  try {
    return await Note.findAll({
      where: {
        userId: userId,
      },
      order: [["createdAt", "DESC"]], // e.g. sort by newest first
    });
  } catch (error) {
    throw new Error("Failed to fetch notes for user: " + error.message);
  }
};
exports.searchNotes = async (userId, filters = {}) => {
  const { title, label, date } = filters;

  // Build a dynamic WHERE object
  const whereClause = {
    userId: userId,
  };

  // If 'title' was provided, search with a LIKE query
  if (title) {
    whereClause.title = {
      [Op.like]: `%${title}%`,
    };
  }

  // If 'label' was provided, search by label (assuming label is stored in the Note table)
  if (label) {
    whereClause.label = {
      [Op.like]: `%${label}%`,
    };
  }

  // If 'date' was provided, you can filter by 'createdAt' or a custom date field.
  // Example: if you want all notes created on a specific date, you'd do something like:
  if (date) {
    // Suppose 'date' is a string 'YYYY-MM-DD' and you want to filter by day
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    whereClause.createdAt = {
      [Op.between]: [startOfDay, endOfDay],
    };
  }

  try {
    return await Note.findAll({
      where: whereClause,
      order: [["createdAt", "DESC"]],
    });
  } catch (error) {
    throw new Error("Failed to search notes: " + error.message);
  }
};

exports.createNote = async (note) => {
  return await Note.create(note);
};

exports.getNoteById = async (noteID) => {
  return await Note.findById(noteID);
};

exports.updateNote = async (noteID, note) => {
  const searchNote = await Note.findByPk(noteID);
  if (!searchNote) {
    throw new Error("Note not found");
  }
  return await searchNote.update(note);
};

exports.deleteNote = async (noteID) => {
  const note = await Note.findByPk(noteID);
  if (!note) {
    throw new Error("Note not found");
  }
  await note.destroy();
  return true;
};
