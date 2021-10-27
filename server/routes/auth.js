const {facebook,register,signin} = require('../controllers/auth.controller');
const router = require('express').Router();

router.post("/signin/facebook",facebook);
router.post("/sign-up",register);
router.post("/sign-in",signin);


module.exports = router

