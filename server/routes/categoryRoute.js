const { Router } = require('express');
const { categoryGet, categoryPost, categoryPut, categoryDelete } = require('../controllers/categoryController');

const router = Router();

router.get('/category/', categoryGet);
router.post('/category/', categoryPost);
router.put('/category/:id', categoryPut);
router.delete('/category/:id', categoryDelete);

module.exports = router;