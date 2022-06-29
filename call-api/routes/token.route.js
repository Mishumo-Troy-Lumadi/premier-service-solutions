const express = require('express');
let router = express.Router();
let controller = require('../controllers/token.controller')

router.get('/generate',controller.generate);

module.exports = router;