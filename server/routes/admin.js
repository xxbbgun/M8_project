const { show, add, update,deletebook } = require('../controllers/admin.controller');

const router = require('express').Router();

router.get("/getbook",show)
router.post("/addbook",add)
router.put("/updatebook/:id",update)
router.delete("/deletebook",deletebook)
module.exports = router