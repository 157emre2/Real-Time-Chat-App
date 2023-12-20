const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: {type: String, required: true},
    date: {type: Date, required: true},
    senderId: {type: String, required: true},
    receiverId: {type: String, required: true},
});

module.exports = mongoose.model('Message', MessageSchema);