/* eslint-disable func-names */
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  genderChecked: { type: String },
  password: { type: String },
  golfLinkNumber: { type: String },
  grade: { type: String },
  handicap: { type: String },
  emailToken: { type: String },
  isVerified: { type: Boolean },
  userType: {
    type: String,
    default: 'user',
  },
  __v: { type: Number, select: true },
});

schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 10);
};

schema.methods.validatePassword = async function (password) {
  const validPassword = await bcrypt.compare(password, this.password);
  return validPassword;
};

module.exports = model('User', schema);
