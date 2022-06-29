const express = require('express');
let router = express.Router();
const { Client } = require('../controllers')

router.post('/', Client.create);
router.get('/', Client.all);
router.get('/:id', Client.one);
router.put('/:id', Client.update);
router.delete('/:id', Client.delete);

module.exports = router;