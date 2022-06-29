const express = require('express');
let router = express.Router();
const { Personnel } = require('../controllers')

router.post('/', Personnel.create);
router.get('/', Personnel.all);
router.get('/:id', Personnel.one);
router.put('/:id', Personnel.update);
router.delete('/:id', Personnel.delete);

module.exports = router;