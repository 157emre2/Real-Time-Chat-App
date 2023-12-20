const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
   title: {type: String, required: true},
   chat_type: {type: String, required: true},
   usersId: {type: [String], required: true},
   lastMessageId: {type: String, required: false},
   createdAt: {type: Date, required: true}
});

module.exports = mongoose.model('Chat', ChatSchema);