const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    description: { type: String, required: true },
    availability: { type: String, required: true },
});

let model = mongoose.model('Service', schema);
module.exports = model;