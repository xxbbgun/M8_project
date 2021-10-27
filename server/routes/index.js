const auth = require('./auth');
const timeline = require('./timeline');

const router = require("express").Router();

router.use("/auth", auth);
router.use("/timeline", timeline);

module.exports = router;