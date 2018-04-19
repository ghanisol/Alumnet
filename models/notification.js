const mongoose = require('mongoose');
const config = require('../config/database')

const NotificationSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  notifications: [
    {
      notification_type: {
        type: String
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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

const Notification = module.exports = mongoose.model('Notification', NotificationSchema);

module.exports.getNotificationById = function(id, callback) {
	Notification.findById(id, callback);
}

module.exports.getNotificationsByUser = function(user_id, callback) {
  const query = {user: user_id};
	Notification.findOne(query, callback);
}

module.exports.addUserNotifications = function(newUserNotifications, callback){
  newUserNotifications.save(callback);
}

module.exports.addNotification = function(user_id, newNotification, callback){
  Notification.findOneAndUpdate({ user: user_id }, { $push: {notifications: newNotification}}, callback);
}
