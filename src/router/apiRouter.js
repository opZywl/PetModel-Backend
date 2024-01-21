const express = require('express');
const router = express.Router();
const petRouter = require('./petRouter');
const authRouter = require('./authRouter');
const loggerMiddleware = require('../middlewares/loggerMiddleware');

router.use(loggerMiddleware);
router.use('/pets', petRouter);
router.use('/auth', authRouter);

module.exports = router;
