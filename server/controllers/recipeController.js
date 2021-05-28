const { Recipe } = require('../models/Recipe');

const recipeGet = async (req, res) => {
    try {
        const recipes = await Recipe.findAll();
        console.log(recipes);
        res.json(recipes);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

const recipeGetOne = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findOne({ where: { id } })
        console.log(recipe);
        res.json(recipe);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

const recipePost = async (req, res) => {
    try {
        const { name, content } = req.body;
        const recipe = await Recipe.create({ name, content });
        console.log(recipe);
        res.json(recipe);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

const recipePut = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, content } = req.body;
        const recipe = await Recipe.update({ name, content }, { where: { id } });

        // This code only for displaying already updated recipe instead of simple [0] or [1].
        const updatedRecipe = await Recipe.findOne({ where: { id } });
        //

        console.log(updatedRecipe);
        res.json(updatedRecipe);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

const recipeDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.destroy({ where: { id } });
        res.json(recipe);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

module.exports = {
    recipeGet,
    recipeGetOne,
    recipePost,
    recipePut,
    recipeDelete,
};