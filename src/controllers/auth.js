const User = require('../models/user');
const { generateToken } = require('../utils/jwt');
const {
  INVALID_EMAIL,
  INVALID_PASSWORD,
} = require('../constants/errorMessage');

const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email }).exec();
  if (!existingUser) {
    return res.status(400).send(INVALID_EMAIL);
  }

  if (!(await existingUser.validatePassword(password.toString()))) {
    return res.status(400).send(INVALID_PASSWORD);
  }

  const token = generateToken(existingUser._id, existingUser.email);
  return res.json({ email, token });
};

module.exports = { UserLogin };
