const mongoose = require('mongoose');
const config = require('../config/database');

const PostSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  user_name: {
    type: String
  },
  message: {
    type: String
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      user_name: {
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

const Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getPostById = function(id, callback) {
	Post.findById(id, callback);
}

module.exports.addPost = function(newPost, callback){
  newPost.save(callback);
}

module.exports.addComment = function(post_id, newComment, callback){
  Post.findOneAndUpdate({ _id: post_id }, { $push: {comments: newComment}}, callback);
}
