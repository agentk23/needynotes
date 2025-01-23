// models/user.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // Sequelize automatically adds an id primary key unless you override it
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'users'
    });

    return User;
};
