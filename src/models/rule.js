/* eslint-disable func-names */
const { Schema, model } = require('mongoose');

const schema = new Schema({
	ruleId: { type: String },
	ruleName: { type: String },
	ruleOrder: { type: Number },
	ruleParent: {
		type: String,
		default: '',
	},
	caseType: { type: Number },
	ruleTarget: { type: String },
	ruleConclusion: { type: String },
	ruleFeatures: { type: Object },
	isStop: {
		type: Boolean,
		default: false,
	},
	__v: { type: Number, select: false },
});

module.exports = model('Rule', schema);
