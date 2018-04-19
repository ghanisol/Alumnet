const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		first_name: {
			type: String,
			required: true
		},
		last_name: {
			type: String,
			required: true
		},
	},
	is_alumni: {
		type: Boolean,
		required: true
	},
	major: {
		type: String,
	},
	research_area : {
		type: String,
	},
	grad_year : {
		type: Number
	},
	university : {
		type: String
	},
	city : {
		type: String
	},
	state : {
		type: String
	},
	country : {
		type: String
	},
	link_facebook : {
		type: String,
		validate: {
	    validator: function(text) {
	        return text.indexOf('https://facebook.com/') === 0;
	    },
	    message: 'Twitter handle must start with https://facebook.com/'
  	}
	},
	link_linkedin : {
		type: String,
		validate: {
	    validator: function(text) {
	        return text.indexOf('https://linkedin.com/') === 0;
	    },
	    message: 'Twitter handle must start with https://linkedin.com/'
  	}
	},
	link_twitter : {
		type: String,
		validate: {
	    validator: function(text) {
	        return text.indexOf('https://twitter.com/') === 0;
	    },
	    message: 'Twitter handle must start with https://twitter.com/'
  	}
	},
	created_at : {
		type: Date,
		default: Date.now
	},
	updated_at : {
		type: Date,
		default: Date.now
	}
});


const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback) {
	const query = {email: email};
	User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		})
	});
}

module.exports.changePassword = function(userEmail, newPassword, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newPassword, salt, (err, hash) => {
			if(err) throw err;

			User.findOneAndUpdate({ email: userEmail }, { password: hash }, callback);
		})
	});
}

module.exports.updateUser = function(updatedUser, callback) {
	const currentDate = new Date();
	updatedUser.updated_at = currentDate;
	User.findOneAndUpdate({ email: updatedUser.email }, updatedUser, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
}
