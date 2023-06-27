require('dotenv').config();
const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connection(DATABASE_URL);

mongoose.connection
    .on('open', () => console.log('mongoose is connected'))
    .on('close', () => console.log('mongoose is disconnected'))
    .on('error', (error) => console.log(error));

module.exports = mongoose;