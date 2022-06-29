const express = require('express');
let router = express.Router();

router.use('/test', require('./routes/test.route'));
router.use('/calls', require('./routes/call.route'))
router.use('/token', require('./routes/token.route'))

module.exports = router;