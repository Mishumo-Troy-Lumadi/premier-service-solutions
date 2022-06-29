const express = require('express');
let router = express.Router();
let controller = require('../controllers/test.controller')

router.post('/incoming',controller.incoming);
router.post('/status',controller.status);

module.exports = router;