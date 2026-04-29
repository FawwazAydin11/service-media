const express = require('express');
const router = express.Router();
const postHandler = require('./handler/posts');

router.post('/', postHandler.create);
router.get('/', postHandler.getAll);
router.get('/:id', postHandler.getById);
router.put('/:id', postHandler.update);
router.delete('/:id', postHandler.destroy);

module.exports = router;