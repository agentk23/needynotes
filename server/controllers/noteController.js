const noteService = require("../services/noteService");

exports.getUserNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotesForUser(req.user.id);
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.searchUserNotes = async (req, res) => {
    try {
      const userId = req.user.userId;
      const { title, label, date } = req.query; // or req.body, depending on how you send filters
  
      const notes = await noteService.searchNotes(userId, { title, label, date });
      res.json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
exports.createNote = async (req, res) => {
  try {
    const note = await noteService.createNote({
      ...req.body,
      userID: req.user.id,
    });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.getNoteById = async (req, res) => {
  try {
    const note = await noteService.getNoteById(req.params.id);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.updateNote = async (req, res) => {
  try {
    const note = await noteService.updateNote(req.params.id, req.body);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.deleteNote = async (req, res) => {
  try {
    await noteService.deleteNote(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};