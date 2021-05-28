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
        validate: {
            notEmpty: true,
        },
    },
},
    {
        timestamps: true,
        // Here we can specified timestamp options: 
        createdAt: true,
        updatedAt: true,
    },
);

// Adding sequelize hook to transform (trim in our case) incoming userdata.
Category.beforeCreate(async (category, options) => {
    const transformingName = await category.name.trim();
    category.name = transformingName;
});

module.exports = { Category };