const { Router } = require('express');
const { categoryGet, categoryGetOne, categoryPost, categoryPut, categoryDelete } = require('../controllers/categoryController');

const router = Router();

router.get('/categories/', categoryGet);
router.get('/category/:id', categoryGetOne);
router.post('/category/', categoryPost);
router.put('/category/:id', categoryPut);
router.delete('/category/:id', categoryDelete);

module.exports = router;