const User = require('../models/user');
const { generateToken } = require('../utils/jwt');

// 添加user
const addUser = async (req, res) => {
	const {
		firstName,
		lastName,
		email,
		phone,
		password,
		userType,
		golfLinkNumber,
		grade,
		handicap,
		genderChecked,
	} = req.body;
	//const emailToken = crypto.randomBytes(64).toString('hex');
	// const transporter = nodemailer.createTransport({
	//   service: 'gmail',
	//   auth: {
	//     user: 'wact4bbbtest@gmail.com',
	//     pass: 'Ab12345678~',
	//   },
	// });

	// const mailOptions = {
	//   from: 'wact4bbbtest@gmail.com',
	//   to: 'wact4bbbtest@gmail.com',
	//   subject: 'Invoices due',
	//   text: 'Dudes, we really need your money.',
	// };

	// transporter.sendMail(mailOptions, (error, info) => {
	//   if (error) {
	//     console.log(error);
	//   } else {
	//     console.log(`Email sent: ${info.response}`);
	//   }
	// });
	// console.log(emailToken);
	//const isVerified = false;
	const existingUser = await User.findOne({ email });
	// const emailToken = 'aaa';
	// const userT = await User.findOne({ emailToken });
	// console.log(userT);
	if (existingUser) {
		return res.status(202).json('User already exist');
	}

	const user = new User({
		firstName,
		lastName,
		email,
		phone,
		password,
		userType,
		golfLinkNumber,
		grade,
		handicap,
		genderChecked,
	});
	await user.hashPassword();
	await user.save();

	const token = generateToken(user._id, user.userType);
	return res.json({ email, token });
};

module.exports = { addUser };
