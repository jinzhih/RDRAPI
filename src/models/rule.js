/* eslint-disable func-names */
const { Schema, model } = require('mongoose');

const schema = new Schema({
	ruleId: { type: Number },
	name: { type: String },
	ruleOrder: { type: Number },
	ruleParent: {
		type: String,
		default: '',
	},
	caseType: { type: String },
	target: { type: String },
	conclusion: { type: String },
	nextRuleId: { type: Number },
	subRuleIds: { type: Array },
	cornerStoneId: { type: Number },
	atts: { type: Map },
	isStop: {
		type: Boolean,
		default: false,
	},
	__v: { type: Number, select: false },
});

module.exports = model('Rule', schema);
