const twilio = require('twilio')
var socket = require('../socket');
const Call = require('../models/call.model')
const config = require('../config')

const VoiceResponse = twilio.twiml.VoiceResponse
let client = twilio(config.acc_sid, config.api_token)

exports.connect = async (req, res) => {

  try {
      let call = await new Call(req.body).save()

      if (call) {

          var io = socket.get()
          io.emit('incoming', { data: call })

          var twiml = new VoiceResponse()

          twiml.say({ voice: 'man' }, 'Thank you for calling.')
          twiml.pause({ length: 1 })
          twiml.say({ voice: 'man',loop:100 }, "An agent will be with you shortly")
         
          res.setHeader("Content-Type", 'text/xml')
          res.send(twiml.toString());

      } else {
          res.sendStatus(400)
      }
  } catch (error) {
      console.log(error)
      res.sendStatus(500)
  }
   
};

exports.answer = async (req, res) => {
    console.log('Call routing')

    client.calls(req.body.callId).update({
        url: `https://cad6-102-64-32-194.in.ngrok.io/calls/reroute?agent=${req.body.agent}`,
        method:"POST"
    })

    res.sendStatus(200)
};

exports.reroute = async (req, res) => {
    console.log('Call routed')
    var twiml = new VoiceResponse()

    twiml.say({ voice: 'man' }, 'Connecting you to an agent.')

    var dial = twiml.dial(process.env.TWILIO_NO)
    dial.client({}, req.query.agent)
  
    res.setHeader("Content-Type", 'text/xml')
    res.send(twiml.toString());
};