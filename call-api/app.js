const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

let app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(require('./router'))

module.exports = app;