const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    services:[{ type: mongoose.Types.ObjectID, ref: 'Service' }],
    services_levels: [{ type: mongoose.Types.ObjectID, ref: 'Service Level' }]
}, {
    timestamps: true
});

let model = mongoose.model('Contract', schema);
module.exports = model;