const {facebook} = require('../controllers/auth.controller');

const router = require('express').Router();

router.post("/signin/facebook",facebook)

module.exports = router