const Sequelize = require('sequelize');

const database = require('../config/initializeDatabase');

// Create model "Recipe".
const Recipe = database.define('recipe', {
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

    content: {
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
Recipe.beforeCreate(async (recipe, options) => {
    const transformedName = await recipe.name.trim();
    recipe.name = transformedName;
});

module.exports = { Recipe };