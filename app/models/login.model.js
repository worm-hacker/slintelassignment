const mongoose = require('mongoose');

const loginScema = mongoose.Schema({
    username:String,
    password:String,
    active_status: Boolean,
    last_loggedin: Date
},{
    timestamps: true
});

module.exports = mongoose.model('login', loginScema);