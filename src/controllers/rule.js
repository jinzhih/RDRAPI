const Rule = require('../models/rule');

// add rule
const addRule = async (req, res) => {
	console.log(req.body);
	const {
		ruleId,
		ruleName,
		ruleOrder,
		ruleParent,
		caseType,
		ruleTarget,
		ruleConclusion,
		ruleFeatures,
		isStop,
	} = req.body;

	const existingRule = await Rule.findOne({ ruleId });
	if (existingRule) {
		return res.status(202).json('Rule already exist');
	}

	const rule = new Rule({
		ruleId,
		ruleName,
		ruleOrder,
		ruleParent,
		caseType,
		ruleTarget,
		ruleConclusion,
		ruleFeatures,
		isStop,
	});

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

module.exports = { addRule, getRulesByRuleId, getRulesByCaseType };
