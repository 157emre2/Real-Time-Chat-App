const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   name: String,
   username: String,
   password: String,
   email: String,
   chatId: [String]
});

module.exports = mongoose.model('User',UserSchema);