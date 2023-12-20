const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
   title: String,
   chat_type: String,
   usersId: [String],
   lastMessageId: String,
   createdAt: Date
});

module.exports = mongoose.model('Chat', ChatSchema);