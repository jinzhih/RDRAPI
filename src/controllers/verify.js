const { request } = require('express');
const User = require('../models/user');
const verify = async (req, res, next) => {
	console.log(req.query.token);
	const emailToken = req.query.token;
	try {
		const userT = await User.findOne({ emailToken });
		console.log(userT);
		if (!userT) {
			return res
				.status(401)
				.json('Token is invalid,please contact us for assistance');
		}
		userT.emailToken = null;
		userT.isVerified = true;
		await userT.save();
		res.redirect('http://localhost:3001/');
		// return res.status(200).json('Welcome');
	} catch (error) {
		console.log(error);
	}
};
module.exports = { verify };
