const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    description: { type: String, required: true },
    reliability: { type: String, required: true },
    responsiveness: { type: String, required: true },
    procedure: { type: String, required: true },
    monitor: { type: String, required: true },
    consequences: { type: String, required: true },
    escape_clause: { type: String, required: true },
});

let model = mongoose.model('Service Model', schema);
module.exports = model;