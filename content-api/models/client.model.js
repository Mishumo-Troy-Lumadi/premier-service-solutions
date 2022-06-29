const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    is_business: { type: Boolean, default: false },
    address: {
        address_line1: { type: String },
        address_line2: { type: String },
        address_line3: { type: String },
        suburb: { type: String },
        town: { type: String },
        province: { type: String },
        country: { type: String, default: "South Africa" },
        postal_code: { type: String },
    },
    contact: {
        mobile: { type: String },
        tel: { type: String },
        email: { type: String },
    },
    personnel: [
        {
            id: { type: mongoose.Types.ObjectID, ref: 'Personnel' },
        }
    ],
    status: { type: String },
    ad_hoc:{type:String}
}, {
    timestamps:true
});

let model = mongoose.model('Client', schema);
module.exports = model;