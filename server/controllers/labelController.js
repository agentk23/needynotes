const labelService = require("../services/labelService");

exports.getUserLabels = async (req, res) => {
  try {
    const labels = await labelService.getAllLabelsForUser(req.user.id);
    res.status(200).json(labels);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createLabel = async (req, res) => {
  try {
    const label = await labelService.createLabel({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(label);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLabelsForNote = async (req, res) => {
  try {
    const labels = await labelService.getLabelsForNote(req.params.noteId);
    res.status(200).json(labels);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.addLabelToNote = async (req, res) => {
  try {
    await labelService.addLabelToNote(req.params.noteId, req.params.labelId);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.removeLabelFromNote = async (req, res) => {
  try {
    await labelService.removeLabelFromNote(
      req.params.noteId,
      req.params.labelId
    );
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteLabel = async (req, res) => {
  try {
    await labelService.deleteLabel(req.params.labelId);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateLabel = async (req, res) => {
  try {
    const label = await labelService.updateLabel(req.params.labelId, req.body);
    res.status(200).json(label);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLabelById = async (req, res) => {
  try {
    const label = await labelService.getLabelById(req.params.labelId);
    res.status(200).json(label);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
