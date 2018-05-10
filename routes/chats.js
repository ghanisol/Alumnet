const express = require('express');
var mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Post = require('../models/post');
const User = require('../models/user');
const Notification = require('../models/notification');
const Chat = require('../models/chat');

// Send Message
router.post('/sendmessage', (req, res, next) => {
  let newMessage = {
    to_id: req.body.to_id,
    to_name: req.body.to_name,
    from_id: req.body.from_id,
    from_name: req.body.from_name,
    message: req.body.message
  }

  // Add Message to Senders Chat
  User.getUserById(req.body.to_id, (err, sender_user) => {
    if(err) throw err;

    // Add Message to Receiver Chat
    User.getUserById(req.body.from_id, (err, receiver_user) => {
      if(err) throw err;

      Chat.addMessage(sender_user, newMessage, (err, chat) => {
        if(err) throw err;
      });

      Chat.addMessage(receiver_user, newMessage, (err, chat) => {
        if(err){
          res.json({success: false, msg:'Failed to send message'});
        } else {
          res.json({success: true, msg: 'Message Sent'});
        }
      });

    });
  });
});

// Get Messages
router.post('/getmessages', (req, res, next) => {
  const user_id = req.body.user_id;
  Chat.getChatByUser(user_id, (err, messages) => {
    if(err){
      res.json({success: false, msg: 'Failed to get Messages'});
    } else {
      let users = {};
      if (messages){
        for (let message of messages.messages) {
          if (message.to_id != user_id) {
            if (!(message.to_name in users)){
              users[message.to_name] = [];
              users[message.to_name].push(message);
            } else {
              users[message.to_name].push(message);
            }
          } else {
            if (!(message.from_name in users)){
              users[message.from_name] = [];
              users[message.from_name].push(message);
            } else {
              users[message.from_name].push(message);
            }
          }
        }
      }
      let usersProps = Object.keys(users);
      let usersArray = [];
      for (prop of usersProps) {
        usersArray.push(users[prop]);
      }
      res.json({success: true, msg: 'Retrieved Messages', messages: usersArray});
    }
  });
});


module.exports = router;
