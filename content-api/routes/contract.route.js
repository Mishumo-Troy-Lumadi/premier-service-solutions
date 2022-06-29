const express = require('express');
let router = express.Router();

const {Contract} = require('../controllers')

router.post('/', Contract.create);
router.get('/',  Contract.all);
router.get('/:id',  Contract.one);
router.put('/:id',  Contract.update);
router.delete('/:id', Contract.delete);

module.exports = router;