const express = require('express');
const { UserLogin } = require('../controllers/auth');

const router = express.Router();

router.post('/', UserLogin);

module.exports = router;
