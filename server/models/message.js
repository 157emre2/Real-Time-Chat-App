const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: String,
    date: Date,
    senderId: String,
    receiverId: String,
});

module.exports = mongoose.model('Message', MessageSchema);