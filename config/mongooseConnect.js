const mongoose = require('mongoose');
const config = require('config');

mongoose.connect(`${config.get("MONGODB_URL")}/Scatch`).then(function () {
    console.log('connect');
}).catch(function (error) {
    console.log(error);
});


module.exports = mongoose.connection;