const express = require('express');
let router = express.Router();
const routes = require('../controllers/call.controller')
const Call = require('../models/call.model')

router.get('/', async (req, res) => {
    const calls = await Call.find({CallStatus:"ringing"})
    res.status(200).json(calls)
})

router.post('/connect', routes.connect);
router.post('/answer',routes.answer);
router.post('/reroute',routes.reroute);

module.exports = router;