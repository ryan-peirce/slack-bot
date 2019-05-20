var express = require('express');
var router = express.Router();

/* POST event */
router.post('/', function(req, res, next) {
    console.log("event recieved: " + req.body.test);
    res.send("okay:" + req.body.test);
});

module.exports = router;