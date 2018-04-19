const express = require('express');
var mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Notification = require('../models/notification');

// Register
router.post('/register', (req, res, next) => {
	let newUser = new User({
		_id: new mongoose.Types.ObjectId(),
		name: {first_name: req.body.fname, last_name: req.body.lname},
		email: req.body.email,
		password: req.body.password,
		is_alumni: req.body.is_alumni,
		major: req.body.major,
		research_area: req.body.research_area,
		grad_year: req.body.grad_year,
		university: req.body.university,
		city: req.body.city,
		state: req.body.state,
		country: req.body.country,
		link_facebook: req.body.link_facebook,
		link_linkedin: req.body.link_linkedin,
		link_twitter: req.body.link_twitter
	});

	let newUserNotifications = new Notification({
			_id: new mongoose.Types.ObjectId(),
			user: newUser._id,
			notifications: []
	});

	Notification.addUserNotifications(newUserNotifications, (err, notifications) => {
			if(err) throw err;
	});

	User.addUser(newUser, (err, user) => {
		if(err){
			res.json({success: false, msg:'Failed to register user'});
		} else {
			res.json({success: true, msg: 'User registered'});
		}
	});


});

// Update profile
router.post('/update', passport.authenticate('jwt', {session:false}), (req, res, next) => {

	if(req.body.password != undefined){
		User.changePassword(req.body.email, req.body.password , (err, user) => {
			if(err) throw err;
		});
	}

	let updatedUser = {
		email: req.body.email,
		major: req.body.major,
		research_area: req.body.research_area,
		university: req.body.university,
		city: req.body.city,
		state: req.body.state,
		country: req.body.country,
		link_facebook: req.body.link_facebook,
		link_linkedin: req.body.link_linkedin,
		link_twitter: req.body.link_twitter
	};

	User.updateUser(updatedUser, (err, user) => {
		if(err){
			res.json({success: false, msg:'Failed to update user'});
		} else {
			res.json({success: true, msg: 'User updated'});
		}
	});
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;

	User.getUserByEmail(email, (err, user) => {
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'User not found'});
		}

		User.comparePassword(password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch){
				const token = jwt.sign(user.toObject(), config.secret, {
					expiresIn: 604800
				});

				res.json({
					success:true,
					token: 'JWT ' + token,
					user: {
						id: user._id,
						name: user.name,
						email: user.email
					}
				});
			} else {
				return res.json({success: false, msg: 'Wrong Password'});
			}
		});
	});
});


// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	res.json({user: req.user});
});

module.exports = router;
