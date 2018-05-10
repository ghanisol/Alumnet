const mongoose = require('mongoose');
const config = require('../config/database')

const ChatSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  messages: [
    {
      to_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      to_name: {
        type: String
      },
      from_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      from_name: {
        type: String
      },
      message: {
        type: String
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    }
  ],
  created_at : {
		type: Date,
		default: Date.now
	}
});

const Chat = module.exports = mongoose.model('Chat', ChatSchema);

module.exports.getChatById = function(id, callback) {
	Chat.findById(id, callback);
}

module.exports.getChatByUser = function(user_id, callback) {
  const query = {user: user_id};
	Chat.findOne(query, callback);
}

module.exports.addUserChats = function(newUserChats, callback){
  newUserChats.save(callback);
}

module.exports.addMessage = function(user_id, newMessage, callback){
  Chat.findOneAndUpdate({ user: user_id }, { $push: {messages: newMessage}}, callback);
}
