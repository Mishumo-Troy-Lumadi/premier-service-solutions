const express = require('express');
let router = express.Router();

router.use('/client',require('./routes/client.route'));
router.use('/personnel',require('./routes/personnel.route'));
router.use('/service_level',require('./routes/service_level.route'));
router.use('/service',require('./routes/service.route'));
router.use('/contract',require('./routes/contract.route'));

module.exports = router;