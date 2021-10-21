const admin = require('./admin');
const auth = require('./auth');
const router = require('express').Router();

router.use("/admin",admin)
router.use("/auth",auth)

module.exports = router