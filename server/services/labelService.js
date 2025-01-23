const { Label } = require("../models/label");

exports.getAllLabelsForUser = async (userId) => {
  try {
    return await Label.findAll({
      where: {
        userId: userId,
      },
    });
  } catch (error) {
    throw new Error("Failed to fetch labels for user: " + error.message);
  }
};

exports.createLabel = async (labelData) => {
  try {
    return await Label.create(labelData);
  } catch (error) {
    throw new Error("Failed to create label: " + error.message);
  }
};

exports.getLabelsForNote = async (noteId) => {
  try {
    return await Label.findAll({
      where: {
        noteId: noteId,
      },
    });
  } catch (error) {
    throw new Error("Failed to fetch labels for note: " + error.message);
  }
};

exports.addLabelToNote = async (noteId, labelId) => {
  try {
    return await Label.create({
      noteId: noteId,
      labelId: labelId,
    });
  } catch (error) {
    throw new Error("Failed to add label to note: " + error.message);
  }
};

exports.removeLabelFromNote = async (noteId, labelId) => {
  try {
    return await Label.destroy({
      where: {
        noteId: noteId,
        labelId: labelId,
      },
    });
  } catch (error) {
    throw new Error("Failed to remove label from note: " + error.message);
  }
};

exports.deleteLabel = async (labelId) => {
  try {
    return await Label.destroy({
      where: {
        id: labelId,
      },
    });
  } catch (error) {
    throw new Error("Failed to delete label: " + error.message);
  }
};

exports.updateLabel = async (labelId, labelData) => {
  try {
    const label = await Label.findByPk(labelId);
    if (!label) {
      throw new Error("Label not found");
    }

    return await label.update(labelData);
  } catch (error) {
    throw new Error("Failed to update label: " + error.message);
  }
};

exports.getLabelById = async (labelId) => {
  try {
    return await Label.findByPk(labelId);
  } catch (error) {
    throw new Error("Failed to fetch label: " + error.message);
  }
};


