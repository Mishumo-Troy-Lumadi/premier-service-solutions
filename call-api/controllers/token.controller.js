const config = require('../config')

exports.generate = async (req, res) => {

    try {
        const AccessToken = require('twilio').jwt.AccessToken;
        const VoiceGrant = AccessToken.VoiceGrant;

        const agent = req.query.agent

        if (agent) {

            const token = new AccessToken(config.acc_sid, config.api_sid, config.api_token)

            token.identity = agent

            const grant = new VoiceGrant({
                outgoingApplicationSid: config.app_sid,
                incomingAllow: true,
            })

            token.addGrant(grant)

            res.status(200).json({ token: token.toJwt() })

        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
};