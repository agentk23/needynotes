// models/index.js
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// Example config, adjust as needed (or use config/config.js via Sequelize CLI)
const config = {
  dialect: 'sqlite',
  storage: 'database.sqlite3'
};

const db = {};

// Initialize Sequelize
const sequelize = new Sequelize(config);

// Import all model files
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// ====== Define Associations Here ======

// 1) One-to-many: User -> Note
db.User.hasMany(db.Note, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
db.Note.belongsTo(db.User, {
  foreignKey: 'userId'
});

// 2) One-to-many: User -> Group (the user is the owner)
db.User.hasMany(db.Group, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
db.Group.belongsTo(db.User, {
  foreignKey: 'userId'
});

// 3) One-to-many: User -> Label
db.User.hasMany(db.Label, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
db.Label.belongsTo(db.User, {
  foreignKey: 'userId'
});

// 4) Many-to-many: User <-> Group (membership)
db.User.belongsToMany(db.Group, {
  through: 'userGroups',
  foreignKey: 'userId',
  otherKey: 'groupId'
});
db.Group.belongsToMany(db.User, {
  through: 'userGroups',
  foreignKey: 'groupId',
  otherKey: 'userId'
});

// 5) Many-to-many: Note <-> Group (a note can be shared to many groups)
db.Note.belongsToMany(db.Group, {
  through: 'noteGroups',
  foreignKey: 'noteId',
  otherKey: 'groupId'
});
db.Group.belongsToMany(db.Note, {
  through: 'noteGroups',
  foreignKey: 'groupId',
  otherKey: 'noteId'
});

// 6) Many-to-many: Note <-> Label
db.Note.belongsToMany(db.Label, {
  through: 'noteLabels',
  foreignKey: 'noteId',
  otherKey: 'LabelId'
});
db.Label.belongsToMany(db.Note, {
  through: 'noteLabels',
  foreignKey: 'LabelId',
  otherKey: 'noteId'
});

// 7) Many-to-many: Group <-> Label
db.Group.belongsToMany(db.Label, {
  through: 'groupLabels',
  foreignKey: 'groupId',
  otherKey: 'LabelId'
});
db.Label.belongsToMany(db.Group, {
  through: 'groupLabels',
  foreignKey: 'LabelId',
  otherKey: 'groupId'
});

// Export DB reference
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
