const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    AccountSid: { type: String },
    ApiVersion: { type: String },
    CallSid: { type: String },
    CallStatus: { type: String },
    CallToken: { type: String },
    Called: { type: String },
    CalledCity: { type: String },
    CalledCountry: { type: String },
    CalledState: { type: String },
    CalledZip: { type: String },
    Caller: { type: String },
    CallerCity: { type: String },
    CallerCountry: { type: String },
    CallerState: { type: String },
    CallerZip: { type: String },
    Direction: { type: String },
    From: { type: String },
    FromCity: { type: String },
    FromCountry: { type: String },
    FromState: { type: String },
    FromZip: { type: String },
    To: { type: String },
    ToCity: { type: String },
    ToCountry: { type: String },
    ToState: { type: String },
    ToZip: { type: String },
}, {
    timestamps:true
});

let model = mongoose.model('Call', schema);
module.exports = model;