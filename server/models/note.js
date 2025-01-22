// models/note.js
module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define('Note', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT
      }
    }, {
      tableName: 'notes'
    });
  
    return Note;
  };
  