const {post,getpost} = require('../controllers/timeline.controller');
const router = require('express').Router();
router.post("/post",post);
router.get("/getpost", getpost);

module.exports = router