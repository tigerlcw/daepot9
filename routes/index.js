var express = require('express');
var router = express.Router();

var test = require('./db-test');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', logined: test.logined, cert: test.cert });
});

module.exports = router;
