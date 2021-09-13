const express = require('express');
const { verify } = require('../controllers/verify');

const router = express.Router();

router.get('/', verify);

module.exports = router;
