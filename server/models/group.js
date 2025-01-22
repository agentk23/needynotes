// models/group.js
module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define('Group', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'groups'
    });
  
    return Group;
  };
  