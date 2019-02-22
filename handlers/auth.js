const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signin = function() {};

exports.signup = async function(req, res, next) {
	try {
		//create user
		let user = db.User.create(req.body); //req.body is data coming from frontend form
		let { id, username } = user;
		//create token
		let token = jwt.sign(
			{
				id,
				username
			},
			process.env.SECRET_KEY
		);
		return res.status(200).json({
			id,
			username,
			token
		});
	} catch (err) {
		//if validation fails
		if (err.code === 11000) {
			//reply with username/email already taken
			err.message = 'Sorry, that username and/or email is already taken.';
		}
		return next({
			status: 400,
			message: err.message
		});
		//or generic 400
	}
};
