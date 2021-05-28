const { Router } = require('express');
const { recipeGet, recipeGetOne, recipePost, recipePut, recipeDelete } = require('../controllers/recipeController');

const router = Router();

router.get('/recipes/', recipeGet);
router.get('/recipe/:id', recipeGetOne);
router.post('/recipe/', recipePost);
router.put('/recipe/:id', recipePut);
router.delete('/recipe/:id', recipeDelete);

module.exports = router;