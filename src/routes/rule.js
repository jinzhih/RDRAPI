const express = require('express');
const {
	addRule,
	getRulesByRuleId,
	getRulesByCaseType,
	deleteRule,
} = require('../controllers/rule');

const router = express.Router();

router.post('/', addRule);
router.get('/ruleid/:ruleId', getRulesByRuleId);
router.get('/casetype/:caseType', getRulesByCaseType);
router.delete('/ruleid/:ruleId', deleteRule);

module.exports = router;
