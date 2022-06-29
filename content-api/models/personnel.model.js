const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    names: { type: String, required: true },
    role: { type: String, required: true },
    business: { type: mongoose.Types.ObjectID, ref: 'Client' },
    contact: {
        mobile: { type: String },
        tel: { type: String },
        email: { type: String },
    }
}, {
    timestamps: true
});

let model = mongoose.model('Personnel',schema);
module.exports = model;