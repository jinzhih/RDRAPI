const genRuleOrder = (maxRule) => {
	if (maxRule.length === 0) {
		return 1;
	} else {
		return maxRule[0].ruleOrder + 1;
	}
};

module.exports = {
	genRuleOrder,
};
