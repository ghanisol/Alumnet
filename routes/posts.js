const express = require('express');
var mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Post = require('../models/post');
const User = require('../models/user');
const Notification = require('../models/notification');

// Post
router.post('/post', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let user_id = req.body.user_id;

  User.getUserById(user_id, (err, userOb) => {
		if(err) throw err;
		if(userOb){
      let user_name = userOb.name.first_name + " " + userOb.name.last_name;
      let newPost = new Post({
        _id: new mongoose.Types.ObjectId(),
        message: req.body.message,
        user: userOb,
        user_name: user_name,
        comments: []
      });

      Post.addPost(newPost, (err, user) => {
        if(err){
          res.json({success: false, msg:'Failed to Post'});
        } else {
          res.json({success: true, msg: 'Message Posted'});
        }
      });
	  }
  });
});

// Comment
router.post('/comment', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let post_id = req.body.post_id;
  let user_id = req.body.user_id;

  User.getUserById(user_id, (err, userOb) => {
		if(err) throw err;
		if(userOb){
      let user_name = userOb.name.first_name + " " + userOb.name.last_name;
      let newComment = {
        user: userOb,
        user_name: user_name,
        message: req.body.comment_msg
      };

      Post.addComment(post_id, newComment, (err, comment) => {
        if(err) throw err;
      });

      Post.getPostById(post_id, (err, postOb) => {
        if(err) throw err;
        if(postOb){
          // Send notifications to post followers (i.e users who have commented on the post)
          let comment_users = new Set();
          postOb.comments.forEach(comment => {
            User.getUserById(comment.user, (err, comment_user) => {
          		if(err) throw err;
              if (comment_user._id != user_id)
              {
                let follower_message = userOb.name.first_name + " " + userOb.name.last_name + " commented on a post you are following.";
                let followerNotification = {
                  notification_type: "comment_follower",
                  user: userOb,
                  message: follower_message
                };

                Notification.addNotification(comment_user._id, followerNotification, (err, notification) => {
                  if(err) throw error;
                });
              }
            });
          });

          // Send notification to post owner
          let owner_message = userOb.name.first_name + " " + userOb.name.last_name + " commented on your post.";
          let ownerNotification = {
            notification_type: "comment",
            user: userOb,
            message: owner_message
        	};

          Notification.addNotification(postOb.user, ownerNotification, (err, notification) => {
            if(err){
              res.json({success: false, msg:'Failed to post comment'});
            } else {
              res.json({success: true, msg: 'Comment Posted'});
            }
          });
        }
      });
	  }
  });
});

// Get Posts
router.get('/getposts', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  Post.find({}, (err, posts) => {
    if(err){
      res.json({success: false, msg: 'Failed to get posts'});
    } else {
      res.json({success: true, msg: 'Retrieved posts', posts: posts});
    }
  });
});

// Get Notifications
router.post('/getnotifications', (req, res, next) => {
  const user_id = req.body.user_id;
  Notification.getNotificationsByUser(user_id, (err, notifications) => {
    if(err){
      res.json({success: false, msg: 'Failed to get Notifications'});
    } else {
      res.json({success: true, msg: 'Retrieved Notifications', notifications: notifications});
    }
  });
});

module.exports = router;
