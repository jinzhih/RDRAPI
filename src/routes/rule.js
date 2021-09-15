const express = require('express');
const {
	addRule,
	getRulesByRuleId,
	getRulesByCaseType,
	updateRule,
	updateRuleAndAdd,
	deleteRule,
} = require('../controllers/rule');

const router = express.Router();

router.post('/', addRule);
router.get('/ruleid/:ruleId', getRulesByRuleId);
router.get('/casetype/:caseType', getRulesByCaseType);
router.delete('/ruleid/:ruleId', deleteRule);
router.put('/:ruleId', updateRule);
router.put('/changeRule/:ruleId', updateRuleAndAdd);

module.exports = router;
