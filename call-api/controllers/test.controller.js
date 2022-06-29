var socket = require('../socket');
const Call = require('../models/call.model')

exports.incoming = async (req, res) => {
    try {
        let call = await new Call(req.body).save()

        if (call) {
            var io = socket.get()
            io.emit('incoming', { data: call })
            res.sendStatus(200)
        } else {
            res.sendStatus(500)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
};

exports.status = async (req, res) => {
    try {
        var io = socket.get()

        const { CallSid } = req.body

        const call = await Call.findOne({ CallSid })

        if (call) {

            const newCall = await Call.findByIdAndUpdate(call.id, req.body)

            io.emit(call.CallStatus, { data: newCall })

            res.sendStatus(200)
        } else {

            res.sendStatus(404)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }


};