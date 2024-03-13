const router = require('express').Router();

router.use('/users', require('./userRoutes'));
router.use('/languages', require('./languageRoutes'));
router.use('/lessons',  require('./lessonRoutes'));
router.use('/quizzes', require('./quizRoutes'));
router.use('/tests', require ('./testRoutes'));

module.exports = router;