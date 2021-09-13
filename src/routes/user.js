const express = require('express');
// const { AdminLogin } = require('../controllers/auth');
const { addUser } = require('../controllers/user');

const router = express.Router();

router.post('/', addUser);
// router.post('/login', AdminLogin);

module.exports = router;
