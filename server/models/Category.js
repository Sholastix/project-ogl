const Sequelize = require('sequelize');

const database = require('../config/initializeDatabase');

// Create model "Category".
const Category = database.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true,
        validate: {
            notEmpty: true,
        },
    },

    // hooks: {
    //     beforeCreate: function (category, options) {
    //         category.name = category.name.toLowerCase();
    //         return category;
    //     },
    // },
},
    {
        timestamps: true,
        createdAt: true,
        updatedAt: false,
    },
);

module.exports = { Category };