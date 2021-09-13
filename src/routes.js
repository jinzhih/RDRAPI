const express = require('express');

const paymentRouter = require('./routes/payment');
const userRouter = require('./routes/user');
const authRoute = require('./routes/auth');
const verifyRoute = require('./routes/verify');
const ruleRoute = require('./routes/rule');

const router = express.Router();

router.use('/payment', paymentRouter);
router.use('/user', userRouter);
router.use('/auth', authRoute);
router.use('/verify-email', verifyRoute);
router.use('/rules', ruleRoute);

module.exports = router;
