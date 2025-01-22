// models/tag.js
module.exports = (sequelize, DataTypes) => {
    const Label = sequelize.define('Label', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'labels'
    });
  
    return Label;
  };
  