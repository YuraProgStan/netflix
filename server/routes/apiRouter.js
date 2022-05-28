const {Router} = require('express');

const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const movieRouter = require('./movieRouter');
const listRouter = require('./listRouter');

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/movies', movieRouter);
router.use('/lists', listRouter);

module.exports = router