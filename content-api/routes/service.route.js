const express = require('express');
let router = express.Router();

const { Service } = require('../controllers')

router.post('/', Service.create);
router.get('/', Service.all);
router.get('/:id', Service.one);
router.put('/:id', Service.update);
router.delete('/:id', Service.delete);

module.exports = router;