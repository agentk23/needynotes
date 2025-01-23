const { User } = require("../models");

exports.getUserById = async (userId) => {
  try {
    return await User.findByPk(userId);
  } catch (error) {
    throw new Error("Failed to fetch user by id: " + error.message);
  }
};

exports.getUserByEmail = async (email) => {
  try {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  } catch (error) {
    throw new Error("Failed to fetch user by email: " + error.message);
  }
};

exports.getUserByUserName = async (userName) => {
  try {
    return await User.findOne({
      where: {
        userName: userName,
      },
    });
  } catch (error) {
    throw new Error("Failed to fetch user by username: " + error.message);
  }
};

exports.linkGoogleAccount = async (userId, googleId) => {
  try {
    const user = await User.findByPk(userId);
    user.googleId = googleId;
    return await user.save();
  } catch (error) {
    throw new Error("Failed to link Google account: " + error.message);
  }
};
