const express = require('express');
let router = express.Router();

const { ServiceLevel } = require('../controllers')

router.post('/', ServiceLevel.create);
router.get('/', ServiceLevel.all);
router.get('/:id', ServiceLevel.one);
router.put('/:id', ServiceLevel.update);
router.delete('/:id', ServiceLevel.delete);

module.exports = router;