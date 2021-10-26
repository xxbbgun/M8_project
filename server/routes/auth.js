const {facebook,register,signin,post,getpost} = require('../controllers/auth.controller');

const router = require('express').Router();

router.post("/signin/facebook",facebook);
router.post("/sign-up",register);
router.post("/sign-in",signin);
router.post("/post",post);
router.get("/getpost", getpost);

module.exports = router

