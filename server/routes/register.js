var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.send({
    message: `${req.body.accountType} registered with email ${req.body.email} and name ${req.body.name}`
  });
});

module.exports = router;
