const Rule = require('../models/rule');
const { genRuleOrder } = require('../utils/genOrder');

// add rule
// ruleId: { type: Number },
// name: { type: String },
// ruleOrder: { type: Number },
// ruleParent: {
// 	type: String,
// 	default: '',
// },
// caseType: { type: String },
// target: { type: String },
// conclusion: { type: String },
// nextRuleId: { type: Number },
// subRuleIds: { type: Array },
// cornerStoneId: { type: Number },
// atts: { type: Map },
// isStop: {
// 	type: Boolean,
// 	default: false,
// },
const addRule = async (req, res) => {
	const {
		ruleId,
		name,
		ruleParent,
		caseType,
		target,
		conclusion,
		atts,
		isStop,
		nextRuleId,
		subRuleIds,
		cornerStoneId,
	} = req.body;
	console.log(req.body);
	const existingRule = await Rule.findOne({ ruleId });
	if (existingRule) {
		return res.status(202).json('Rule already exist');
	}

	const maxRule = await Rule.find().sort({ ruleOrder: -1 }).limit(1);

	const ruleOrder = genRuleOrder(maxRule);
	console.log(ruleOrder);

	const rule = new Rule({
		ruleId,
		name,
		ruleParent,
		caseType,
		target,
		conclusion,
		atts,
		isStop,
		nextRuleId,
		subRuleIds,
		cornerStoneId,
		ruleOrder,
	});
	console.log(rule);
	await rule.save();
	return res.status(201).json(rule);
};

//get rule by ruleID
const getRulesByRuleId = async (req, res) => {
	const ruleId = req.params;
	console.log(ruleId);
	const rule = await Rule.find(ruleId).exec();
	if (rule.length === 0) {
		return res.status(404).send('No such a ruleId');
	}
	return res.json(rule);
};

//get rules by CaseType
const getRulesByCaseType = async (req, res) => {
	const caseType = req.params;
	console.log(caseType);
	const rules = await Rule.find(caseType).exec();
	if (rules.length === 0) {
		return res.status(404).send('No found rules');
	}
	return res.json(rules);
};

//update rules by ruleId
const updateRule = async (req, res) => {
	const ruleId = req.params;
	const {
		name,
		ruleParent,
		caseType,
		target,
		conclusion,
		atts,
		isStop,
		nextRuleId,
		subRuleIds,
		cornerStoneId,
	} = req.body;
	const rule = await Rule.find(ruleId).exec();
	if (rule.length === 0) {
		return res.status(404).json('rule not found in this ruleid');
	}

	const id = rule[0]._id;
	const newRule = await Rule.findByIdAndUpdate(
		id,
		{
			name,
			ruleParent,
			caseType,
			target,
			conclusion,
			atts,
			isStop,
			nextRuleId,
			subRuleIds,
			cornerStoneId,
		},
		{ new: true }
	).exec();
	return res.json(newRule);
};

// delete rule by ruleId
const deleteRule = async (req, res) => {
	const ruleId = req.params;
	const rule = await Rule.find(ruleId).exec();
	console.log(rule);
	if (rule.length === 0) {
		return res.status(404).json('rule not found in this ruleid');
	}

	const id = rule[0]._id;
	await Rule.findByIdAndDelete(id).exec();
	return res.status(200).send('delete successful');
};

module.exports = {
	addRule,
	getRulesByRuleId,
	getRulesByCaseType,
	updateRule,
	deleteRule,
};
