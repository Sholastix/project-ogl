const { Category } = require('../models/Category');

const categoryGet = async (req, res) => {
    try {
        const category = await Category.findAll();
        console.log(category);
        res.json(category);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

const categoryPost = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await Category.create({ name });
        console.log(category);
        res.json(category);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

const categoryPut = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const category = await Category.update({ name }, { where: { id } });

        // This code only for displaying already updated category instead of simple [0] or [1].
        const updatedCategory = await Category.findOne({ where: { id } });
        //
        
        console.log(updatedCategory);
        res.json(updatedCategory);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

const categoryDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.destroy({ where: { id } });
        res.json(category);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

module.exports = {
    categoryGet,
    categoryPost,
    categoryPut,
    categoryDelete,
};