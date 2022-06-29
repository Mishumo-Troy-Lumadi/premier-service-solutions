const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    acc_sid: process.env.TWILIO_ACCOUNT_SID,
    app_sid: process.env.TWILIO_APP_SID,
    api_sid: process.env.TWILIO_API_SID,
    api_token: process.env.TWILIO_API_TOKEN,
    number: process.env.TWILIO_NUMBER,
    port: process.env.PORT || 5000,
    host: process.env.HOST
}