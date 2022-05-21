const mongoose = require("mongoose");
require('dotenv').config()

const mongoURL = "mongodb://mongo:27017/mongo-test";

const dbConnect = () => {
    return mongoose.connect(mongoURL);
};

module.exports = dbConnect;