const mongoose = require('mongoose');

function connect() {

    mongoose.Promise = global.Promise

    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
    }, (err) => {
        if (!err) {
            console.info('Connected to MongoDB');
        } else {
            console.error('Error in DB connection: ' + err);
        }
    });

}

module.exports = {
    connect
}