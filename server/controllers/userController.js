const userService = require("../services/userService");

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.params.email);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getUserByUserName = async (req, res) => {
  try {
    const user = await userService.getUserByUserName(req.params.userName);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
