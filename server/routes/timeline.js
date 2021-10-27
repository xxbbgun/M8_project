const {post,getpost} = require('../controllers/timeline.controller');
const authToken =require('../middleware/authToken');
const router = require('express').Router();
router.post("/post",authToken,post);
router.get("/getpost",authToken, getpost);

module.exports = router