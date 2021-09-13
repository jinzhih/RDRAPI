const express = require('express');
const {
	addRule,
	getRulesByRuleId,
	getRulesByCaseType,
} = require('../controllers/rule');

const router = express.Router();

router.post('/', addRule);
router.get('/ruleid/:ruleId', getRulesByRuleId);
router.get('/casetype/:caseType', getRulesByCaseType);

module.exports = router;
