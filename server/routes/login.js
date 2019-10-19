var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.send({
    message: `${req.body.email} has logged in`
  });
});

module.exports = router;
